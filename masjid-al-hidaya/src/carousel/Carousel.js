import { useState, render } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mh3 from '../images/mh3.png';
import mh4 from '../images/mh4.jpg';
import mh5 from '../images/mh5.jpg';
import mh9 from '../images/mh9.jpg';
import mh10 from '../images/mh10.jpg';

export default function ControlledCarousel() {

  const myStyle = {
    width: '100%',
    height: '100%'
  }

  const imgStyle = {
    backgroundImage: 'url(../images/mh4.jpg)',
    height: '40vh',
    fontFamily: 'Barlow Semi Condensed, sans-serif',
    fontWeight: 'bolder',
    fontSize: '1.8rem'
  }

  const mainLogoStyle = {
    width: '14%'
  }

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={myStyle} fade={true}>
      <Carousel.Item style={imgStyle}>
        <img
          className="d-block w-100"
          src={mh4}
          alt="First slide"
        />
        <Carousel.Caption>
          <img src={mh3} style={mainLogoStyle} />
          <p className="masjidIntroBlurb">Welcome to Masjid al-Hidaayah</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={imgStyle}>
        <img
          src={mh5}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Our Creed</h3>
          <p>We believe Allah alone is the Creator of all existence. He alone is worthy of worhsip in truth. 
          We affirm what He and the Prophet Muhammad have affirmed from
          His beautiful names and attributes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={imgStyle}>
        <img
          src={mh9}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Our Methodology</h3>
          <p>We follow the path laid out by Allah the most High, explained by His Messenger Muhammad, as
          it was understood and followed by the companions of Muhammad, and those that followed them upon righteousness.  
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={imgStyle}>
        <img
          src={mh10}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Our Mission</h3>
          <p>To establish an Islamic Center dedicated to educating Muslims and non-Muslims regarding the
            true orthodox teachings of Islam, free of distortion, innovation, and deviation.</p>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  );
};