import {add_order, found_combination, updater, getProductByID, updateProductCount}from'../repositories/orderRepository.js'

    

export const add_order_service = async(user_id, product_id, count, price_one)=>{
    try{
           const x = await found_combination(user_id, product_id);
           const quantity = parseInt(count);

           if(!x){
                const datetime = new Date();
                await add_order(user_id, product_id, quantity, datetime, price_one);
                const product = await getProductByID(product_id);
                console.log("count before = " + product.count);
                const newCount = product.count - quantity;
                console.log("count after = " + newCount);
                await updateProductCount(product_id, newCount);
                console.log("count updated");
                return {
                    message: "order added successfully",
                    count: newCount
                    }
            }else{
                const curr_count = x.quantity + quantity;
                const product = await getProductByID(product_id);
                console.log("count before = " + product.count);
                const newCount = product.count - quantity;
                console.log("count after = " + newCount);
                await updateProductCount(product_id, newCount);
                console.log("count updated");
                await updater(curr_count, product_id, user_id);

                return {
                    message: "order updated successfully",
                    count: newCount
                }
            }
    }catch(err){
        console.log(err);
        throw(err);
    }
}