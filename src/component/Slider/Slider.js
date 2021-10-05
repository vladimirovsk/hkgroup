import React from 'react';
import {Carousel, Container} from "react-bootstrap";

import './Slider.scss'

function Slider(props) {
    const {imageData, Caption} = props;

    //const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
       // setIndex(selectedIndex);
    };

    return (
        <Container fluid={true}
                   style={{padding: 0 }}>
            <Carousel fade={true}
                      controls={false}
                      indicators={true}
                      wrap={true}
                      interval={5000}
                      onSelect={handleSelect}
            >
                {imageData.map((image, key) => (
                    <Carousel.Item key={"Item+"+key} className={'carusel-item'}>
                        <img key={"Image"+key} className={'d-block w-100'} src={image} alt={image}/>
                        <Carousel.Caption key={"Caption"+key}>
                            {Caption}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    )
}

export default Slider