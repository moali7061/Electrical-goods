 import {getAllProducts, getProductsByCategory} from '../repositories/productRepository.js'

export const all_products = async()=>{
    try{
        let list;
        list = await getAllProducts();
        console.log(list);
        if (list.length>0){
            return list;
        }else{
            return("no products found");
        }
    }catch(err){
        res.status(500).send(err);
    }
} 

export const product_by_category = async(category)=>{
    try{
        let list;
        list = await getProductsByCategory(category);
        return list.length>0? list: "no products in this category";
    }catch(err){
        console.log(err);
    }
}