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
    await db.query("update product set count = $1 where product_id = $2",[count, product_id]);
    console.log("counts updated successfully");
}

export async function get_Order(user_id){
    
    const list = await db.query("select * from orders as o INNER JOIN product as p on o.p_id = p.product_id where o.u_id = $1 ",[user_id]);
    console.log("we are in the repository: ",list.rows);
    return list.rows;
}