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
          All lessons are broadcast on Masjid al-Hidaayah's Mixlr channel.
          Can't join us at the masjid? Join us online! More details regarding
          class texts & daily topics below.
        </span>
        <Button variant="outline-dark" className="buttons">Quran Lessons</Button>
        <Button variant="outline-dark" className="buttons">40 Hadeeth</Button>
        <Button variant="outline-dark" className="buttons">Stories of the Prophets</Button>
        <Button variant="outline-dark" className="buttons">Questions on Aqeedah</Button>
        <Button variant="outline-dark" className="buttons">Comprehensive Guide</Button>
        <Button variant="outline-dark" className="buttons">Allah's Names & Attributes</Button>
      </div>
      <div id="accRtCont">
        <div id="scheduleContainer">
          <div className="classCard">
            <div className='classCardTop'>
              <span>Sun</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">200 Questions Regarding 'Aqeedah</span>
              <span className="authorName">Author: 'Haafidh al-Hakami</span>
              <span className="classTime">After Fajr Prayers</span>
              <span className="classTeacher">Teacher: Kashiff Khan</span>
            </div>
          </div>
          <div className="classCard">
            <div className='classCardTop'>
              <span>Sun</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">Kid's Quran Program</span>
              <span className="classTime">After Dhuhr Prayers</span>
              <span className="classTeacher">Teacher: S'ad Shabana</span>
            </div> 
          </div>
          <div className="classCard">
          <div className='classCardTop'>
              <span>Sun</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">Stories of the Prophets</span>
              <span className="authorName">Author: Ibn Katheer</span>
              <span className="classTime">After Isha Prayers</span>
              <span className="classTeacher">Teacher: Umar Quinn</span>
            </div>
          </div>
          <div className="classCard">
            <div className='classCardTop'>
              <span>Mon</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">Men's Quran Program</span>
              <span className="classTime">After Dhuhr Prayers</span>
              <span className="classTeacher">Teacher: S'ad Shabana</span>
            </div>
          </div>
          <div className="classCard">
            <div className='classCardTop'>
              <span>Tue</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">40 Hadeeth of Imam an-Nawawi</span>
              <span className="authorName">Author: Salih al-Fawzaan</span>
              <span className="classTime">After Dhuhr Prayers</span>
              <span className="classTeacher">Teacher: S'ad Shabana</span>
            </div> 
          </div>
          <div className="classCard">
          <div className='classCardTop'>
              <span>Tue</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">40 Hadeeth of Imam an-Nawawi</span>
              <span className="authorName">Author: Salih al-Fawzaan</span>
              <span className="classTime">After Dhuhr Prayers</span>
              <span className="classTeacher">Teacher: S'ad Shabana</span>
            </div>  
          </div>
          <div className="classCard">
          <div className='classCardTop'>
              <span>Tue</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">40 Hadeeth of Imam an-Nawawi</span>
              <span className="authorName">Author: Salih al-Fawzaan</span>
              <span className="classTime">After Dhuhr Prayers</span>
              <span className="classTeacher">Teacher: S'ad Shabana</span>
            </div>  
          </div>
          <div className="classCard">
          <div className='classCardTop'>
              <span>Tue</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">40 Hadeeth of Imam an-Nawawi</span>
              <span className="authorName">Author: Salih al-Fawzaan</span>
              <span className="classTime">After Dhuhr Prayers</span>
              <span className="classTeacher">Teacher: S'ad Shabana</span>
            </div>  
          </div>
          <div className="classCard">
          <div className='classCardTop'>
              <span>Tue</span>
            </div>
            <div className='classCardBottom'>
              <span className="bookName">40 Hadeeth of Imam an-Nawawi</span>
              <span className="authorName">Author: Salih al-Fawzaan</span>
              <span className="classTime">After Dhuhr Prayers</span>
              <span className="classTeacher">Teacher: S'ad Shabana</span>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}