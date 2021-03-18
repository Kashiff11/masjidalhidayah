import './Home.css';
import Carousel from '../carousel/Carousel'
import Prayers from '../prayers/Prayers';
import Activities from '../activities/Activities';
import Footer from '../footer/Footer'
import Mixlr from '../mixlr/Mixlr'

function Home() {
  return (
    <div>
      <div id="carouselContainer">
          <Carousel/>
      </div>
      <div id="activitiesContainer">
        <Activities/>
      </div>
      <div>
        <Mixlr/>
      </div>
      <div id="prayersContainer">
        <Prayers/>
      </div>
      <div id="footerContainer">
        <Footer/>
      </div>
    </div>
    );
}

export default Home;

