import React from 'react';
import alden from '../assets/aldenPortrait.png';
import PortfolioCard from '../card-container/portfolio-card.jsx'
import Container from "react-bootstrap/esm/Container";
//IMAGE IMPORTS
import Portfolio from "../assets/portfolioCard/aldenWebpage.png";
import LibrarySystem from "../assets/portfolioCard/aldenLibrarysystem.png";
import Timein from "../assets/portfolioCard/aldenTimeinsystem.png";



function portfolio (){
    return(

        <Container className="myContainer">
            <h1>Portfolio</h1>
            <Container className="subBack">
                <h1>PHP Projects</h1>
            <div className="d-md-flex">
                <PortfolioCard 
            systemsample = { LibrarySystem }
            title = "Library System in Collaboration with MJ"
            description = "A library system that was designed in submission for our finals."
            bigDesc = "This Library System, while still technically within the Alpha stages of development, is one of the first PHP projects I have made where I utilized PHP and Bootstrap for UI elements. The other adjustments were made by my classmate MJ who helped add other elements such as the Navbar while I handled most of the backend processes."
            
           />
           <PortfolioCard 
           systemsample = { Timein }
           title = "Employee Time In System in Colllaboration with MJ"
           description = "An employee clock-in system created in fulfillment of our requirements during 3rd year 1st Semester"
           bigDesc = "This was the first system I made with MJ. Completely raw with no libraries to work with, me and MJ worked on everything from the ground up from the UI elements to the backend logic"

           />
           </div>
            </Container>
            
        </Container>

    );
}

export default portfolio;