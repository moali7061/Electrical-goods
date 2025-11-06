 import {getAllProducts} from '../repositories/productRepository.js'

export const all_products = async()=>{
    let list;
    list = await getAllProducts();
    console.log(list);
    if (list.length>0){
        return list;
    }else{
        return("no products found");
    }
}