import Selection_card from "../../components/selection_card/selection_card1.jsx"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import elsewedylamp from "../../assets/elsewedy_lamp_category.png" 
import elioslamp from "../../assets/elios_lamp.png"
import capitallight from "../../assets/CapitalLight.png"
import osram from "../../assets/osram.png"
import IDO from "../../assets/Ido.png"
import Avena from "../../assets/Avena.png"
import mostafa_mahmoud from "../../assets/mostafa_mahmoud.png"

import './product_category.css'
export default function Product_category(props){


    const location = useLocation();
    const selectedCategory = location.state?.category;

    
    const lamp = [
        {
            src: elsewedylamp,
            value: ['elsewedy' ,'lamp']
        },{
            src: elioslamp,
            value: ['elios' ,'lamp']
        },{
            src : capitallight,
            value: 'capital light lamp'
        },{
            src: osram,
            value: 'osram lamp'
        }
    ]

    const spot = [
        {
            src: Avena,
            value: ''
        }
    ]

    const led = [{
        src : IDO
    }]

    const khartoom = [{
        src : mostafa_mahmoud
    }]
    

    let category = [];
    if (selectedCategory === "lamp") category = lamp;
    if (selectedCategory === "spot") category = spot;
    if (selectedCategory === "led")  category = led;
    if (selectedCategory === "khartoom")  category = khartoom;
     if (!selectedCategory) {
        return <h2>No category selected.</h2>;
    }
    return(
        <div className="categories">
            {category.map((element, idx)=>(
                <Selection_card key={idx} classname="yala" image={element.src} direction={{path:'/listing', state:{filterKey:element.value}}}/>
            ))}
        </div>
    );
}
