import Banner from "./HomeComponents/Banner/Banner";
import PopularCities from "./HomeComponents/PopularCities/PopularCities";
import Review from "./HomeComponents/Review/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCities></PopularCities>
            <Review></Review>
        </div>
    );
};

export default Home;
