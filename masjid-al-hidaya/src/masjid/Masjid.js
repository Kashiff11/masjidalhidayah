import './Masjid.css';
import masjid1 from '../images/masjid1.jpg';
import masjid2 from '../images/masjid2.jpg';
import masjid3 from '../images/masjid3.jpg';
import { Link } from 'react-router-dom';

export default function Masjid() {
  return (
    <div id='masjidContainer'>
        <img className='masjidImages' id='masjid1' src={masjid1}></img>
        <h2 className='masjidIntroTitle'>Welcome to <span id='masjidName'>Masjid al-Hidaayah</span></h2>
        <h4 className='masjidIntro'>
        We are centrally located in Baltimore County in Woodlawn, Maryland; only a few minutes drive into
        Baltimore City and Ellicott City. The mosque was founded in 2020 to fulfill a need
        for a masjid and educational center that focused on teaching the Muslims and non-Muslims
        orthodox Islam as explained in the Quran and Sunnah and practiced by the earliest
        generations of Islam (the Salaf).
        </h4>
        <img className='masjidImages' id='masjid2' src={masjid2}></img>
        <h2 className='masjidIntroTitle'>Affiliated Mosques & Centers</h2>
        <h4 className='masjidIntro'>
        Masjid al-Hidaayah is, and all praises are for Allah, the third Salafi center established in Maryland
        and District of Columbia. We work and cooperate in close conjuction with Masjid ad-Da`wah ilat-Tawheed located in
        Baltimore City, and Masjid Ahlul Quran wal Hadeeth located in Washington DC. We thank Allah that all three
        centers share not only a single creed and methodology, but also teachers and Imams.
        </h4>
        <img className='masjidImages' id='masjid3' src={masjid3}></img>
        <h2 className='masjidIntroTitle'>Lessons & Activities</h2>
        <h4 className='masjidIntro'>
          Masjid al-Hidaayah is open and accessible for the five daily salawaat (prayers) for brothers and sisters.
          Friday prayers are also established weekly. Please note that until further notice, the women's prayer hall
          will be closed for Friday prayers. Additionally, there are weekly lessons on Islamic aqeedah (creed),
          manhaj (methodology), fiqh (jurispudence), Quran, and Arabic. For further details on lessons and schedules, visit
          our <Link to='/lessons'>lessons page</Link>.
        </h4>
    </div>

  )
}