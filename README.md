# Clean Leie website

Plain HTML, CSS and vanilla JavaScript. No framework, no build step, no npm. Full project background is in `CLAUDE.md`.

```
index.html       Home
algae.html       Algae guide
suppliers.html   Local suppliers
report.html      Report form (map + photo)  → js/report.js, js/config.js
cleanup.html     Canoe cleanup action
privacy.html     GDPR privacy notice
css/style.css    One stylesheet, mobile first
img/             Put your own photos here
supabase/schema.sql  Database table + security rules for reports
```

## Run it locally

Double-click `index.html`, or for a proper local server:

```
python3 -m http.server 8000     # then open http://localhost:8000
```

VS Code's "Live Server" extension works too.

## Before publishing: fill in the placeholders

Everything not verified yet has a yellow **To verify** / **To fill in** label (`class="todo"` in the HTML). Search the project for `todo` and replace each one. Main ones: algae facts (check against VMM / Agentschap Zorg en Gezondheid), the supplier list, the cleanup details, and the team email on the privacy page.

## Store reports: Supabase (free, EU)

Why Supabase: free tier, a real Postgres database (familiar SQL, like your Spring Boot projects), you can pick an EU data centre, and the browser can talk to it directly so you don't need to host a backend. Photos go in its free file storage.

1. Make a free account at supabase.com and create a project. **Region: Central EU (Frankfurt).**
2. Open SQL Editor, paste `supabase/schema.sql`, and run it.
3. Go to Project Settings > API. Copy the Project URL and the `anon` `public` key into `js/config.js`.
4. Send a test report. It shows up under Table Editor > reports, photos under Storage > report-photos.

The anon key is safe to put in public code: the rules in `schema.sql` only let it **add** reports, never read, change or delete them. Never put the `service_role` key in the website.

Note: free Supabase projects pause after a week with no activity. Open the dashboard to wake it up, or just keep sending test reports during the project.

Until `config.js` is filled in, the form runs in demo mode: it shows a thank-you message but stores nothing.

**Simpler alternative** if you'd rather not set up a database: a Google Form embedded on the report page. Easier, but data sits in Google's (US-based) systems, there's no map pin, and it looks less like your own site.

## Host it: GitHub Pages (free)

1. Create a GitHub repository and push these files to the `main` branch.
2. Repository Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site appears at `https://<username>.github.io/<repo>/` after a minute. Use that URL for the QR code on the posters.

Netlify or Cloudflare Pages work the same way (drag-and-drop the folder) if you prefer.

## Dutch version later

Copy the pages into a `nl/` folder, translate the text, fix the `css/` and `js/` paths to `../css/` and `../js/`, and add a language link in the nav.
