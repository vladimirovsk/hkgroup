import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../image/logo.svg'
import {Envelope, TelephoneFill, GeoAlt} from 'react-bootstrap-icons';

import './Footer.css'

function Footer() {

	return (
		<Container className={'container-footer'} fluid={true} style={{backgroundColor: "#ffffff"}}>
			<div className={'title-contact'}>KONTAKT</div>
			<Row className={'footer-text'}>
				<Col sm={12} lg={4} className={'mt-2'}>
					HK GROUP Sp. z o.o. sp.k.<br /> <br />
					<GeoAlt/>ul. Kobierzyńska 211 lok.3, <br/>
					<div className={'ml-3'}>30-383 Kraków</div>
				</Col>
				<Col sm={12} lg={4} className={'mt-2'}>
					NIP: 676 257 74 39 <br/>
					REGON: 385 482 503<br/>
					KRS: 000 082 76 12
				</Col>

				<Col sm={12} lg={4} className={'mt-2'}>
					<ul className={'footer-ul'} style={{margin:'auto'}}>
						<li >
							<TelephoneFill style={{marginRight: '0.2em', fontSize: '1.2em'}}/>
								+48 666 182 182
						</li>

						<li>
							<Envelope style={{marginRight: '0.3em', fontSize: '1.2em'}}/>
							<a className={'footer-lik-email'} href="mailto:biuro@hkgroup.pl">
								biuro@hkgroup.pl
							</a>
						</li>
						<li>
							<Envelope style={{marginRight: '0.3em', fontSize: '1.2em'}}/>
							<a className={'footer-lik-email'} href="mailto:maciej.pietrzyk@hkgroup.pll">
								maciej.pietrzyk@hkgroup.pl
							</a>
						</li>
						<li>
							<Envelope style={{marginRight: '0.3em', fontSize: '1.2em'}}/>
							<a className={'footer-lik-email'} href="mailto:jakub.smulski@hkgroup.pl">
								jakub.smulski@hkgroup.pl
							</a>
						</li>
					</ul>
				</Col>
			</Row>
			<Row>
				<Col className={'mt-5'}>
					<img src={logo} alt={"logo"} width={100}></img>
				</Col>
			</Row>
		</Container>
	)

}

export default Footer