import {Shape} from "react-konva";
import React, {useState} from "react";

import '../Glavn.css'

export default function Shape1() {

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
                   context.moveTo(168, 477);
                   context.lineTo(790, 422);
                   context.lineTo(1076, 575);
                   context.lineTo(1076, 662);
                   context.lineTo(790, 635);
                   context.lineTo(165, 646);
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