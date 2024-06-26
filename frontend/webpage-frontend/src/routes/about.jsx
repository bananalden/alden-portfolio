import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import image from '../assets/aldenPortrait.png';

function about(){

    return(
        <Container className='m-5 backDrop'>
      <Row>

          <Col>
            <img className="portraitAbout" src={image} alt="aldenPortrait" />
          </Col>

          <Col>
          <Container className='subBack m-3'>
            <h1>About Me!</h1>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Brief Biography</Accordion.Header>
        <Accordion.Body>
          When I was 7 years old, my entire family moved to Australia for my dad's work. Because of this, I've found
          myself engrossed in a lot of cultures from a very young age. After 5 years of moving from city to city, we ended
          up moving back to the Philippines and from there I continued the rest of my studies.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hobbies</Accordion.Header>
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
          </Container>
          </Col>
    </Row>
      </Container>
           
      
    )
}

export default about;