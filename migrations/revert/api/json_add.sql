-- Revert boardgame:json_functions from pg

BEGIN;

DROP FUNCTION add_boardgame(json);
DROP FUNCTION update_boardgame(json);

COMMIT;
