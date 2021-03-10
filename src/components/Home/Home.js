import React, { useState, useEffect } from 'react';
import SingleTeam from '../SingleTeam/SingleTeam'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
        .then(res => res.json())
        .then(data => setTeam(data.teams));
    }, []);
    console.log(team);
    return (
        <>
            <Container>
                <Row className="mx-auto">
                    {
                        team.map((tm) => <SingleTeam key={tm.idTeam} tm={tm}/>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;