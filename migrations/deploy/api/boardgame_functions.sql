-- Deploy boardgame:api/boardgame_functions to pg
BEGIN;

CREATE FUNCTION add_boardgame(TEXT, TEXT, TEXT, INT, INT, INT) RETURNS int AS $$
INSERT INTO boardgame (
        name,
        author,
        editor,
        min_players,
        max_players,
        min_age
    )
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_boardgame(text, text, text, int, int, int, int) RETURNS void AS $$
UPDATE boardgame
SET name = $1,
    author = $2,
    editor = $3,
    min_players = $4,
    max_players = $5,
    min_age = $6
WHERE id = $7;
$$ LANGUAGE SQL STRICT;

COMMIT;