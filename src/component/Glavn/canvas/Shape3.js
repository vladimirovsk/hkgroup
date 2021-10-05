import {Shape} from "react-konva";
import React, {useState} from "react";


import '../Glavn.css'

const Shape3 =() => {

    const [opacity, setOpacity] =useState(0)

    const canvasEnter =() =>{
        setOpacity(0.5);
    }
    const canvasOut =() =>{
        setOpacity(0);
    }

    const handleClick = (e) =>{
        alert(e)
    }


    return(
        <React.Fragment>
        <Shape className='Shape' onMouseEnter={canvasEnter} onMouseOut={canvasOut} onClick={handleClick}
               sceneFunc={(context, shape) => {
                   context.beginPath();
                   context.moveTo(260, 142);
                   context.lineTo(750, 0);
                   context.lineTo(790, 0);
                   context.lineTo(950, 220);
                   context.lineTo(950, 360);
                   context.lineTo(1038, 450);
                   context.lineTo(1038, 345);
                   context.lineTo(1076, 400);
                   context.lineTo(1076, 490);
                   context.lineTo(790, 230);
                   context.lineTo(170, 340);
                   context.lineTo(170, 325);
                   context.lineTo(259, 305);
                   //context.quadraticCurveTo(150, 100, 260, 170);
                   context.closePath();
                   // (!) Konva specific method, it is very important
                   context.fillStrokeShape(shape);
               }}
               fill="#00D2FF"
               stroke="#00D2FF"
               strokeWidth={2}
               opacity={opacity}
        />
        </React.Fragment>
    )
}


export default Shape3