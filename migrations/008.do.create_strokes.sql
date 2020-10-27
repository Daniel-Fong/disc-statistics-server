CREATE TABLE strokes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    hole_id INTEGER REFERENCES holes(id) ON DELETE CASCADE NOT NULL,
    date_modified TIMESTAMPTZ DEFAULT now() NOT NULL,
    disc_id INTEGER REFERENCES discs(id),
    hand INTEGER REFERENCES users(hand) NOT NULL,
    shot_type TEXT NOT NULL;
    shot_result TEXT NOT NULL;
    wind TEXT,
    wind_direction TEXT,
    notes TEXT
);