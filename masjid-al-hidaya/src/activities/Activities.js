import './Activities.css';
import mixlrlogo from '../images/mixlrlogo.png';
import Button from 'react-bootstrap/Button'

export default function Activities() {
  return (
    <div id="activitiesContainer">
      <div id="mxlrAnn">
        <img src={mixlrlogo} id="mixlrLogo" />
        <span id='mixlrBlurb'>
          All lessons are broadcast on Masjid al-Hidaayah's Mixlr channel.
          Can't join us at the masjid? Join us online! More details regarding
          class texts & daily topics
        </span>
        <Button variant="outline-dark" className="buttons">Lessons</Button>
      </div>
      <div id="accRtCont">
        <div id="accTitle"><span>Lessons and Activities</span></div>
        <div id="scheduleContainer"></div>
      </div>
    </div>
  )
}