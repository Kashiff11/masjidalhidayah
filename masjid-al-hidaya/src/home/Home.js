import './Home.css';
import Carousel from '../carousel/Carousel'

function Home() {
  return (
    <div>
      <div id="carouselContainer">
        <div id="carouselContainerLeft">
          <h1 id="introBlurb">Welcome to the online home of <span id="masjidBlurb">Masjid Hidaayah</span>. Our Creed, Methodology, and Mission ...</h1>
        </div>
        <div id="carouselContainerRight">
          <Carousel/>
        </div>
      </div>  
    </div>
    );
}

export default Home;

