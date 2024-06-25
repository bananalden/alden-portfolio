import React from 'react'
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import selfImage from '../assets/elvergil.jpg';

function resume(){

    return(

<Container className="m-5 backDrop">
       <Row>
        <Col>
        <Container className='m-4'>
          <img className="selfImage" src={selfImage} alt="selfImage" />
        </Container>
          <div className='subBack'>
            <h3>Career Objectives:</h3>
            <p>I wish to understand and improve the ever-changing technologies and techniques of developing web applicaitons.</p>
          </div>
        </Col>
      
        <Col>
        <div className='subBack'>
        <h1>Alden Justine Flores</h1>
        <p>CONTACT NO: +63279139389</p>
        <hr></hr>
        <h3>Technical Skills</h3>
        <ul>
          <li>HTML skills</li>
          <li>JavaScript skills</li>
          <li>PHP skills</li>
          <li>MS Office skills</li>
          <li>ReactJS Skills</li>
        </ul>
        <hr></hr>
        <h3>Miscalleneous Skills</h3>
        <ul>
          <li>HTML skills</li>
          <li>JavaScript skills</li>
          <li>PHP skills</li>
          <li>MS Office skills</li>
          <li>ReactJS Skills</li>
        </ul>
        </div>
        </Col> 
        </Row>
</Container>


  
      
     
    )
}

export default resume;