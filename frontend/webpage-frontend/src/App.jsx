import './App.css'
import Navbar from './navbar/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './routes/mainpage.jsx';
import About from './routes/about.jsx';

function App() {


  return (
    <>
    <BrowserRouter>
    <div className='App'>
    <Navbar />
      <Routes>
        <Route path='/mainpage' element = {<Mainpage /> }></Route>
        <Route path="/about" element = { <About /> }></Route>
      </Routes>
    
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
