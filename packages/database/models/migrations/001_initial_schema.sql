
create table users (
  id bigint primary key generated always as identity,
  name text,
  email text unique not null,
  email_verified timestamptz,
  password text,
  image text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  role text default 'USER'
);

create table domains (
  id bigint primary key generated always as identity,
  domain_name text unique not null,
  tld text not null,
  registrar text default 'opensrs',
  status text default 'PENDING',
  registration_date timestamptz not null,
  expiration_date timestamptz not null,
  auto_renew boolean default false,
  locked boolean default false,
  private_whois boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  user_id bigint not null,
  foreign key (user_id) references users (id) on delete cascade
);

create table dns_records (
  id bigint primary key generated always as identity,
  record_type text not null,
  name text not null,
  content text not null,
  ttl int default 3600,
  priority int,
  domain_id bigint not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  foreign key (domain_id) references domains (id) on delete cascade,
  unique (domain_id, record_type, name)
);

create table transactions (
  id bigint primary key generated always as identity,
  amount numeric not null,
  currency text default 'USD',
  status text default 'PENDING',
  transaction_type text not null,
  provider text default 'opensrs',
  provider_transaction_id text,
  metadata jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  user_id bigint not null,
  domain_id bigint,
  foreign key (user_id) references users (id) on delete cascade,
  foreign key (domain_id) references domains (id)
);

create table tld_pricing (
  id bigint primary key generated always as identity,
  tld text unique not null,
  register_price numeric not null,
  renew_price numeric not null,
  transfer_price numeric not null,
  min_registration_years int default 1,
  max_registration_years int default 10,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table domain_events (
  id bigint primary key generated always as identity,
  event_type text not null,
  data jsonb not null,
  processed boolean default false,
  processed_at timestamptz,
  created_at timestamptz default now(),
  domain_id bigint not null,
  foreign key (domain_id) references domains (id)
);

create table accounts (
  id text primary key,
  user_id bigint not null,
  type text not null,
  provider text not null,
  provider_account_id text not null,
  refresh_token text,
  access_token text,
  expires_at int,
  token_type text,
  scope text,
  id_token text,
  session_state text,
  foreign key (user_id) references users (id) on delete cascade,
  unique (provider, provider_account_id)
);

create table sessions (
  id text primary key,
  session_token text unique not null,
  user_id bigint not null,
  expires timestamptz not null,
  foreign key (user_id) references users (id) on delete cascade
);