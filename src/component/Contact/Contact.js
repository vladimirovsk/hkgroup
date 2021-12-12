import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Envelope, TelephoneFill, GeoAlt} from 'react-bootstrap-icons';

import './Contact.css'
import image1 from "./image1.jpg";
import imageLogo from "../../image/logo.svg"

function Contact() {
	return (
		<Container>
			<Row md={12}>
				<Col xl={6} className={'column-contact text-left pl-5'}>
					<div className={"contact-title-card"}>
						ADRES BIURA <br/>HK GROUP Sp. z o.o. sp.k.
					</div>
					<div className={"contact-address-card"}>
						<GeoAlt className={'mr-2'}/>ul. Kobierzyńska 211 lok.3, 30-383 Kraków
					</div>
					<div className={"contact-text-card text-left"}>
						<ul className={'contact-ul'}>
							<li className={'contact-li'}>NIP: 6762577439</li>
							<li className={'contact-li'}>REGON: 385482503</li>
							<li className={'contact-li'}>KRS: 0000827612</li>
						</ul>
					</div>
				</Col>
				<Col xl={5} className={'column-image-contact'} style={{
					backgroundImage: `url(${image1})`
				}}>
				</Col>
				<Col xl={6} className={'column-contact text-left pl-5'}>
					<div className={"contact-title-card"}>
						KONTAKT<br/>HK GROUP Sp. z o.o. sp.k.
					</div>
					<div className={"contact-text-card"}>
						<Row>
							<Col md={12} lg={6} className={'card-phones'}>
								<ul className={'contact-ul'}>
									<li className={'contact-li-title'}>ZARZĄD</li>
									<li className={'contact-li-name'}>Jakub Smulski</li>

									<li className={'contact-li-phone'}>
										<TelephoneFill style={{marginRight: '0.2em', fontSize: '1.2em'}}/>
										+46 600 347 050
									</li>
									<li	className={'contact-li-phone'}>
										<Envelope style={{marginRight: '0.3em', fontSize: '1.2em'}}/>
										<a className={'link-email'}  href="mailto:jakub.smulski@hkgroup.pl">
											jakub.smulski@hkgroup.pl
										</a>
									</li>

									<li className={'contact-li-name'}>Maciej Pietrzyk</li>
									<li className={'contact-li-phone'}>
										<TelephoneFill style={{marginRight: '0.2em', fontSize: '1.2em'}}/>
										+48 509 989 088
									</li>
									<li className={'contact-li-phone'}>
										<Envelope style={{marginRight: '0.3em', fontSize: '1.2em'}}/>
										<a className={'link-email'}  href="mailto:maciej.pietrzyk@hkgroup.pll">
											maciej.pietrzyk@hkgroup.pl
										</a>
									</li>

								</ul>
							</Col>
							<Col md={12} lg={6}>
								<ul className={'contact-ul'}>
									<li className={'contact-li-title'}>DZIAŁ SPRZEDAŻY</li>
									<li className={'contact-li-name'}></li>
									<li className={'contact-li-phone'}>
										<TelephoneFill style={{marginRight: '0.2em', fontSize: '1.2em'}}/>
										+48 666 182 182
									</li>
									<li className={'contact-li-phone'}>
										<Envelope style={{marginRight: '0.3em', fontSize: '1.2em'}}/>
										<a className={'link-email'} href="mailto:biuro@hkgroup.pl">
											biuro@hkgroup.pl
										</a>
									</li>
								</ul>
							</Col>
						</Row>

					</div>

				</Col>
				<Col xl={5} className={'column-contact cart-logo'}>
					<Col xl={12}><img className={'mt-5'} src={imageLogo} alt={"imageLogo"}/></Col>
					<Col xl={12} style={{fontSize: '2.3em', fontWeight:'600'}}>
						<TelephoneFill/>+48 666 182 182
					</Col>
				</Col>
			</Row>
		</Container>
	)
}

export default Contact;