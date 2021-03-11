import React, { useState, useEffect } from 'react';
import SingleTeam from '../SingleTeam/SingleTeam'
import { Jumbotron, Container, Row } from 'react-bootstrap';

const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setTeam(data.teams));
    }, []);
    return (
        <>
            <Container>
                <Jumbotron fluid className="jumborton-bg" style={{
                    backgroundSize: '100% 300px',
                    textAlign: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url("https://www.the-afc.com/img/image/upload/t_l2/joumf8y3pzk2sx4owem2.jpg")`
                }}>
                    <h2 className="text-center text-dark font-weight-bold">Soccer Hero League</h2>
                </Jumbotron>
                <Row className="mx-auto">
                    {
                        team.map((tm) => <SingleTeam key={tm.idTeam} tm={tm} />)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;