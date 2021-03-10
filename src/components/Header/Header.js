import React from 'react';
import HeaderCss from './Header.css';
import { Button, Navbar, Nav, Form, FormControl, Container, Jumbotron } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Container>
                <Navbar class bg="light" expand="lg">
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/link">Link</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Jumbotron fluid style={{  
                    backgroundImage:`url("https://www.the-afc.com/img/image/upload/t_l2/joumf8y3pzk2sx4owem2.jpg")`,
                    backgroundSize: '100% 300px',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <h2 className="text-center text-dark font-weight-bold">Football Maniac</h2>
                </Jumbotron>
            </Container>
        </>
    );
};

export default Header;