import db from '../config/db.js';

export async function findByEmail(email){
    const result = await db.query('select * from sudents where email=$1',[email]);
    return result.rows[0];
}

