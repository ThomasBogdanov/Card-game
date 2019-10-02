DROP TABLE IF EXISTS creator_hand CASCADE;
CREATE TABLE creator_hand (
  id SERIAL PRIMARY KEY NOT NULL,
  game_id INTEGER REFERENCES games(id),
  card_id INTEGER REFERENCES cards(id),
  colour VARCHAR(10) NOT NULL,
  value VARCHAR(255) NOT NULL,
  playable BOOLEAN DEFAULT TRUE,
  image_url VARCHAR(255)
);

DROP TABLE IF EXISTS opponent_hand CASCADE;
CREATE TABLE opponent_hand (
  id SERIAL PRIMARY KEY NOT NULL,
  game_id INTEGER REFERENCES games(id),
  card_id INTEGER REFERENCES cards(id),
  colour VARCHAR(10) NOT NULL,
  value VARCHAR(255) NOT NULL,
  playable BOOLEAN DEFAULT TRUE,
  image_url VARCHAR(255)
);


