import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Preview from '../modal/modal.jsx'
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";

function portfolioCard (props){
    
    return(
       
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={props.systemsample} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Preview 
            title = {props.title}
            bigDesc = {props.bigDesc}
            carImage1 = {props.carImage1}
            carImage2 = {props.carImage2}
            carImage3 = {props.carImage3}
            carCap1 = {props.carCap1}
            carCap2 = {props.carCap2}
            carCap3 = {props.carCap3}

            />
    </Card>
    
  

    );

}

export default portfolioCard;