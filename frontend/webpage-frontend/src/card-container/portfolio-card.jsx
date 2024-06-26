import React from "react";
import Container from "react-bootstrap/esm/Container";
import PortfolioSample from "../assets/portfolioCard/aldenWebpage.png"
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";

function portfolioCard (){

    return(
       
        <Card style={{ width: '18rem'}}>
        <Card.Header>Penis</Card.Header>
            <Card.Img variant="top" src={PortfolioSample} />
            <Card.Body>
                <Card.Title>Hello Charlie!</Card.Title>
                <Card.Text>Hello what's up!</Card.Text>
            </Card.Body>
    </Card>
    );

}

export default portfolioCard;