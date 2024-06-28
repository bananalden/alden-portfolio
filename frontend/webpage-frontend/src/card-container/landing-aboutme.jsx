import React from 'react';
import Container from "react-bootstrap/esm/Container";
import PortfolioCard from '../card-container/portfolio-card.jsx';
//Image Imports
import Portfolio from "../assets/portfolioCard/aldenWebpage.png";
import LibrarySystem from "../assets/portfolioCard/aldenLibrarysystem.png";
import Timein from "../assets/portfolioCard/aldenTimeinsystem.png";
//Modal Image Imports
import LibSystem1 from '../assets/imagesforPortfolio/phpProjects/librarySystem/library1.png'
import LibSystem2 from '../assets/imagesforPortfolio/phpProjects/librarySystem/library2.png'
import LibSystem3 from '../assets/imagesforPortfolio/phpProjects/librarySystem/library3.png'
import TimeIn1 from '../assets/imagesforPortfolio/phpProjects/employeeAttendance/employeeAttendance1.png';
import TimeIn2 from '../assets/imagesforPortfolio/phpProjects/employeeAttendance/employeeAttendance2.png';
import TimeIn3 from '../assets/imagesforPortfolio/phpProjects/employeeAttendance/employeeAttendance3.png';
import RProj1 from '../assets/imagesforPortfolio/reactProjects/reactProject1.png'
import RProj2 from '../assets/imagesforPortfolio/reactProjects/reactProject2.png'
import RProj3 from '../assets/imagesforPortfolio/reactProjects/reactProject3.png'


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
           bigDesc = "This portfolio was designed with the sole purpose of not just designing a portfolio, but also to study ReactJS and to test myself un UI/UX elements"
           carImage1 = { RProj1 }
           carImage2 = { RProj2 }
           carImage3 = { RProj3 }
           carCap1 = "A page displaying my resume information"
           carCap2 = "A short page the describes me"
           carCap3 = "The landing page"

           />

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

           <PortfolioCard 
           systemsample = { Timein }
           title = "Employee Time In System in Colllaboration with MJ"
           description = "An employee clock-in system created in fulfillment of our requirements during 3rd year 1st Semester"
           bigDesc = "This was the first system I made with MJ. Completely raw with no libraries to work with, me and MJ worked on everything from the ground up from the UI elements to the backend logic"
           carImage1 = { TimeIn1 }
            carImage2 = { TimeIn2 }
            carImage3 = { TimeIn3 }
            carCap1 = "The login form of our page"
            carCap2 = "The main page was designed by MJ"
            carCap3 = "This is the inventory list of the books available to borrow"
           
           
           />
        </div>
        <div className='float-right' >
        <a href="/portfolio" className="seePort">Click here to see more!</a>
        </div>
        
        </Container>
     
    </div>

    );

}

export default landingAbout;