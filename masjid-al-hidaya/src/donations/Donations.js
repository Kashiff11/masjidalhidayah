import './Donations.css';
import { useState } from 'react';
import tawbah from '../images/tawbah.jpeg';
import Paypal from '../paypal/Paypal';

export default function Donations() {

  return (
    <div className='donationsContainer'>
      <div className='banner'>
        <img id='charityIcon' src='https://cdn4.iconfinder.com/data/icons/charity-9/35/charity-10-512.png'/>
        <img id='charityVerse' src={tawbah} />
      </div>
      <div className='test'>
        <p id='bannerText'>
          The Mosques of Allah shall be maintained only by those who believe
          in Allah and the Last Day and establish prayers and give
          Zakat and fear none but Allah. It is they who are expected to be on
          true guidance.<br/><span id='suratName'> Surat at-Tawbah: Verse 18</span>
        </p>
        <img id='charityIcon1' src='https://i.pinimg.com/originals/7a/b0/42/7ab04258da9b527517cfa57587a6d68d.png'/>
      </div>
      <div className='test1'>
        <p id='bannerText'>
          Your generous donations will be used to fulfill the center's numerous finanical obligations, maintainence projects,
          and dawah activities. May Allah reward you greatly in this life and the next.
        </p>
        </div>
       
     

      <div className='ppButtons'>
        <Paypal/>
      </div>

    </div>

  )
} 