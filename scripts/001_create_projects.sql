-- Create projects table
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  technologies text[] not null default '{}',
  github_url text,
  demo_url text,
  image_url text,
  featured boolean not null default false,
  display_order integer not null default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.projects enable row level security;

-- Allow anyone to read projects (public portfolio)
create policy "projects_select_all" on public.projects 
  for select using (true);

-- Only authenticated users can insert/update/delete (admin)
create policy "projects_insert_auth" on public.projects 
  for insert with check (auth.uid() is not null);

create policy "projects_update_auth" on public.projects 
  for update using (auth.uid() is not null);

create policy "projects_delete_auth" on public.projects 
  for delete using (auth.uid() is not null);

-- Create function to update updated_at timestamp
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create trigger to auto-update updated_at
create trigger update_projects_updated_at
  before update on public.projects
  for each row
  execute function public.update_updated_at_column();
