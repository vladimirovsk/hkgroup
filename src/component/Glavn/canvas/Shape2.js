import {Shape} from "react-konva";
import React, {useState} from "react";

import '../Glavn.css'

export default function Shape3() {

    const [opacity, setOpacity] =useState(0)

    const canvasEnter =() =>{
        setOpacity(0.5);
    }
    const canvasOut =() =>{
        setOpacity(0);
    }

    return(
        <Shape onMouseEnter={canvasEnter} onMouseOut={canvasOut}
        sceneFunc={(context, shape) => {
           context.beginPath();
           context.moveTo(170, 341);
           context.lineTo(790, 231);
           context.lineTo(1076, 491);
           context.lineTo(1076, 574);
           context.lineTo(790, 421);
           context.lineTo(168, 477);
           //context.quadraticCurveTo(150, 100, 260, 170);
           //context.quadraticCurveTo(150, 100, 260, 170);
           context.closePath();
           // (!) Konva specific method, it is very important
           context.fillStrokeShape(shape);
       }}
       fill="#00D2FF"
       stroke="#00D2FF"
       strokeWidth={2}
       opacity={opacity}
    />)
}