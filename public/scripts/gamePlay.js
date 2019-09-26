module.exports = (db) => {
    const getAllGames = () => {
        return db.query(`
        SELECT *
        FROM games
        ORDER BY id;
        `)
        .then ((response) => {
            return response.rows
        })
    }
    const getGameID = () => {
        return db.query(`
           SELECT id FROM games
           ORDER BY DESC
           LIMIT 1; 
        `)
        .then((response) => {
            return response.rows
        })
    }
    const newGame = (userID) => {
        return db.query(`
            INSERT INTO games (creator_id)
            VALUES($1);`, [userID])
        .then(() => {
            return db.query(`
                SELECT * FROM creator_hand;
                `)
        })
        .then((response) => {
            return response.rows
        })
    }

    const joinGame = (userID, gameID) => {
        return db.query(`
            UPDATE games
            SET opponent_id = $1
            WHERE id = $2
            RETURNING *;
        `, [userID, gameID])
        .then(() => {
            return db.query(`
            SELECT * FROM opponent_hand;
            `)
        })
        .then((response) => {
            return response.rows
        })
    }

    const updateCards1 = (gameID) => {
        return db.query(`
        UPDATE creator_hand
            SET game_id = $1;
        `, [gameID])        
        .then(() => {
        return db.query(`
        INSERT INTO creator_hand (card_id, colour, value, image_url)
        SELECT id, colour, value, image_url
        FROM cards
        WHERE playable = true
        ORDER BY random() 
        LIMIT 7
        RETURNING *;
        `)
        })
    }

    const newCard = (userID) => {
        db.query(`
        SELECT opponent_id FROM games
        WHERE games.id = $1
        `)
        .then((response) => {
            return response.rows
        })

        return db.query(`
        INSERT INTO opponent_hand (card_id, colour, value, image_url)
        SELECT id, colour, value, image_url
        FROM cards
        WHERE playable = true
        ORDER BY random() 
        LIMIT 1
        RETURNING *;`)
        .then((response) => {
            return response.rows
        });
    }

    const seeHand = () => {
        db.query(`
            SELECT * FROM opponent_hand
            RETURNING *;
        `)
        .then((response) => {
            return response.rows
        })
    }

    return {
        getAllGames,
        newGame,
        joinGame,
        updateCards1,
        newCard,
        seeHand,
        getGameID
    }
}