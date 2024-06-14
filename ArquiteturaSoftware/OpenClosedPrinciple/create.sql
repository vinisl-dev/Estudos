
drop schema branas cascade;
create schema branas;

drop table branas.room;
drop table branas.reservation;

create table branas.room(
    room_id uuid primary key,
    type text,
    price numeric
);

create table branas.reservation(
    reservation_id uuid primary key,
    room_id uuid,
    email text,
    checkin_date timestamp,
    checout_date timestamp,
    price numeric,
    status text,
    duration numeric
);

insert into branas.room (room_id, type, price) values ('aa354842-59bf-42e6-be3a-6188dbb5fff8', 'day', 1000);
insert into brans.room (room_id, type, price) values ('d5fdc6cb-bf69-4743-a288-dafed2517e38', 'hour', 100);
