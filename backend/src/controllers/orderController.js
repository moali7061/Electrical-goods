import {add_order_service, get_Uorder} from "../services/orderService.js"

export const add_order_controller = async(req, res)=>{
    try{
        const x = req.session.userId;
        if(!x){
            return res.status(401).send({message:"you must login first"});
        }else{
            const {product_id, count, price_one}= req.body
            const result = await add_order_service(x, product_id, count, price_one);

            res.status(200).send({message: result});
        }
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

export const get_user_order = async(req, res)=>{
    try{
        const x = req.session.userId;
        const y = req.session.username;
        if(!x){
            return res.status(401).send({message:"you must login first"});
        }else{
            const result = await get_Uorder(x);
            console.log("the list in controller : " , result);
            return res.status(200).send({
                username: y,
                message:"correct",
                list_of_results: result.list_of_orders
            });
            
        }
    }catch(err){
        console.log("you are here" + err);
        res.status(500).send(err);
    }
}