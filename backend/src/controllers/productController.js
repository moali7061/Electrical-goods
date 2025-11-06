import {all_products} from '../services/productServices.js'

export const allProducts = async (req, res)=>{

    try{

        const result = await all_products();
        res.status(200).send(result);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
} 