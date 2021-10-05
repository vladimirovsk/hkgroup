import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

import image1 from "./image1.svg"
import image2 from "./image2.svg"
import './About.css'
import Slider from "../Slider/Slider";

import imageSlayder1 from './image1.png'
import imageSlayder2 from './image2.png'

import Scontactuy from "../Scontactuy/Scontactuy";

function About() {

	const imageData = [
		imageSlayder1,
		imageSlayder2
	]
	return (
		<Container fluid={true}  style={{padding: 0 }}>
			<Container fluid={true} style={{padding:0}}>
				<Row>
					<Col className={'titlePage justify-content-center'}>
						DOŚWIADCZENIE I SOLIDNOŚĆ
					</Col>
				</Row>

				<Row className={"justify-content-center"}>
					<Col lg={1}></Col>
					<Col lg={3}className={"about-image1 d-none d-md-block "}
					     style={{
						     left: 0,
						     backgroundImage: `url(${image1})`,
						     marginRight: '1em'
					     }}>
					</Col>
					<Col sm={12} md={12} lg={6} className={'about-group-text-three'}
						// style={{margin:'0', padding:'0', marginLeft: '1em'}}
						 style={{margin:'0', padding:'0'}}
					>

						<Col className={'about-block-text-three mt-0 mb-4 pt-0 pb-4'}
						     style={{backgroundColor: '#000000', color: '#ffffff'}}>
							<div style={{padding: '1em'}}>HK Group to firma deweloperska działająca od kilku lat na
								rynku nieruchomości.
							</div>
						</Col>
						<Col className={'about-block-text-three mb-4 pb-4 pt-4'}
						     style={{backgroundColor: '#3d3d3d', color: '#ffffff'}}>
							<div style={{padding: '1em'}}>Celem naszego działania jest stworzenie, nie tylko budynków,
								ale również przyjazną
								przestrzeń dla naszych klientów.
							</div>
							<div className={'about-block-text-three pb-0'}></div>
						</Col>

						<Col className={'about-block-text-three mt-0 pt-3 pb-4 mt-1'}
						     style={{backgroundColor: '#767676', color: '#ffffff'}}>
							<div style={{padding: '1em'}}>Starannie wybieramy kameralne lokalizacje inwestycji,
								pamiętając o komforcie codziennego
								użytkowania. Budujemy korzystając z najnowszych technologii i sprawdzonych materiałów.
								Wszystko w harmonii z otoczeniem i poszanowaniem naturalnego środowiska.
							</div>
						</Col>
					</Col>
					<Col lg={1}></Col>
				</Row>

				<Row className={"justify-content-center mt-4"}>
					<Col lg={1}></Col>
					<Col sm={12} md={12} lg={6} className={'wrapper about-group-text'}
						 style={{padding:'0', margin: '0'}}
					>
						<Col className={'about-block-text m-0 '}
						     style={{backgroundColor: '#767676', color: '#ffffff'}}>
							<div style={{padding: '1em'}}>Doświadczenie budowlane zdobyliśmy podczas realizacji
								inwestycji w systemie generalnego
								wykonawstwa dla dużych krakowskich deweloperów.
							</div>
						</Col>
						<Col className={'about-block-text m-0 mt-4'} style={{
							backgroundColor: '#919191', color: '#ffffff'
						}}>
							<div style={{padding: '1em'}}>
								Nasze inwestycje projektujemy z myślą o przyszłości, walory estetyczne łącząc z
								funkcjonalnością
								i trwałością.
							</div>
						</Col>
					</Col>
					<Col lg={3} className={"about-image1 d-none d-md-block"} style={{
						backgroundImage: `url(${image2})`,
						marginLeft: '1em'
					}}>
					</Col>
					<Col lg={1}></Col>
				</Row>
				<Row>
					<Col lg={1}></Col>
					<Col lg={10}>
							<Slider imageData={imageData} Caption={""}/>
					</Col>
					<Col lg={1}></Col>
				</Row>

			</Container>

			<div style={{marginTop:'5em', marginBottom:'5em'}}>
				<Scontactuy />
			</div>
		</Container>
	)
}

export default About