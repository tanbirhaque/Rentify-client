import PropertyCard from "../../../../Shared/PropertyCards/PropertyCard";

const Listing = () => {
    return (
        <>
        <div className="max-w-screen-2xl  mx-auto mt-32">
            <h1 className="text-[#e33226] font-semibold text-lg">Our Properties</h1>
            <p className="text-4xl font-bold mb-5">Latest House Listings</p>
            <div className="grid grid-cols-3 ">
            <PropertyCard/>
             <PropertyCard/>
             <PropertyCard/>
            </div>
        </div>
        </>
    );
};

export default Listing;