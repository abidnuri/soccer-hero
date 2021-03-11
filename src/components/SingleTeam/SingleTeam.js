import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const SingleTeam = (props) => {
    const { idTeam, strTeam, strSport, strTeamBadge } = props.tm;
    return (
        <Col md={4} className="p-3">
            <Card className="p-5">
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body className="text-center">
                    <Card.Title className="font-weight-bold">{strTeam}</Card.Title>
                    <Card.Text>
                        <span>Sports Type:</span>
                        <span className="text-success ml-2">{strSport}</span>
                    </Card.Text>
                    <Button as={Link} to={`team/${idTeam}`} variant="dark">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleTeam;