import React from 'react';
import league from '../../league.png'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Team = () => {
    return (
        <Col md={4} className="p-3">
            <Card className="p-5">
                <Card.Img variant="top" src={league} />
                <Card.Body className="text-center">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                                </Card.Text>
                    <Button variant="success">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Team;