import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './home/Home';
import { Link, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import mh3 from './images/mh3.png';
import Lessons from './lessons/Lessons';
import ContactForm from './contactUs/ContactForm';
import axios from 'axios';


function App() {

  const activities = [
    {
      day: 'Fri',
      time: 'After Maghrib',
      topic: `Allah's Beautiful Names`,
      teacher: 'Abu Suhailah Umar Quin',
      classDescription: 'To learn and understand Allah`s beautiful Names should be the first matter that a Muslim should concern themselves with. This weekly class systematically discusses the topic with the students. Using the works of a number of classical scholars such Ibn Qayyim and Ibn Taymiyyah, not only will you gain a better understanding of Allah`s beautiful names, but also what effect that knowledge should have on our own daily lives.',
      id: 1
    },
    {
      day: 'Sun',
      time: 'After Maghrib',
      topic: 'Stories of the Prophets',
      teacher: 'Abu Suhailah Umar Quin',
      classDescription: 'They were the best of mankind; sent to every nation reminding them of thier obligation towards their Creator. From Adam to Muhammad, may the peace and blessings of Allah be upon them all, this class discusses their life stories and lessons from their lives. They were examples of sincerity and devoutness to Allah. They were humble, kind, and just amongst men.',
      id: 2
    },
    {
      day: 'Tue',
      time: 'After Maghrib',
      topic: '40 Ahadith of Imam Nawawi',
      teacher: 'Sad Shabana',
      classDescription: 'One of, if not the most famous of his works, Imam an-Nawawi`s Collection of Forty Ahadith is the first book of hadith that a student should learn. Accumulatively, these traditions teach us how to fulfill Allah`s rights. They teach us how to be just to the creation, including our ownselves. Shaykh Dr. Salih al-Fawzan, in his explantion of this collection, beautifully and concisely explains principles and benefits extracted from these ahadith in a manner that can be understood by all. Although memorization is recommended, it is not required.',
      id: 3
    },
    {
      day: 'Tues & Fri',
      time: '1 hour before Maghrib',
      topic: `Men's Quran Program`,
      teacher: 'Sad Shabana',
      classDescription: 'Allah the most High revealed the Quran as a guidance for mankind. Our Prophet Muhammad may Allah`s peace and blessings be upon him said, `The best of you are those who learn the Quran and teach it.` Learning the Quran begins by learning its recitation. This class meets two times a week and is limited to men.',
      id: 4
    },
    {
      day: 'Thu',
      time: 'After Maghrib',
      topic: 'Comprehensive Guide for the New Muslim',
      teacher: 'Abu Hafsah Kashiff Khan',
      classDescription: 'This book discusses the basics of Islam that no Muslim should be ignorant of. The book is an excellent resource for all students, new Muslims, life-long Muslims, and even non-Muslims for learning and understanding the basics.',
      id: 5
    },
    {
      day: 'Sat & Sun',
      time: 'After Dhuhr',
      topic: 'Quran Program for Children',
      teacher: 'Sad Shabana',
      classDescription: 'Allah the most High revealed the Quran as a guidance for mankind. Our Prophet Muhammad may Allah`s peace and blessings be upon him said, `The best of you are those who learn the Quran and teach it.` Learning the Quran begins by learning its recitation. This class meets two times a week and is limited to boys.',
      id: 6
    },
    {
      day: 'Sun',
      time: 'After Fajr',
      topic: 'Q&A on Innovated Methodlogies',
      teacher: 'Abu Hafsah Kashiff Khan',
      classDescription: `As long as the people of bid'ah have innovated in Islam, the scholars of Islam have explained and wanred against their errors. This lesson is a reading through questions posed to and answerd by Shaykh Salih al-Fawzan refarding newly invented methodolgies that are attributed to Islam but are distant from its teachings.`,
      id: 7
    },
  ]

  const [impAnn, setImpAnn] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/impann`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      setImpAnn(response.data.records)
    };
    getData();
  }, []);
  console.log(impAnn)

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
              <Link to="/contactus">
                <h5 className="navbarChoice">Contact Us</h5>
              </Link>
            </div>
          </Nav>  
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/"><Home impAnn={impAnn}/></Route>
        <Route path='/lessons'><Lessons activities={activities} /></Route>
        <Route path='/contactus'><ContactForm activities={activities} /></Route>
      </Switch>
    </div>
  );
}

export default App;
