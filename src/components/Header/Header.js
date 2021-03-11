import React from 'react';
import { Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" className="sticky-top">
                <Navbar.Brand as={Link} to="/" className="text-warning">Soccer Hero</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;