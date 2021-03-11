import React, { useEffect, useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebook,
    faYoutube,

} from '@fortawesome/free-brands-svg-icons'
import {
    faMapMarkerAlt,
    faFlag,
    faFutbol,
    faMars,
} from '@fortawesome/free-solid-svg-icons'
import images from '../../images/male.png'
import css from './TeamDetails.css'
import {
    BrowserRouter as Router,
    useParams,
    Link
} from "react-router-dom";

const TeamDetails = () => {
    const { teamID } = useParams();
    // console.log(allParams);
    const [teamDetails, setTeamDetails] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamID}`)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]));
    }, []);
    const {
        strTeam,
        strTeamBadge,
        strCountry,
        strGender,
        intFormedYear,
        strSport,
        strDescriptionEN,
        strDescriptionFR,
        strStadiumThumb,
        strYoutube,
        strFacebook,
        strTwitter,
        strTeamFanart1,
        strTeamFanart2,
    } = teamDetails;
    return (
        <Container>
            <Jumbotron fluid className="jumborton-bg" style={{
                // backgroundImage: `url('')`,
                backgroundSize: '100% 300px',
                textAlign: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url(${strStadiumThumb})`
            }}>
                {/* <h2 className="text-center text-dark font-weight-bold">{strTeam}</h2> */}
                <img className="img-fluid" src={strTeamBadge} alt="" />
            </Jumbotron>
            <Row className="bg-dark rounded">
                <Col md={6} className="align-self-center text-white">
                    <h1 className="font-weight-bold py-3">{strTeam}</h1>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                </Col>
                <Col md={6}>
                    <img className="img-fluid p-3" src={strTeamFanart1} alt=""/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={12}>
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionFR}</p>
                </Col>
                <Col md={12} className="text-center mb-5">
                    <a href={'https://' + strTwitter} target="_blank"><span className="p-2 h1"><FontAwesomeIcon icon={faTwitter} /></span></a>
                    <a href={'https://' + strFacebook} target="_blank"><span className="p-2 h1"><FontAwesomeIcon icon={faFacebook} /></span></a>
                    <a href={'https://' + strYoutube} target="_blank"><span className="p-2 h1"><FontAwesomeIcon icon={faYoutube} /></span></a>
                </Col>
            </Row>
        </Container>
    );
};

export default TeamDetails;