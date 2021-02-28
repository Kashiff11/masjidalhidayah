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
            <h1>Fajr</h1>
          </div>
          <div className="prayerDescription">
            <h4>Adhaan</h4>
            <h2>5:00AM</h2>
            <h4>Iqaamah</h4>
            <h2>5:20AM</h2>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h1>Dhuhr</h1>
          </div>
          <div className="prayerDescription">
            <h4>Adhaan</h4>
            <h2>5:00AM</h2>
            <h4>Iqaamah</h4>
            <h2>5:20AM</h2>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h1>'Asr</h1>
          </div>
          <div className="prayerDescription">
            <h4>Adhaan</h4>
            <h2>5:00AM</h2>
            <h4>Iqaamah</h4>
            <h2>5:20AM</h2>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h1>Maghrib</h1>
          </div>
          <div className="prayerDescription">
            <h4>Adhaan</h4>
            <h2>5:00AM</h2>
            <h4>Iqaamah</h4>
            <h2>5:20AM</h2>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h1>'Isha</h1>
          </div>
          <div className="prayerDescription">
            <h4>Adhaan</h4>
            <h2>5:00AM</h2>
            <h4>Iqaamah</h4>
            <h2>5:20AM</h2>
          </div>
        </div>
        <div className="individualSalah">
          <div className="prayerName">
            <h1>Jumu'ah</h1>
          </div>
          <div className="prayerDescription">
            <h4>Adhaan</h4>
            <h2>5:00AM</h2>
            <h4>Iqaamah</h4>
            <h2>5:20AM</h2>
          </div>
        </div>
      </div>
    </div>
  )
}