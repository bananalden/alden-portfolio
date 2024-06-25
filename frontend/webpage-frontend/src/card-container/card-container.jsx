import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/alittletrolling.png'

function card_container(){
    return (

        <div className="container myContainer">
            <div className='myContent'>
            <img className="pfImage" src={image} alt="profile_image" />
            <h1>Hello my name is Alden!</h1>
            <p className='description'>Peepee poo poo description</p>
            </div>
        </div>

    );


}

export default card_container;