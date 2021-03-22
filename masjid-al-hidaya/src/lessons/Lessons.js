import './Lessons.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import hadith from '../images/hadith.png';
import quran from '../images/quran.png';
import name from '../images/name.png';
import guide from '../images/guide.png';
import ibrahim from '../images/ibrahim.png'
import { FiMic } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { WiTime8 } from 'react-icons/wi';

export default function Lessons(props) {

  function lessonImage(num) {
    if (num === 1) return name;
    if (num === 4 || num === 6) return quran;
    if (num === 2) return ibrahim;
    if (num === 3) return hadith;
    if (num === 5) return guide;
    if (num === 7) return hadith;
  }

  return (
    <div className='lessonsContainer'>
      {props.activities.map((activity) =>
      <Jumbotron className="singleLessonContainer">
        <img src={lessonImage(activity.id)} className="lessonImage"/>
        <div>
            <p className='topic'>{activity.topic}</p>
            <div className="teacherDayTime">
              <div className="teacherDayTime2">
                <FiMic size={25} />
                <p>{activity.teacher}</p>
              </div>
              <div className="teacherDayTime2">
                <AiOutlineCalendar size={30}/>
                <p>{activity.day}</p>
              </div>
              <div className="teacherDayTime2">
                <WiTime8 size={30} />
                <p>{activity.time}</p>
              </div>
            </div>
              <p className="description">{activity.classDescription}</p>
        </div>
        </Jumbotron>
      )}
    </div>
  )
}