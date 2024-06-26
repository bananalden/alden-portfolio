import React from 'react';
import alden from '../assets/aldenPortrait.png';
import portfolioCard from "../card-container/portfolio-card.jsx";
import Container from "react-bootstrap/esm/Container";


function portfolio (){
    return(

        <Container className="myContainer">
            <portfolioCard />
        </Container>

    );
}

export default portfolio;