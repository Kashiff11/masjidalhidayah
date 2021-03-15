import './App.css';
import Home from './home/Home';
import { Link, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import mh3 from './images/mh3.png';


function App() {

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="blue" variant="dark" fixed="top" className='color-nav'>
        <div className="masjidLogo">
          <Navbar.Brand><img src={mh3} className="logoPic" /></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div className="linkContainer">
              <Link to="/">
                <h5 className="navbarChoice">Home</h5>
              </Link>
            </div>
            <div className="linkContainer">
              <Link to="/lessons">
                <h5 className="navbarChoice">Lessons</h5>
              </Link>
            </div>
            <div className="linkContainer">
              <Link to="/">
                <h5 className="navbarChoice">Masjid</h5>
              </Link>
            </div>
            <div className="linkContainer">
              <Link to="/">
                <h5 className="navbarChoice">Donations</h5>
              </Link>
            </div>
            <div className="linkContainer">
              <Link to="/">
                <h5 className="navbarChoice">Community Advices</h5>
              </Link>
            </div>
            <div className="linkContainer">
              <Link to="/">
                <h5 className="navbarChoice">Contact Us</h5>
              </Link>
            </div>
          </Nav>  
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path='/lessons'><h5>Lessons</h5></Route>
      </Switch>
    </div>
  );
}

export default App;
