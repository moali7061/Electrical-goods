import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import { useState } from "react";
import slide_1 from "./assets/test1.png"
import slide_2 from "./assets/test2.png"
import slide_3 from "./assets/test3.png"
import slide_4 from "./assets/test4.png"
import slide_5 from "./assets/test5.png"
import slide_6 from "./assets/test6.png"
import slide_7 from "./assets/test7.png"
import slide_8 from "./assets/test8.png"


export function Carousel  (props){
    const list = [
        {
            src: slide_1,
            alt: ""
        },
        {
            src: slide_2,
            alt: ""
        },
        {
            src: slide_3,
            alt: ""
        },
        {
            src: slide_4,
            alt: ""
        },
        {
            src: slide_5,
            alt: ""
        },
        {
            src: slide_6,
            alt: ""
        },
        {
            src: slide_7,
            alt: ""
        },
        {
            src: slide_8,
            alt: ""
        }

    ]
    const [slide, setSlide] = useState(0);
    const nextslide=()=>{
        setSlide(slide===list.length -1? 0: slide +1);
    }
    const prevslide=()=>{
        setSlide(slide===0? data.length-1 : slide - 1);
    }
    return(
    <div className="carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevslide}/>
        {list.map((e, idx)=>{
            return(<img src={e.src} alt={e.alt} key={idx} className={slide=== idx? "slide": "slide slide-hidden"}/>);
        })}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextslide}/>
        <span className="indicators">
            {list.map((_, idx)=>{
                return <button key={idx} onClick={null} className={slide === idx? "indicator": "indicator-inactive"}></button>
            })}
        </span>
    </div>);
}