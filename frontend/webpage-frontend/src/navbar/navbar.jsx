import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function navbar (){
    return(
        <Navbar expand ="lg" className="bg-body-tertiary rounded-pill m">
        <Container>
          <Navbar.Brand href="/">Alden's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}


export default navbar;