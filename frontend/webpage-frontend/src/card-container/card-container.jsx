import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/ayanagrin.png'
import * as Icon from 'react-bootstrap-icons';


function card_container(){
    return (

    <div className="container myContainer">
     <Container>
        <Row>
            <Col>
            <img className="pfImage"src={image} alt="Profile Image" />
            </Col>
            <Col>
            <Container>
                <h1>Hello! Welcome to my webpage!</h1>
                <p>My name is Alden ███████ ██████, I'm an up and coming
                   IT practitioner mostly speciliazing in Back-End development! 
                </p>
                <p>Want to learn more? Visit my <a href="/about">about me!</a></p>
                <hr></hr>
                <Container>
                    <h4>Visit my associated links!</h4>
                    <div className="container iconContainer">
                    <a href="https://www.linkedin.com/in/alden-justine-flores-32b8bb27b/">
                    <Icon.Linkedin size={50} />
                    </a>
                    <a href="https://github.com/bananalden">
                    <Icon.Github size={50}/>
                    </a>
                    </div>
                </Container>
            </Container>
            </Col>
        </Row>
     </Container>
     
    </div>

    );


}

export default card_container;