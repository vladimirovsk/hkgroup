import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Scontactuy from "../Scontactuy/Scontactuy"
import Slider from "../Slider/Slider"

import './Investor.css'

import image1 from './poleska 1.png'
import image2 from './strumyk 1.png'
import circle from './circle.svg';
import poleskaLogo from './poleskaLogo.png';
import strumykLogo from './strumyk.png';
import Slide1 from "./image1.png";
import Slide2 from "./image2.png";
import Slide3 from "./image3.png";
import Slide4 from "./image4.png";
import Slide5 from "./image5.png";




function Investor() {

    const Caption = "HK Group powstało w odpowiedzi na zapotrzebowanie rynku na nieruchomości o podwyższonym standardzie w kameralnych lokalizacjach"

    const imageData = [
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5
    ]

    const openNewWindow = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

 return(
     <React.Fragment>
         <Container fluid={false} className={'root'}>
         <div className='titlePage'>
             NAJNOWSZE INWESTYCJE
         </div>
             <Container fluid={true}>
             <Row lg={12} md={6}>
                 <Col lg={6} md={3} className={'cart-invest'} onClick={()=>openNewWindow('https://poleska.hkgroup.pl/')}>
                     <img className={'bg-img-sqr'} src={poleskaLogo} alt={''}></img>
                     <div className={'bg-image-card'} style={{
                         backgroundImage: `url('${image1}')`,
                         justifyContent: 'right'}}>
                         <div className={'bg-color-sqr'} />
                     </div>
                     <div style={{zIndex:100, opacity:1}}>
                         <img className={'img-circle'} src={circle} alt={'circle'} />
                     </div>

                 </Col>

                 <Col lg={6} md={3} className={'cart-invest'} onClick={()=>openNewWindow('http://strumyk1.pl')}>
                     <img className={'bg-img-sqr'} src={strumykLogo} alt={'2'}></img>
                    <div className={'bg-image-card'} style={{
                         backgroundImage: `url('${image2}')`,
                        justifyContent: 'left'}}>
                        <div className={'bg-color-sqr'} />
                    </div>
                     <div style={{zIndex:100, opacity:1}}>
                         <img className={'img-circle'} src={circle} alt={'circle'} />
                     </div>
                 </Col>
             </Row>
             </Container>

             <div className={'title-zaprasham'}>
                 Zapraszamy do zapoznania się z naszymi inwestycjami.
             </div>
         </Container>
         <Container fluid={false}>
            <Slider imageData={imageData} Caption={Caption} />
         </Container>
         <div style={{marginTop:'5em', marginBottom:'5em'}}>
             <Scontactuy />

         </div>
     </React.Fragment>
 )
}
export default Investor