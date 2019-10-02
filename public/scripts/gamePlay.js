module.exports = (db) => {
    let playerHand = [];
    let cardPlayed = null;

    const getAllGames = () => {
        return db.query(`
        SELECT games.id, users.username
        FROM games
        JOIN users ON users.id = creator_id
        GROUP BY games.id, users.username
        ORDER BY id;
        `)
        .then((response) => {
            return response.rows
        })
    }

    const newGame = (userID) => {
        return db.query(`
            INSERT INTO games (creator_id)
            VALUES($1);`, [userID])
        .then((response) => {
            return response.rows
        })
    }

    const getDeck = () => {
        return db.query(`
            SELECT * 
            FROM cards
            ORDER BY random();
        `)
        .then((response) => {
            return response.rows
        })
    }

    // const startingCards = (cards) => {
    //     const hand = cards.slice(-7);
    //     playerHand.push(...hand);
    //     return playerHand;
    // }

    const drawCard = (cards) => {
        let numCards = -7;
        if(playerHand.length) {
            numCards = -1;
        }
        const card = cards.slice(numCards);
        playerHand.push(...card);
        return playerHand
    }

    const playCard = (card) => {
        console.log("CARD " + card)
        cardPlayed = card;
        for (let [deckcard, index] of playerHand.entries() ) {
            if(deckcard === card ){
                playerHand.splice(index, 1);
            }
        }
        return playerHand;
    }
    const getCardPlayed = () => {
        return cardPlayed;
    }

    return {
        getAllGames,
        newGame,
        getDeck,
        playCard, 
        getCardPlayed, 
        // startingCards,
        drawCard
    }
}