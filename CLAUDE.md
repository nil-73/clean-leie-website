# Clean Leie: project context

Everything about this project so far, in one file. Put it in the root of the Claude Code project as `CLAUDE.md` (or reference it from there) so Claude Code has the full background before building anything.

---

## 1. What this project is

- **Course:** HOGENT E-lab, a design-thinking group project. Teacher: Wouter Hendrickx.
- **Theme:** water pollution in the rivers and canals of Ghent (Belgium), and how it affects the businesses along the water.
- **Project name:** **Clean Leie** (the Leie is one of Ghent's rivers).
- **Deliverable to build now:** a **website that helps the businesses along Ghent's canals with algae and pollution**, plus a real-world **cleanup action** that the website documents.
- **Language of all project material:** English.

### Team background (relevant for tech choices)
- IT students at HOGENT. We know how to build websites and apps and how to work with APIs and data.
- The most recent full project of one team member (Nil) was a Java + Spring Boot API with a vanilla JavaScript frontend. Frontend frameworks are fairly new to them.
- The project needs **free hosting and free tools**. There is no budget.

---

## 2. The problem

### Original framing (dropped)
At first we focused on **tourists on the canal boat tours** in Ghent's historic centre (Graslei, Korenlei, Gravensteen). They see green, algae-covered water with floating trash, and in warm weather they smell it. Most of the pollution comes from upstream: fertilizer runoff from farms and waste from industry.

### Current framing (what we build for)
We realised that the biggest problems fall on **the businesses**, not on their customers: boat tour companies, restaurants with canal-side terraces, and other businesses along the river.

- Boat motors get clogged by algae and need extra cleaning
- Smell near restaurant terraces in the summer season
- Extra maintenance costs that come back every summer, with no clear place to find help

> **Note:** these problems are our team's insight. We haven't confirmed them yet with a full interview with a business owner. Pillar 1 (below) is to interview at least one boat company and one restaurant.

### How Might We (final)
> **How might we help the businesses along Ghent's canals deal with the problems caused by algae and pollution, so that they can run their business without extra costs and hassle?**

Earlier versions, for history:
- "How might we regulate farmer pollution for the business near the river so that we improve customer experience?" (the first brainstorm question)
- "How might we reduce the pollution from farms and industry that reaches Ghent's canals, so that the businesses along the river can give their customers a cleaner and more pleasant boat trip?" (design brief version)

---

## 3. The product to build: Clean Leie website

**Target users:** owners and staff of businesses along Ghent's canals (boat companies, restaurants, cafés). Secondary users are locals and tourists who report problems.

### Features (from the Challenge-Action Canvas)

| # | Feature | What it does |
|---|---|---|
| 1 | **Algae guide** | Explains the kinds of algae and plants people see in Ghent's canals, how to recognise each one, whether it's harmful, and why it grows. |
| 2 | **Local suppliers** | A list of local stores that sell what businesses need in summer: motor cleaning products, filters for boats, odour solutions for restaurants. It uses public information only (no partnerships yet). |
| 3 | **Report form** | Businesses, locals and tourists report algae, trash or smell at a spot on the canals, so we collect real data. |
| 4 | **Cleanup action page** | Photos and results from a canoe cleanup (joined or organised with an existing group such as Dokano). |

### Algae guide content (starting point; **verify against an official source before publishing**)
- **Duckweed (Dutch: *kroos*):** the green carpet on the surface. It's a tiny floating plant, not an algae.
- **Filamentous algae:** stringy green threads, often around docks and canal walls.
- **Blue-green "algae" (cyanobacteria):** technically bacteria. In hot summers they can be toxic to people and dogs, so this is the most important one to explain clearly.
- For each type, show: a photo, how to recognise it, whether it's harmful, and why it grows. The link to the root cause is fertilizer (nitrates/phosphates) from upstream farms, plus warm, slow-moving water.

### Report form: suggested fields
- Type of problem: algae / trash / smell / other
- Location on the canals (a map pin, or a choice of known spots: Graslei, Korenlei, Gravensteen, Lieve, Coupure, Portus Ganda, etc.)
- Date and time
- Optional photo
- Optional description
- Reporter type: business / local / tourist (optional business name)
- Optional contact email (GDPR: keep it optional, say what it's used for, and store as little as possible)

### Requirements and constraints
- **Free** hosting and free tools, with no external budget and no approval needed from the city.
- **GDPR**: the report form collects personal data only if necessary, with a clear purpose and consent.
- Should work well on a **phone**, because people will report from the canal side via a QR code on posters.
- Probably **multilingual** later (English first; Dutch is the local language, and tourists use other languages).
- The supplier list only uses **public information** and should look neutral, not like paid advertising.

### Success metrics (Pillar 5)
Number of reports, website visits, businesses reached, and trash collected at the cleanup. We'll show these in the final presentation.

---

## 4. Mission and plan (Challenge-Action Canvas)

**Mission:** *Give the businesses along Ghent's canals practical help with algae and pollution, and get people involved in cleaning the river.*

**Five pillars (sub-actions):**
1. **Research and talk to businesses:** collect facts on the algae and the causes, and interview at least one boat company and one restaurant to confirm their problems.
2. **Website:** build the algae guide, the local suppliers page and the report form.
3. **Cleanup action:** contact a cleanup group, pick a date, take photos.
4. **Spread the word:** contact river businesses directly, plus a QR code, posters and social media posts.
5. **Measure and present:** count reports, visits, businesses reached and trash collected, and show the results.

**Feasibility check ("Can we build it ourselves?"):**
- First try (filters, regulation, new docks) → **NO, reshape.** These need the city, the Flemish government and a lot of money.
- Reshaped project (website + cleanup action) → **YES, build.** Free hosting and tools, public supplier info, existing cleanup groups. Store partnerships can come later.

**Next steps after the first action (organisations to contact):**
- **Dokano:** they already run canoe cleanups, so this is the easiest first contact.
- **IVAGO:** Ghent's waste company, for processing what gets collected.
- **De Vlaamse Waterweg:** the agency that manages the waterways, for bigger cleanups.
- **City of Ghent:** regular cleaning and, long term, the regulation and filter ideas we dropped.
- **Local stores:** turn the supplier list into real partnerships (for example summer offers for river businesses).

### Team inventory
- **Who we are:** we care about the environment and animals, we're a curious international group that sees Ghent with fresh eyes, and we're practical problem-solvers.
- **What we know:** IT (websites, apps, APIs, data), design thinking (interviews, personas, brainstorming), several languages, social media.
- **Who we know:** the person we interviewed, boat companies and restaurants along the river, local stores, our teacher and HOGENT's E-lab, fellow students, Dokano.

---

## 5. Design Brief Canvas (earlier stage, tourist focus)

This was written before the switch to the business focus. It's kept here for background.

- **Problem space:** tourists on canal boat tours see algae and trash and smell the water. Boarding at the dock and the first part of the trip through narrow, slow canals are the worst moments. It also hurts Ghent's image.
- **Functional:** stop or filter pollution before the city centre, remove algae and trash daily, reduce smell, keep docks clean, track water quality publicly.
- **Technical:** water quality sensors, mesh filters on historic locks (such as the Rabot), electric boats, aeration under docks. Everything has to fit narrow, shallow historic canals.
- **Economical:** funding from the city, the Flemish government and the EU, tax breaks for water recycling, fines for polluters, cheap options first.
- **Legal/ethical:** EU and Flemish water rules, work with De Vlaamse Waterweg, protect the historic look, don't harm wildlife, be fair to farmers, GDPR for public data.
- **Logistical:** cleaning early in the morning, waste goes to IVAGO, maintenance peaks in summer (algae) and autumn (leaves), coordination takes years.

**MoSCoW at that stage:**
- **Must:** rules and fines for industrial and farm discharge (idea 7), filters or booms at the city entrance (idea 8), daily cleaning boats (idea 5)
- **Should:** dock filtration and anti-algae measures (idea 1), routes and times that avoid smell (idea 4), a public water-quality dashboard
- **Could:** reed beds and mussels as natural filters (idea 6), better hulls (idea 2), eco-tours
- **Won't (for now):** redesigning the historic canals (idea 3), scented boats, releasing trained animals

---

## 6. User research

### Persona (made for the tourist focus; **no longer matches the main user**)
- **Kate**, 42, salesperson. Calm, discreet, hangs out with friends. Blonde short hair, comfy clothes. Free time: pilates, baking.
- Reach her on Facebook, by phone or by email. Tech: phone; favourite app: Facebook.
- What makes her get involved: fighting animal suffering. Challenge to engagement: violence.
- → We still need a **new persona for a business owner** (for example a boat company owner or a restaurant owner on the Graslei).

### Interview questions (tourist interview)
1. **Expectations before the boat trip:** what did you expect, why did you choose this trip, did you expect the water to look like this?
2. **First impressions:** what did you think of the river, and of the cleanliness of the boat?
3. **Pollution and environment:** what might cause the water to look this way, and does it affect Ghent's image?
4. **Evaluation:** did you feel uncomfortable (why), and what did you enjoy least and most?
5. **Solutions:** what would improve the trip, and what could improve the water?
6. **Final thoughts:** would the water condition affect whether you recommend the trip, and anything to add?

(No interview answers are recorded in this file.)

---

## 7. Brainstorm (lotus blossom): 8 ideas and 64 sub-ideas

Central question at the time: *How might we regulate farmer pollution for the business near the river so that we improve customer experience?*

Concept clusters used later: **A** = stop pollution at the source (ideas 7, 8) · **B** = clean the water (5, 6) · **C** = better tour experience (1, 2, 4) · **D** = inform and involve people. **We chose D + B.**

1. **Improve the docks for easy boat access and fighting algae:** algae-resistant wood (Accoya) matching the Graslei/Korenlei look; underwater aerating bubblers at the Groentenmarkt; floating modular docks near Portus Ganda that can be removed during the Gentse Feesten; native reed beds (rietkragen) around platforms; silent pumps near the Gravensteen; sloped dock edges against puddles; local startups pressure-washing docks; UV-C LEDs at night. (Team idea: a filtration system in the docks for easy cleaning of algae.)
2. **Upgrade tourist boats and hull design:** ultra-shallow electric "whisper boats" (fluisterboten) for the Lieve; enclosed jet drives instead of propellers to avoid duckweed (kroos); non-toxic hull coatings approved by De Vlaamse Waterweg; blunt bows for bottlenecks like the Kraanlei; standard widths for historic locks (sluizen); micro-vibration hull tech; protected macerator blades at intakes; hulls from recycled local plastics.
3. **Tweak water flow and canal structures:** use the Sint-Baafs lock to flush stagnant parts of the Leie; bio-swales along the Coupure; more frequent dredging; aeration pipes in the Visserij canal; rounded underwater corners near the guildhalls; smart sluice gates to divert farm runoff; willow trees for shade; lime mortar that inhibits algae. (Team idea: change the design of canals entering the city from farm areas.)
4. **Fix tour routes and canal smells:** avoid confluence points after sewer overflows; canopies that use westerly winds for ventilation; 100% electric boats (no diesel smell); avoid narrow canals on hot afternoons; carbon air filters in covered winter boats; light natural scents (hops, florals); use UGent sensor data to avoid smelly zones; raise seating decks. (Team idea: canal signals that show better routes depending on smell.)
5. **Regular cleanups and trash collection:** UGent/Artevelde students piloting electric cleaning boats; scale up Dokano canoe cleanups; remote-controlled trash-skimming drones from De Krook; "eco-tours" where tourists help fish out debris; a daily cleaning barge on the Ringvaart; grabbers for bikes thrown in canals; integration with IVAGO; 5 AM cleaning sweeps before tours start.
6. **Use wildlife and biology:** native herbivorous fish; freshwater mussels in cages under bridges; protect ducks and coots near Bourgoyen-Ossemeersen; zooplankton that eat cyanobacteria; native snails on canal walls; floating wetland islands; monitored bottom-feeding fish; sheep grazing the banks at the Watersportbaan. (Team idea: trained animals that eat algae, sent in every 2 weeks and then taken out again so the river fauna isn't affected.)
7. **Regulate and track pollution (industry and farms):** stricter discharge limits in the North Sea Port canal zone; penalties for upstream farms leaking nitrates; IoT sensors on discharge pipes; separate rainwater and sewage; tax breaks for closed-loop water recycling (breweries, textiles); a **public real-time water-quality dashboard**; ban phosphate-heavy cleaners for riverside businesses; regulate construction runoff. (Team ideas: regulate river access for certain boats; regulate the boats that go on the river.)
8. **Filter trash and runoff before the centre:** a bubble curtain where the Scheldt enters the city; fine mesh screens on locks like the Rabot; floating trash booms at the ring canal; reed beds at intake points; carbon filters on storm drains; an automated water-wheel trash collector near a lock; sediment basins upstream; netting during autumn leaf fall.

---

## 8. Timeline and deliverables (from class)

- Customer journey presentation: 13/10.
- 03/11: Design Brief Canvas (readable photo), interview questions + answers + a selfie with the interviewee (document), lotus blossom brainstorm (PowerPoint), plus an email and a presentation.
- 16/11: Challenge-Action Canvas presentation (Canva deck "Clean Leie", 11 slides).

## 9. Existing files and links

- Challenge-Action Canvas (Google Doc, latest): https://docs.google.com/document/d/1zW0wZ6UKJzkzSdmSYMWPTq2GzKXKhZltqp1v8RMuCg8/edit
- Presentation (Canva): https://canva.link/4i723fny68pg5xy
- Brainstorm deck: "River Conservation" PDF ("Let the river flow forever. Healthy Rivers, Healthy Planet")
- Design Brief Canvas spreadsheet: `design_brief_canvas.xlsx`

## 10. Open decisions for the build

- **Tech stack:** not chosen yet. It must be free to host. The team knows Java/Spring Boot and vanilla JS.
- **Where report-form data is stored:** a free database or form service. Consider GDPR.
- **Map:** whether to use a map (for example a free OpenStreetMap-based library) for report locations.
- **Languages:** English only at first, or also Dutch.
- **Supplier list:** which real local stores to include. This needs research with public info only.
- **Algae facts:** need checking against an official source before publishing.

---

## 11. Website build notes (v1, added by Claude)

Choices made for the first version. Change them freely; see `README.md` for setup.

- **Stack:** plain HTML + CSS + vanilla JS. No framework, no build step. Each page is its own `.html` file; the nav and footer are copied into each page on purpose (no templating needed for 6 pages).
- **Hosting:** any free static host. Recommended: GitHub Pages (or Netlify / Cloudflare Pages).
- **Report storage:** Supabase free tier, project created in an **EU region** (Frankfurt). Table + insert-only policies in `supabase/schema.sql`. The browser can add reports but can never read them back. Keys go in `js/config.js`. With an empty config the form runs in demo mode and stores nothing.
- **Map:** Leaflet + OpenStreetMap tiles from a CDN (free, no API key). The map pin is optional; the dropdown of known spots always works.
- **GDPR:** only email is personal data, and it's optional with a consent checkbox. Photos are re-encoded in the browser before upload, which strips EXIF metadata (GPS, phone model) and shrinks them. Retention and contact are on `privacy.html`.
- **Placeholders:** anything not verified yet is marked with `class="todo"` (shows a yellow "To verify" / "To fill in" label). Search the code for `todo` before publishing.
- **Languages:** English only. For Dutch later, the simplest path is copying pages into a `/nl/` folder.
