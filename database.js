

const getUserWithUsername = function (username) {
	let userQuery = `
	Select * FROM users
	where username = $1`
	return db.query(userQuery, [username])
	.then(res => res.rows[0])
	.catch(err => null)
}

exports.getUserWithUsername = getUserWithUsername


// const startnewGame = function() {
// 	let userQuery = `
// 	INSERT INTO games(creator_id)
// 	VALUES($1)
// 	RETURNING *;
// 	`
// 	return db.pool.query(userQuery)
// 	.then (res => res.rows)
// 	.catch(err => null)
		
// }

// exports.startNewGame = startNewGame;