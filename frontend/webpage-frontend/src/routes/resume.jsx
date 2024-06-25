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
        <div className='subBack m-3'>
        <h1>Alden ███████ ██████</h1>
        <p>CONTACT NO: +63███████</p>
        <hr></hr>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Biodata</Accordion.Header>
        <Accordion.Body>
        <strong>Height:  </strong>   5'6<br />
        <strong>Sex:     </strong>   Male<br />
        <strong>Age:     </strong>   23<br />
        <strong>Birthdate:     </strong>   February 6, 2001<br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Technical Skills</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>HTML Skills</li>
            <li>JavaScript Skills</li>
            <li>PHP Skills</li>
            <li>ReactJS Skills</li>
            <li>Microsoft Office Skills</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Miscallaneous Skills</Accordion.Header>
        <Accordion.Body>
        <ul>
            <li>English Speaking Skills</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Character References</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        </Col> 
        </Row>
</Container>


  
      
     
    )
}

export default resume;