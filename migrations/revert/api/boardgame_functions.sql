-- Revert boardgame:api/boardgame_functions from pg

BEGIN;

DROP FUNCTION add_boardgame;
DROP FUNCTION update_boardgame;

COMMIT;
