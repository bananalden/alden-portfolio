import React from 'react';
import Container from "react-bootstrap/esm/Container";
import PortfolioCard from '../card-container/portfolio-card.jsx';
import Button from "react-bootstrap/esm/Button";
//Image Imports
import Portfolio from "../assets/portfolioCard/aldenWebpage.png";
import LibrarySystem from "../assets/portfolioCard/aldenLibrarysystem.png";
import Timein from "../assets/portfolioCard/aldenTimeinsystem.png";

function landingAbout (){

    return(
    <div className="myContainer">
        <h1>Portfolio Preview!</h1>
        <Container className="subBack">
        <div className="d-md-flex">
           <PortfolioCard 
           systemsample = { Portfolio }
           title = "My Portfolio in ReactJS"
           description = "This is a portfolio I designed using ReactJS and Bootstrap Components."
           
           />

           <PortfolioCard 
            systemsample = { LibrarySystem }
            title = "Library System in Collaboration with MJ"
            description = "A library system that was designed in submission for our finals."
           />
           <PortfolioCard 
           systemsample = { Timein }
           title = "Employee Time In System in Colllaboration with MJ"
           description = "An employee clock-in system created in fulfillment of our requirements during 3rd year 1st Semester"
           />
        </div>
       
        <Container className='m-3 float-md-right' >
        <Button className='btn-info'>Click here to see more!</Button>
        </Container>
        </Container>
        
    </div>

    );

}

export default landingAbout;