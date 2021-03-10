import React from 'react';
import SingleTeam from '../SingleTeam/SingleTeam'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Container>
                <Row className="mx-auto">
                    <SingleTeam/>
                    <SingleTeam/>
                    <SingleTeam/>
                    <SingleTeam/>
                    <SingleTeam/>
                    <SingleTeam/>
                </Row>
            </Container>
        </>
    );
};

export default Home;