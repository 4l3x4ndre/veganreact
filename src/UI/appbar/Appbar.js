import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import './Appbar.css'

export default function Appbar(props) {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="color-nav" fixed="top">
            
            <Container>
            <Navbar.Brand href="/home">VEGAN RECIPES</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="/recipes">Recipes</Nav.Link>
                    <Nav.Link href="/smart">Smart search</Nav.Link>
                    <Nav.Link href="/random">Random recipe</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/1">action 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">action 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3">action 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/4">action 4</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link href="/account">Account</Nav.Link>
                    <Nav.Link href="/who">Who are we ?</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
            </Container>
            
        </Navbar>
    </>
    )
}