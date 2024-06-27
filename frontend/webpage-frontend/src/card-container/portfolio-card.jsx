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
            <Preview />
    </Card>
    
  

    );

}

export default portfolioCard;