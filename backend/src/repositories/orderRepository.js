import db from '../config/db.js'

export async function add_order(user_id, product_id, count, Odate, price_per_one ){
    await db.query("insert into orders (u_id , p_id, quantity , order_date , price_for_one ) values($1, $2, $3, $4,$5)",[user_id, product_id, count, Odate, price_per_one]);
}

export async function found_combination(user_id, product_id){
    const x = await db.query("select * from orders where u_id = $1 and p_id = $2", [user_id, product_id]);
    return x.rows[0];
}

export async function updater(count, product_id, user_id){
    await db.query("update orders set quantity = $1 where p_id = $2 and u_id = $3",[count, product_id, user_id]);
}

export async function getProductByID(product_id){
    const list = await db.query("select * from product where product_id = $1",[product_id]);
    return list.rows[0];
}

export async function updateProductCount(product_id, count){
    await db.query("insert into product (product_id, count) values($1, $2)",[product_id, count]);
}