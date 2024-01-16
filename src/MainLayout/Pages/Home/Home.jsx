
import About from "./HomeComponents/About/About";

import Journey from "./HomeComponents/Journey/Journey";
import Listing from "./HomeComponents/Listing/Listing";
import OurAdvantage from "./HomeComponents/OurAdvantage/OurAdvantage";


const Home = () => {
    return (
        <div>
            
          <Listing/>
          <OurAdvantage/>
          <Journey/>
          <About/>
        </div>
    );
};

export default Home;