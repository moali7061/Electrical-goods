import {add_order_service} from "../services/orderService.js"

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