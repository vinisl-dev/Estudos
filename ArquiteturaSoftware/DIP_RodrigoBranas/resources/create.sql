drop schema branas cascade;

create schema branas;

create table branas.event (
    event_id uuid primary key,
    description text,
    price numeric
);

create table branas.ticket (
    ticket_id uuid PRIMARY key,
    event_id uuid,
    email text,
    price numeric
);



