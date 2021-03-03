import './Prayers.css'

export default function Prayers() {
  return (
    <div id="mainPrayers">
      <div id="prayerTitle">
        <h3>Salah Timings</h3>
      </div>
      <div id="subPrayers">
        <div className="individualSalah">
          <div className="prayerName">
            <h3>Fajr</h3>
          </div>
          <div className="prayerDescription">
            <h5>Adhaan</h5>
            <h3>5:00AM</h3>
            <h5>Iqaamah</h5>
            <h3>5:20AM</h3>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h3>Dhuhr</h3>
          </div>
          <div className="prayerDescription">
            <h5>Adhaan</h5>
            <h3>5:00AM</h3>
            <h5>Iqaamah</h5>
            <h3>5:20AM</h3>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h3>'Asr</h3>
          </div>
          <div className="prayerDescription">
            <h5>Adhaan</h5>
            <h3>5:00AM</h3>
            <h5>Iqaamah</h5>
            <h3>5:20AM</h3>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h3>Maghrib</h3>
          </div>
          <div className="prayerDescription">
            <h5>Adhaan</h5>
            <h3>5:00AM</h3>
            <h5>Iqaamah</h5>
            <h3>5:20AM</h3>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h3>'Isha</h3>
          </div>
          <div className="prayerDescription">
            <h5>Adhaan</h5>
            <h3>5:00AM</h3>
            <h5>Iqaamah</h5>
            <h3>5:20AM</h3>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h3>Jumu'ah</h3>
          </div>
          <div className="prayerDescription">
            <h5>Adhaan</h5>
            <h3>5:00AM</h3>
            <h5>Iqaamah</h5>
            <h3>5:20AM</h3>
          </div>
        </div>
      </div>
    </div>
  )
}