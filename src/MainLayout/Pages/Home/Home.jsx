
import About from "./HomeComponents/About/About";

import Journey from "./HomeComponents/Journey/Journey";
import Listing from "./HomeComponents/Listing/Listing";
import OurAdvantage from "./HomeComponents/OurAdvantage/OurAdvantage";
import Banner from "./HomeComponents/Banner/Banner";
import Review from "./HomeComponents/Review/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <Listing/>
          <OurAdvantage/>
          <Journey/>
          <About/>
            
            <Review></Review>
        </div>
    );
};

export default Home;
