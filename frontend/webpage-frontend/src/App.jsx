//THESE ARE STYLES
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//THESE ARE COMPONENTS
import Navbar from './navbar/navbar.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//THESE ARE PAGE ROUTES
import LandAbout from './card-container/landing-aboutme.jsx';
import Resume from './routes/resume.jsx';
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
        <Route path='/' element = {
          <>
          <Card /> 
          <LandAbout />
          </>
          }></Route>
        <Route path='/resume' element = {<Resume /> }></Route>
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
