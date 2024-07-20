CREATE TABLE IF NOT EXISTS 'trips' (
    id TEXTO PRIMARY KEY,
    destination TEXT NOT NULL,
    start_date DATETIME,
    end_date DATEtIME,
    owner_name TEXT NOT NULL,
    owner_email TEXT NOT NULL,
    status INTERGER
);

CREATE TABLE IF NOT EXISTS 'emails_to_invite' (
    id TEXT PRIMARY KEY,
    trip_id TEXT,
    email TEXT NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

CREATE TABLE IF NOT EXISTS 'links' (
    id TEXT PRIMARY KEY,
    trip_id TEXT,
    link TEXT NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);



