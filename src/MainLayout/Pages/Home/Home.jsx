import Banner from "./HomeComponents/Banner/Banner";
import Reach from "./HomeComponents/Banner/Reach";
import PopularCities from "./HomeComponents/PopularCities/PopularCities";
import EditReview from "./HomeComponents/Review/EditReview";
import Review from "./HomeComponents/Review/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reach></Reach>
            <PopularCities></PopularCities>
            {/* <Review></Review> */}
            <EditReview></EditReview>
        </div>
    );
};

export default Home;
