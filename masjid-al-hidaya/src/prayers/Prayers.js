import './Prayers.css'

export default function Prayers() {
  return (
    <div id="mainPrayers">
      <div id="prayerTitle">
        <h1>Salah Timings</h1>
      </div>
      <div id="subPrayers">
        <div className="individualSalah">
          <div className="prayerName">
            <h2>Fajr</h2>
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
            <h2>Dhuhr</h2>
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
            <h2>'Asr</h2>
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
            <h2>Maghrib</h2>
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
            <h2>'Isha</h2>
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
            <h2>Jumu'ah</h2>
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