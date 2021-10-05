import React from "react";
import { Stage, Layer } from 'react-konva';
import Shape1 from './canvas/Shape1'
import Shape2 from './canvas/Shape2'
import Shape3 from './canvas/Shape3'


import './Glavn.css'

import imgHome from './home.jpg'//1200x849

function Glavn() {
    return(
        <React.Fragment>

                <Stage
                    className='canvas'
                    width={window.innerWidth} height={window.innerHeight}
                    style={{
                        backgroundImage:`url(${imgHome})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'inherit'
                    }}
                >
                    <Layer >

                            <Shape3 />

                        <Shape2 />
                        <Shape1 />
                    </Layer>
                </Stage>

         </React.Fragment>
        );
}

export default Glavn