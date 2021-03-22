import './Activities.css';
import Mixlr from '../mixlr/Mixlr'
import Card from 'react-bootstrap/Card';
import name from '../images/name.png';
import Button from 'react-bootstrap/Button';

export default function Activities() {

  const activities = [
    {
      day: 'Fri',
      time: 'After Maghrib',
      topic: `Allah's Beautiful Names`,
      teacher: 'Abu Suhailah Umar Quin',
      classDescription: 'To learn and understand Allah`s beautiful Names should be the first matter that a Muslim should concern themselves with. This weekly class systematically discusses the topic with the students. Using the works of a number of classical scholars such Ibn Qayyim and Ibn Taymiyyah, not only will you gain a better understanding of Allah`s beautiful names, but also what effect that knowledge should have on our own daily lives.',
    },
    {
      day: 'Sun',
      time: 'After Maghrib',
      topic: 'Stories of the Prophets',
      teacher: 'Abu Suhailah Umar Quin',
      classDescription: 'They were the best of mankind; sent to every nation reminding them of thier obligation towards their Creator. From Adam to Muhammad, may the peace and blessings of Allah be upon them all, this class discusses their life stories and lessons from their lives. They were examples of sincerity and devoutness to Allah. They were humble, kind, and just amongst men. '
    },
    {
      day: 'Tue',
      time: 'After Maghrib',
      topic: '40 Ahadith of Imam Nawawi',
      teacher: 'Sad Shabana',
      classDescription: 'One of, if not the most famous of his works, Imam an-Nawawi`s Collection of Forty Ahadith is the first book of hadith that a student should learn. Accumulatively, these traditions teach us how to fulfill Allah`s rights. They teach us how to be just to the creation, including our ownselves. Shaykh Dr. Salih al-Fawzan, in his explantion of this collection, beautifully and concisely explains principles and benefits extracted from these ahadith in a manner that can be understood by all. Although memorization is recommended, it is not required. '
    },
    {
      day: 'Tues & Fri',
      time: '1 hour before Maghrib',
      topic: `Men's Quran Program`,
      teacher: 'Sad Shabana',
      classDescription: 'Allah the most High revealed the Quran as a guidance for mankind. Our Prophet Muhammad may Allah`s peace and blessings be upon him said, `The best of you are those who learn the Quran and teach it.` Learning the Quran begins by learning its recitation. This class meets two times a week and is limited to men.'
    },
    {
      day: 'Thu',
      time: 'After Maghrib',
      topic: 'Comprehensive Guide for the New Muslim',
      teacher: 'Abu Hafsah Kashiff Khan',
      classDescription: 'This book discusses the basics of Islam that no Muslim should be ignorant of. The book is an excellent resource for all students, new Muslims, life-long Muslims, and even non-Muslims for learning and understanding the basics.'
    },
    {
      day: 'Sat & Sun',
      time: 'After Dhuhr',
      topic: 'Quran Program for Children',
      teacher: 'Sad Shabana',
      classDescription: 'Allah the most High revealed the Quran as a guidance for mankind. Our Prophet Muhammad may Allah`s peace and blessings be upon him said, `The best of you are those who learn the Quran and teach it.` Learning the Quran begins by learning its recitation. This class meets two times a week and is limited to boys.'
    },
    {
      day: 'Sun',
      time: 'After Fajr',
      topic: 'Q&A on Innovated Methodlogies',
      teacher: 'Abu Hafsah Kashiff Khan',
      classDescription: `As long as the people of bid'ah have innovated in Islam, the scholars of Islam have explained and wanred against their errors. This lesson is a reading through questions posed to and answerd by Shaykh Salih al-Fawzan refarding newly invented methodolgies that are attributed to Islam but are distant from its teachings.`
    },
  ]
  
  return (
    <div id="activitiesContainer">
      <div id="mxlrAnn">
        <div id="mxlrAnnInner">
        <span id="accTitle">Lessons and Activities</span>
        {/* <span id='mixlrBlurb'>
            Lessons are broadcasted on Masjid al-Hidaayah's Mixlr channel.
            Can't join us at the masjid? Join us online! Click on a lesson for more information.
        </span> */}
        <Mixlr/>  
        </div>
      </div>
      <div id="accRtCont">
        <div id="scheduleContainer">
          {activities.map((activity) =>
            <Card className='classCard'>
              <Card.Img variant="top" src={name } />
            <Card.Body>
              <Card.Title>{ activity.topic  }</Card.Title>
              <Button variant="outline-primary">Lesson Details</Button>
            </Card.Body>
          </Card>
            // <div className="classCard">
            //   <div className='classCardTop'>
            //     <span>{activity.day}</span>
            //   </div>
            //   <div className='classCardBottom'>
            //     <span className="bookName">{activity.topic}</span>
            //   </div>
            // </div>  
          )}
        </div>
      </div>
    </div>
  )
}