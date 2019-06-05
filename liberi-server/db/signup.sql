insert into users (user_id, username, hashpass, first_name, last_name, email) values ($1, $2, $3, $4, $5)
returning *;