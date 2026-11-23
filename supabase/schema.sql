-- Run this once in Supabase: SQL Editor > New query > paste > Run.
-- Create the Supabase project in an EU region (Frankfurt) first.

create table public.reports (
  id            bigint generated always as identity primary key,
  created_at    timestamptz not null default now(),
  problem_type  text not null check (problem_type in ('algae', 'trash', 'smell', 'other')),
  spot          text not null check (length(spot) <= 100),
  lat           double precision check (lat between 50.9 and 51.2),   -- roughly Ghent
  lng           double precision check (lng between 3.5 and 3.9),
  seen_at       timestamptz not null,
  description   text check (length(description) <= 2000),
  reporter_type text check (reporter_type in ('business', 'local', 'tourist')),
  business_name text check (length(business_name) <= 200),
  email         text check (length(email) <= 200),
  photo_path    text
);

-- Row Level Security: the public website (anon key) may only INSERT.
-- No select/update/delete policy = nobody can read reports with the public key.
-- The team reads them in the Supabase dashboard (Table Editor) or exports CSV.
alter table public.reports enable row level security;

create policy "Website can add reports"
  on public.reports for insert to anon
  with check (true);
-- ponytail: no spam protection. If bots find the form, add Cloudflare Turnstile (free) or a rate limit.

-- Private bucket for photos: the website can upload, only the team can view.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('report-photos', 'report-photos', false, 5242880, array['image/jpeg']);

create policy "Website can upload report photos"
  on storage.objects for insert to anon
  with check (bucket_id = 'report-photos');

-- GDPR clean-up at the end of the project (run by hand):
-- update public.reports set email = null;

-- Handy for the final presentation:
-- select problem_type, spot, count(*) from public.reports group by 1, 2 order by 3 desc;
