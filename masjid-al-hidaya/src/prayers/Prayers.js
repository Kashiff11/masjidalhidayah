import './Prayers.css'
import React, { useEffect, useState } from 'react';
import axios from "axios"

export default function Prayers() {

  const [prayers, setPrayers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const currentTimeURL = `http://api.aladhan.com/v1/timingsByAddress?address=Baltimore`;
      const response = await axios.get(currentTimeURL);
      setPrayers(response.data)
    };
    getData();
  }, []);
  
  function adjustTime(str) {
    let time = str.split(':')
    let hours = Number(time[0])
    let minutes = Number(time[1])
    
    let timeValue;

    if (hours > 0 && hours <= 12) {
      timeValue= "" + hours;
    } else if (hours > 12) {
      timeValue= "" + (hours - 12);
    } else if (hours === 0) {
      timeValue= "12";
    }

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM

    return timeValue;
  }

  function iqaamahTime(str, num) {
    let time = str.split(':')
    let hours = Number(time[0])
    let minutes = Number(time[1])
    let iTime
     


    if (hours > 0 && hours <= 12) {
      hours = hours;
    } else if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }

    if (num === 1) minutes += 25;
    if (num === 2 || num === 3) minutes += 20;
    if (num === 4) minutes += 10;
    if (num === 5) minutes += 15;

    if (minutes >= 60) {
      iTime = "" + (hours + 1) + ":" + (60 - minutes)
      iTime += (num >= 2) ? " PM" : " AM";
    } else {
      iTime = "" + hours + ":" + minutes
      iTime += (num >= 2) ? " PM" : " AM";
    }
  
    return iTime

  }

  function hijriDate(str) {

    let months = ['Muharram', 'Safar', 'Rabi ul-Awwal', 'Rabi uth-Tani', 'Jumada al-Uwla', 'Jumada al-Ukhra', 'Rajab', 'Sha`ban', 'Ramadan', 'Shawwal', 'Dhul Qa`dah', 'Dhul Hijjah']
    let date = str.split('-')
    let month = months[Number(date[0])]
    let islamicDate = `${month} ${date[0]}, ${date[2]} H.`

    return islamicDate
  }

  return (
    <div id="mainPrayers">
      <div id="prayerTitle">
        <h3 className='prayerName2'>Salah Timings for</h3>
        <h2 className='prayerName2'>{prayers.data && hijriDate(prayers.data.date.hijri.date)}/{prayers.data && prayers.data.date.readable}</h2>
      </div>
      <div id="subPrayers">
        <div className="individualSalah">
          <div className="prayerName">
            <h3 className='prayerName2'>Fajr</h3>
          </div>
          <div className="prayerDescription">
            <h5 className='prayerName2'>Adhaan</h5>
            <h3 className='prayerName2'>{prayers.data && adjustTime(prayers.data.timings.Fajr)}</h3>
            <h5 className='prayerName2'>Iqaamah</h5>
            <h3 className='prayerName2'>{prayers.data && iqaamahTime(prayers.data.timings.Fajr, 1)}</h3>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h3 className='prayerName2'>Dhuhr</h3>
          </div>
          <div className="prayerDescription">
            <h5 className='prayerName2'>Adhaan</h5>
            <h3 className='prayerName2'>{prayers.data && adjustTime(prayers.data.timings.Dhuhr)}</h3>
            <h5 className='prayerName2'>Iqaamah</h5>
            <h3 className='prayerName2'>{prayers.data && iqaamahTime(prayers.data.timings.Dhuhr, 2)}</h3>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h3 className='prayerName2'>'Asr</h3>
          </div>
          <div className="prayerDescription">
            <h5 className='prayerName2'>Adhaan</h5>
            <h3 className='prayerName2'>{prayers.data && adjustTime(prayers.data.timings.Asr)}</h3>
            <h5 className='prayerName2'>Iqaamah</h5>
            <h3 className='prayerName2'>{prayers.data && iqaamahTime(prayers.data.timings.Asr, 3)}</h3>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h3 className='prayerName2'>Maghrib</h3>
          </div>
          <div className="prayerDescription">
            <h5 className='prayerName2'>Adhaan</h5>
            <h3 className='prayerName2'>{prayers.data && adjustTime(prayers.data.timings.Maghrib)}</h3>
            <h5 className='prayerName2'>Iqaamah</h5>
            <h3 className='prayerName2'>{prayers.data && iqaamahTime(prayers.data.timings.Maghrib, 4)}</h3>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h3 className='prayerName2'>'Isha</h3>
          </div>
          <div className="prayerDescription">
            <h5 className='prayerName2'>Adhaan</h5>
            <h3 className='prayerName2'>{prayers.data && adjustTime(prayers.data.timings.Isha)}</h3>
            <h5 className='prayerName2'>Iqaamah</h5>
            <h3 className='prayerName2'>{prayers.data && iqaamahTime(prayers.data.timings.Isha, 5)}</h3>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h3 className='prayerName2'>Jumu'ah</h3>
          </div>
          <div className="prayerDescription">
            <h5 className='prayerName2'>Adhaan</h5>
            <h3 className='prayerName2'>{prayers.data && adjustTime(prayers.data.timings.Dhuhr)}</h3>
            <h5 className='prayerName2'>Iqaamah</h5>
            <h3 className='prayerName2'>1:30 PM</h3>
          </div>
        </div>
      </div>
    </div>
  )
}