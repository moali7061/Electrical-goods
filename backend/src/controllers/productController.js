import {all_products, product_by_category} from '../services/productServices.js'

export const allProducts = async (req, res)=>{

    try{

        const result = await all_products();
        res.status(200).send(result);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
} 

export const product_category = async(req, res)=>{
    try{
        const category = req.body.category;
        const list = await product_by_category(category);
        res.status(200).send(list);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
}