import selection_card from "../../components/selection_card.jsx"
import { useState } from "react";

function Product_category(props){

    const lamp = [{

    },{

    },{

    }]

    const spot=[{

    },{

    }]

    const category = lamp;
    return(
        <div>
            {category.map((element, idx)=>(
                <selection_card image={element.src} direction={element.direction}/>
            ))}
        </div>
    );
}