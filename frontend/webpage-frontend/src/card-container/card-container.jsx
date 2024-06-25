import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/alittletrolling.png'

function card_container(){
    return (

    <div className="container myContainer">
        <div className='myContent'>
                <img className="pfImage" src={image} alt="profile_image" />
            <div className='description'>
                <h1>Hello my name is Alden!</h1>
                <p className='description'>I'm a fresh and upcoming developer mostly speciliazing in the backend!</p>
            <   p>Wanna know more? Read my <a href="/about">About Me</a></p>
            </div>
        </div>
    </div>

    );


}

export default card_container;