 import db from '../config/db.js'
 //product 

export async function getAllProducts(){
    const list = await db.query('select * from product');
    return (list.rows);
}

export async function getProductsByCategory(category){
    const list = await db.query('select * from product where category = $1', [category]);
    return list.rows;
}