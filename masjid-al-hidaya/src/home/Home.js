import './Home.css';
import Carousel from '../carousel/Carousel'
import Prayers from '../prayers/Prayers';

function Home() {
  return (
    <div>
      <div id="carouselContainer">
        <div id="carouselContainerLeft">
          <h1 id="introBlurb">Welcome to<br />
            <span id="masjidBlurb">Masjid Hidaayah</span>.<br />
            Our Creed, Methodology, and Mission</h1>
        </div>
        <div id="carouselContainerRight">
          <Carousel/>
        </div>
      </div>  
      <div id="prayersContainer">
        <Prayers/>
      </div>
    </div>
    );
}

export default Home;

