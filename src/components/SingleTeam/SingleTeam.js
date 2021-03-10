import React from 'react';
import league from '../../league.png'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const SingleTeam = (props) => {
    const {strSport, strLeague} = props.tm;
    return (
        <Col md={4} className="p-3">
            <Card className="p-5">
                <Card.Img variant="top" src={league} />
                <Card.Body className="text-center">
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        Sports Type: {strSport}
                    </Card.Text>
                    <Button variant="success">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleTeam;