import About from "./HomeComponents/About/About";
import Journey from "./HomeComponents/Journey/Journey";
import Listing from "./HomeComponents/Listing/Listing";
import OurAdvantage from "./HomeComponents/OurAdvantage/OurAdvantage";
import Banner from "./HomeComponents/Banner/Banner";
import Reach from "./HomeComponents/Banner/Reach";
import PopularCities from "./HomeComponents/PopularCities/PopularCities";
import EditReview from "./HomeComponents/Review/EditReview";
// import Review from "./HomeComponents/Review/Review";
import Virtual from "./HomeComponents/Virtual Apartments/Virtual";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Reach></Reach>
      <Listing />
      <About />
      {/* <OurAdvantage /> */}
      {/* <Virtual /> */}
      <Journey />
      <PopularCities></PopularCities>
      <EditReview></EditReview>
    </div>
  );
};

export default Home;
