import React from 'react';
import alden from '../assets/aldenPortrait.png';
import PortfolioCard from '../card-container/portfolio-card.jsx'
import Container from "react-bootstrap/esm/Container";
//IMAGE IMPORTS
import Portfolio from "../assets/portfolioCard/aldenWebpage.png";
import LibrarySystem from "../assets/portfolioCard/aldenLibrarysystem.png";
import Timein from "../assets/portfolioCard/aldenTimeinsystem.png";
//Modal Image Imports
import LibSystem1 from '../assets/imagesforPortfolio/phpProjects/librarySystem/library1.png'
import LibSystem2 from '../assets/imagesforPortfolio/phpProjects/librarySystem/library2.png'
import LibSystem3 from '../assets/imagesforPortfolio/phpProjects/librarySystem/library3.png'



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
            carImage1 = { LibSystem1 }
            carImage2 = { LibSystem2 }
            carImage3 = { LibSystem3 }
            carCap1 = "The login form of our page"
            carCap2 = "The main page was designed by MJ"
            carCap3 = "This is the inventory list of the books available to borrow"
           
           />
           </div>
            </Container>
            
        </Container>

    );
}

export default portfolio;