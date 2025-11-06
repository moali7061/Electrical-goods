 import db from '../config/db.js'
 //product 

export async function getAllProducts(){
    const list = await db.query('select * from product');
    return (list.rows);
}