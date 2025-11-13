import {add_order, found_combination, updater}from'../repositories/orderRepository.js'

    

export const add_order_service = async(user_id, product_id, count, price_one)=>{
    try{
           const x = await found_combination(user_id, product_id);
           const quantity = parseInt(count);

           if(!x){
                const datetime = new Date();
                await add_order(user_id, product_id, quantity, datetime, price_one);
                return "order added successfully";
                
            }else{
                const curr_count = x.quantity + quantity;
                await updater(curr_count, product_id, user_id);
                return "order updated successfully"
            }
    }catch(err){
        console.log(err);
        throw(err);
    }
}