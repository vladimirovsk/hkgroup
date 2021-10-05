import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logo from '../../image/logo.svg'

import './Header.css'

function Header() {

    const openNewWindow = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return(
        <React.Fragment>
            <Navbar bg="light" expand="lg"  sticky='top' >
                <Container fluid={false}>
                <Navbar.Brand href="/" >
                    <img className = {'brandLogo'}
                        src={logo}
                        alt='logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
                    <Nav className="navbar justify-content-end" activeKey="/" >
                        <Nav.Link as='div' href='/'><NavLink   to='/'>INWESTOR</NavLink></Nav.Link>
                        <Nav.Link as='div' href='/about'><NavLink   to='/about'>O NAS</NavLink></Nav.Link>
                        <NavDropdown  title="REALIZACJE" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={()=>openNewWindow('http://strumyk1.pl')}>STRUMYK</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>openNewWindow('https://poleska.hkgroup.pl')}>POLESKA</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as='div' href='/'><NavLink   to='/kontakt'>KONTAKT</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>

            </Navbar>
        </React.Fragment>
    )
}

export default Header

/**
 *

 */