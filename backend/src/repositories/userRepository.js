import db from '../config/db.js';

export async function findByEmail(email){
    const result = await db.query('select * from sudents where email=$1',[email]);
    return result.rows[0];
}

export async function changePassword(email, hashedpassword){
    await db.query('UPDATE students SET password = $1 where email = $2',[hashedpassword, email]);
}