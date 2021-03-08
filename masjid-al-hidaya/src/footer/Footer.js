import './Footer.css';
import { BiCopyright } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineFacebook } from 'react-icons/ai';

export default function Footer() {
  

  return (
    
    <div className='footerContainer'>
      <div className = "mainLinksContainer">
        <div className="linksContainer">
          <span className="columnHeading">QUICK LINKS</span>
        </div>
        <div className="linksContainer">
          <span className="columnHeading">ADDRESS</span>
          <div id="addressColumn">
            <GoLocation />
            <h5>Meadows Park Center <br />
            6600 Security Blvd. <br />
            Woodlawn, MD 21207</h5>
          </div>
        </div>
        <div className="linksContainer">
          <span className="columnHeading">CONTACT US</span>
          <div id="addressColumn">
            <AiOutlineMail />
            <h5>Admin@MasjidalHidaayah.com</h5>
          </div>
        </div>
        <div className="linksContainer">
          <span className="columnHeading">FOLLOW US</span>
          <div id="addressColumn">
            <FiTwitter />
            <h5>@MasjidHidaayah</h5>
          </div>
          <div id="addressColumn">
            <AiOutlineFacebook size={ '1.3rem' }/>
            <h5>Masjid al-Hidaayah</h5>
          </div>
        </div>
      </div>
      <div className = "copyrightsContainer">
        <BiCopyright/>
        <h5> 2021 KKhanDev LLC - All Rights Reserved</h5>
      </div>
    </div>
  )
}

