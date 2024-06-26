import Container from "react-bootstrap/esm/Container";
import portfolioCard from "../card-container/portfolio-card.jsx";
import Button from "react-bootstrap/esm/Button";

function landingAbout (){

    return(
    <div className="myContainer">
        <h1>Portfolio Preview!</h1>
        <Container className="subBack">
            <portfolioCard />
        <Button className="btn-primary" href="/portfolio">Click here to see more!</Button>
        </Container>
    </div>

    );

}

export default landingAbout;