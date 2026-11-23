// Report form: optional map pin, photo clean-up, and sending to Supabase.
const { supabaseUrl, supabaseAnonKey } = window.CLEAN_LEIE_CONFIG;
const demoMode = !supabaseUrl || !supabaseAnonKey;

const form = document.getElementById("report-form");
const statusBox = document.getElementById("status");
const button = form.querySelector("button[type=submit]");

// Default the date field to "now" in local time.
const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
form.seen_at.value = now.toISOString().slice(0, 16);

// Map: OpenStreetMap via Leaflet, centred on the Graslei. Tap to place or move the pin.
let pin = null;
if (window.L) {
  const map = L.map("map").setView([51.0545, 3.7205], 15);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  map.on("click", (e) => {
    if (pin) pin.setLatLng(e.latlng);
    else pin = L.marker(e.latlng).addTo(map);
  });
} else {
  document.getElementById("map").hidden = true; // map library didn't load; the dropdown still works
}

// Re-draw the photo on a canvas: this strips EXIF metadata (GPS location, phone model)
// and shrinks it to max 1600px so uploads are fast on mobile data.
async function cleanPhoto(file) {
  const img = await createImageBitmap(file);
  const scale = Math.min(1, 1600 / Math.max(img.width, img.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.8));
}

const headers = { apikey: supabaseAnonKey, Authorization: `Bearer ${supabaseAnonKey}` };

async function uploadPhoto(blob) {
  const path = `${crypto.randomUUID()}.jpg`;
  const res = await fetch(`${supabaseUrl}/storage/v1/object/report-photos/${path}`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "image/jpeg" },
    body: blob,
  });
  if (!res.ok) throw new Error(`Photo upload failed (${res.status})`);
  return path;
}

function show(kind, text) {
  statusBox.className = `status ${kind}`;
  statusBox.textContent = text;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.email.value.trim();

  if (!form.problem_type.value) return show("err", "Please choose what you saw: algae, trash, smell or other.");
  if (!form.spot.value) return show("err", "Please choose the closest spot.");
  if (!form.seen_at.value) return show("err", "Please fill in the date and time.");
  if (email && !form.email.checkValidity()) return show("err", "That email address doesn't look right.");
  if (email && !form.consent.checked) return show("err", "To leave your email, please tick the consent box. Or leave the email empty.");

  const report = {
    problem_type: form.problem_type.value,
    spot: form.spot.value,
    lat: pin ? pin.getLatLng().lat : null,
    lng: pin ? pin.getLatLng().lng : null,
    seen_at: new Date(form.seen_at.value).toISOString(),
    description: form.description.value.trim() || null,
    reporter_type: form.reporter_type.value || null,
    business_name: form.business_name.value.trim() || null,
    email: email || null,
    photo_path: null,
  };

  button.disabled = true;
  show("ok", "Sending…");
  try {
    const file = form.photo.files[0];
    if (demoMode) {
      console.log("Demo mode, not stored:", report, file);
    } else {
      if (file) report.photo_path = await uploadPhoto(await cleanPhoto(file));
      const res = await fetch(`${supabaseUrl}/rest/v1/reports`, {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify(report),
      });
      if (!res.ok) throw new Error(`Saving failed (${res.status})`);
    }
    form.reset();
    form.seen_at.value = now.toISOString().slice(0, 16);
    if (pin) { pin.remove(); pin = null; }
    show("ok", demoMode
      ? "Thanks! (Demo mode: the database isn't connected yet, so nothing was stored.)"
      : "Thanks! Your report was sent. It helps us show where the canals need attention.");
  } catch (err) {
    console.error(err);
    show("err", "Sorry, sending failed. Please check your connection and try again.");
  } finally {
    button.disabled = false;
  }
});
