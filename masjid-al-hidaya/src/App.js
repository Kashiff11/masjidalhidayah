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
          <Navbar.Brand><img src={mh3} className="logoPic"/></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div className="linkContainer">
              <Link to="/">
                <IconContext.Provider value={{ color: "white", size: "25" }}>
                  <ImHome style={{ marginLeft: 70 }}/>
                </IconContext.Provider>
              </Link>
            </div>
            <div className="linkContainer">
              <Link to="lessons">
                <IconContext.Provider value={{ color: "white", size: "25" }}>
                  <FaBookReader style={{ marginLeft: 80 }}/>
                </IconContext.Provider>
              </Link>
            </div>
            <div className="linkContainer">
              <Link to="lessons">
                <IconContext.Provider value={{ color: "white", size: "25" }}>
                  <FaMosque style={{ marginLeft: 80 }}/>
                </IconContext.Provider>
              </Link>
            </div>
            <div className="linkContainer">
              <Link to="donations">
                <IconContext.Provider value={{ color: "white", size: "25"}}>
                  <RiMoneyDollarCircleFill style={{ marginLeft: 80 }} />
                </IconContext.Provider>
              </Link>
              <Link to="donations">
                <IconContext.Provider value={{ color: "white", size: "25"}}>
                  <SiTwitter style={{ marginLeft: 80 }}/>
                </IconContext.Provider>
              </Link>
              <Link to="donations">
                <IconContext.Provider value={{ color: "white", size: "25"}}>
                  <RiInstagramFill style={{ marginLeft: 80 }}/>
                </IconContext.Provider>
              </Link>
            </div>
          </Nav>  
        </Navbar.Collapse>
        <Navbar.Brand><h1 className="masjidName">Masjid al-Hidaayah</h1></Navbar.Brand>
      </Navbar>
      <Switch>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
