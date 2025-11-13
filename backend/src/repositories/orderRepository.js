import db from '../config/db.js'

export async function add_order(user_id, product_id, count, Odate, price_per_one ){
    await db.query("insert into orders (u_id = $1, p_id = $2, quantity = $3, order_date = $4, price_for_one = $5)",[user_id, product_id, count, Odate, price_per_one]);
}

export async function found_combination(user_id, product_id){
    const x = await db.query("select * from orders where u_id = $1 and p_id = $2", [user_id, product_id]);
    return x.rows[0];
}

export async function updater(count, product_id, user_id){
    await db.query("update orders set count = $1 where p_id = $2 and user_id = $3",[count, product_id, user_id]);
}