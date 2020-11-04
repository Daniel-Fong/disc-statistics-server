CREATE TABLE discs (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    disc_name TEXT NOT NULL,
    brand TEXT,
    mold TEXT,
    disc_type TEXT NOT NULL,
    plastic TEXT NOT NULL,
    stability TEXT NOT NULL,
    primary_color TEXT NOT NULL,
    secondary_color TEXT NOT NULL,
    speed INTEGER,
    glide INTEGER,
    turn INTEGER,
    fade INTEGER,
    photo_url TEXT,
    favorite BOOLEAN NOT NULL,
    thrown INTEGER NOT NULL,
    date_modified TIMESTAMPTZ DEFAULT now() NOT NULL,
    notes TEXT
);