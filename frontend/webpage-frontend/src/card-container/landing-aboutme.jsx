import React from 'react';
import Container from "react-bootstrap/esm/Container";
import PortfolioCard from '../card-container/portfolio-card.jsx';
import Button from "react-bootstrap/esm/Button";


function landingAbout (){

    return(
    <div className="myContainer">
        <h1>Portfolio Preview!</h1>
        <Container className="subBack">
        <Container className="d-md-inline-flex">
           <PortfolioCard />
           <PortfolioCard />
           <PortfolioCard />
           <PortfolioCard />
        </Container>
        <Container >
            <Button className='btn-primary'>Penis</Button>
        </Container>
        </Container>
    </div>

    );

}

export default landingAbout;