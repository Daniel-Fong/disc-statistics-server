CREATE TABLE courses (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    course_name TEXT NOT NULL,
    course_id INTEGER NOT NULL,
    designer TEXT,
    terrain TEXT,
    tee_type TEXT, 
    basket_type TEXT,
    holes INTEGER NOT NULL,
    course_address TEXT NOT NULL,
    zip INTEGER,
    course_description TEXT,
    date_modified TIMESTAMPTZ DEFAULT now() NOT NULL,
    notes TEXT
);