import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png'



const Navbars = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "viewActiva" : "view");
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
                <Container>
                    <NavLink
                        className={setActiveClass}
                        to="/" >
                        <img src={logo} alt="poke" className='logo' />
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavLink 
                                className={setActiveClass} 
                                to="/" >
                                Home
                            </NavLink>
                            <NavLink 
                                className={setActiveClass}
                                to="pokemones" >
                                Pokemones
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars