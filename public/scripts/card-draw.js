function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

const user = getCookie(userID)

const newCard = (userID) => {
    const creator =
        db.query(`
        SELECT creator_id FROM games
        WHERE game.id = $1
        `)
        .then((response) => {
            return response.rows
        });

    if (creator === userID) {
        db.query(`
        INSERT INTO creator_hand (card_id, colour, value, image_url)
        SELECT id, colour, value, image_url
        FROM cards
        WHERE playable = true
        ORDER BY random() 
        LIMIT 1
        RETURNING *;`)
        .then((response) => {
            return response.rows
        })
    }
}

const drawCard = () => {
    $('img.deck').on('click', (() => {
        newCard(user)    
        $.ajax({
            url: '/uno/:id'
        })
    }))
}

$(document).ready(() => { //will not run any code until the document is loaded
    drawCard()
})