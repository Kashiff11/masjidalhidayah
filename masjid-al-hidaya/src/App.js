import './App.css';
import Home from './home/Home';
import { Link, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Overlay from 'react-bootstrap/Overlay'
import { Navbar, Nav } from 'react-bootstrap';
import { ImHome } from 'react-icons/im';
import { FaBookReader } from 'react-icons/fa';
import { FaMosque } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { SiTwitter } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import { IconContext } from "react-icons";
import mh3 from './images/mh3.png';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="masjidLogo">
          <Navbar.Brand><img src={mh3} className="logoPic" /></Navbar.Brand>
          <Navbar.Brand><h1 className="masjidName">Masjid al-Hidaayah</h1></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div className="linkContainer">
              <Nav.Link to="/">
                <h5 className="navbarChoice">Home</h5>
              </Nav.Link>
            </div>
            <div className="linkContainer">
              <Nav.Link to="/">
                <h5 className="navbarChoice">Lessons</h5>
              </Nav.Link>
            </div>
            <div className="linkContainer">
              <Nav.Link to="/">
                <h5 className="navbarChoice">Masjid</h5>
              </Nav.Link>
            </div>
            <div className="linkContainer">
              <Nav.Link to="/">
                <h5 className="navbarChoice">Donations</h5>
              </Nav.Link>
            </div>
          </Nav>  
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
