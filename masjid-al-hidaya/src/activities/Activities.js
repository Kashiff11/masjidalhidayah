import './Activities.css';
import mixlrlogo from '../images/mixlrlogo.png';
import Button from 'react-bootstrap/Button'

export default function Activities() {
  return (
    <div id="activitiesContainer">
      <div id="mxlrAnn">
        <span id="accTitle">Lessons and Activities</span>
        <img src={mixlrlogo} id="mixlrLogo" />
        <span id='mixlrBlurb'>
          Lessons are broadcasted on Masjid al-Hidaayah's Mixlr channel.
          Can't join us at the masjid? Join us online! Click on a lesson for more information.
        </span>
      </div>
      <div id="accRtCont">
        <div id="scheduleContainer">
          <div className="classCard">
            <div className='classCardTop'>
              <span>Sun</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">200 Questions Regarding 'Aqeedah</span>
            </div>
          </div>
          <div className="classCard">
            <div className='classCardTop'>
              <span>Sun</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">Kid's Quran Program</span>
            </div> 
          </div>
          <div className="classCard">
          <div className='classCardTop'>
              <span>Sun</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">Stories of the Prophets</span>
            </div>
          </div>
          <div className="classCard">
            <div className='classCardTop'>
              <span>Mon</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">Men's Quran Program</span>
            </div>
          </div>
          <div className="classCard">
            <div className='classCardTop'>
              <span>Tue</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">40 Hadeeth of Imam an-Nawawi</span>
            </div> 
          </div>
          <div className="classCard">
          <div className='classCardTop'>
              <span>Tue</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">40 Hadeeth of Imam an-Nawawi</span>
            </div>  
          </div>
          <div className="classCard">
          <div className='classCardTop'>
              <span>Tue</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">40 Hadeeth of Imam an-Nawawi</span>
            </div>  
          </div>
          <div className="classCard">
          <div className='classCardTop'>
              <span>Tue</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">40 Hadeeth of Imam an-Nawawi</span>
            </div>  
          </div>
          <div className="classCard">
          <div className='classCardTop'>
              <span>Tue</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">40 Hadeeth of Imam an-Nawawi</span>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}