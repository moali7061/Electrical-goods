import db from '../config/db.js'

export async function add_order(user_id, product_id, count, Odate, price_per_one ){
    await db.query("insert into orders (u_id = $1, p_id = $2, quantity = $3, order_date = $4, price_for_one = $5)",[user_id, product_id, count, Odate, price_per_one]);
}
