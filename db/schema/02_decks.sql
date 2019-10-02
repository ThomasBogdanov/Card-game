DROP TABLE IF EXISTS decks CASCADE;
CREATE TABLE decks (
  id SERIAL PRIMARY KEY NOT NULL,
  card_id INTEGER REFERENCES cards(id) NOT NULL,
  game_id INTEGER REFERENCES games(id) NOT NULL,
  creator_hand INTEGER,
  opponent_hand INTEGER,
  current_card INTEGER NOT NULL
);
