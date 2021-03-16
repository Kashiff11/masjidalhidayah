import './Footer.css';
import { BiCopyright } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

export default function Footer() {
  

  return (
    
    <div className='footerContainer'>
      <div className = "mainLinksContainer">
        <div className="linksContainer">
          <span className="columnHeading">QUICK LINKS</span>
          <div id="addressColumn">
            <FiExternalLink />
            <h5 className='footerContent'>www.germantownmasjid.com</h5>
          </div>
          <div id="addressColumn">
            <FiExternalLink />
            <h5 className='footerContent'>www.salafipubs.com</h5>
          </div>
          <div id="addressColumn">
            <FiExternalLink />
            <h5 className='footerContent'>www.salafisounds.com</h5>
          </div>
        </div>
        <div className="linksContainer">
          <span className="columnHeading">ADDRESS</span>
          <div id="addressColumn">
            <GoLocation />
            <h5 className='footerContent'>Meadows Park Center <br />
            6600 Security Blvd. <br />
            Woodlawn, MD 21207</h5>
          </div>
        </div>
        <div className="linksContainer">
          <span className="columnHeading">CONTACT US</span>
          <div id="addressColumn">
            <AiOutlineMail />
            <h5 className='footerContent'>Admin@MasjidalHidaayah.com</h5>
          </div>
        </div>
        <div className="linksContainer">
          <span className="columnHeading">FOLLOW US</span>
          <div id="addressColumn">
            <FiTwitter size={'1.5rem'} />
            <AiOutlineFacebook size={'1.7rem'}/>
          </div>
        </div>
      </div>
      <div className = "copyrightsContainer">
        <BiCopyright size={ '1.5rem' }/>
        <h5 className='footerContent' > 2021 KKhanDev LLC - All Rights Reserved</h5>
      </div>
    </div>
  )
}

