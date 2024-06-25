//THESE ARE STYLES
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//THESE ARE COMPONENTS
import Navbar from './navbar/navbar.jsx'
import Footer from './footer/footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//THESE ARE PAGE ROUTES
import Mainpage from './routes/mainpage.jsx';
import About from './routes/about.jsx';
import Card from './card-container/card-container.jsx';
//THESE ARE BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {


  return (
    <>
    <Container>
      <Row>
        <Col>
    <BrowserRouter>
    <div className='App'>
    <Navbar />
      <Routes>
      <Route path='/' element = {<Card /> }></Route>
        <Route path='/mainpage' element = {<Mainpage /> }></Route>
        <Route path="/about" element = { <About /> }></Route>
      </Routes>
    
    </div>
    </BrowserRouter>
    </Col>
    </Row>

    </Container>
    </>
  )
}

export default App
