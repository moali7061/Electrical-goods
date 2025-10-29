import db from '../config/db.js';

//need to change the table name from student to user

export async function findByEmail(email){
    const result = await db.query('select * from sudents where email=$1',[email]);
    return result.rows[0];
}

export async function changePassword(email, hashedPassword){
    await db.query('UPDATE students SET password = $1 where email = $2',[hashedPassword, email]);
}

export async function createUser(username, email, hashedPassword){
    await db.query('insert into students (username, email, password) values($1, $2, $3)',[username, email, hashedPassword]);
}