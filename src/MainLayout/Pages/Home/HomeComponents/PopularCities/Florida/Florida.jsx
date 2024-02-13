import { NavLink } from "react-router-dom";
import DynamicCards from "../DynamicCards";
import useProperties from "../../../../../../Hooks/useProperties";
import { useState } from "react";


const Florida = () => {

    const [properties] = useProperties();
    const cityProperties = properties.filter(property => property?.property_info.property_location.address.city === 'Florida')
    const [property, setProperty] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
  
    const [countData, setCountData] = useState(cityProperties.length);
  
    const apartment = cityProperties.filter(
      (item) => item.property_info.property_category === "Apartment"
    );
    const Commercial = cityProperties.filter(
      (item) => item.property_info.property_category === "Commercial"
    );
    const Residential = cityProperties.filter(
      (item) => item.property_info.property_category === "Residential"
    );

    const handleAllProperties = () => {
        const count = cityProperties.length;
        setCountData(count);
      };
    
      const handleApartmentProperties = () => {
        const count = apartment.length;
        setCountData(count);
      };
    
      const handleCommercialProperties = () => {
        const count = Commercial.length;
        setCountData(count);
      };
    
      const handleResidentialProperties = () => {
        const count = Residential.length;
        setCountData(count);
      };
    
      const sortByPriceLowToHigh = () => {
        const sorted = [...properties].sort(
          (a, b) =>
            a.property_info.property_details.property_price -
            b.property_info.property_details.property_price
        );
        setProperty(sorted);
      };
    
      const sortByPriceHighToLow = () => {
        const sorted = [...properties].sort(
          (a, b) =>
            b.property_info.property_details.property_price -
            a.property_info.property_details.property_price
        );
        setProperty(sorted);
      };

    return (
        <div>
        {/* banner section */}
        <div className="img3">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="text-6xl font-bold text-white font-serif">All Properties in Florida</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/blogs' className='navAfter relative font-medium text-base text-white mx-3'>Blogs</NavLink>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
              {
                cityProperties?.map((property) => <DynamicCards key={property._id} property={property}></DynamicCards>)
              }
            </div>
        </div>
    );
};

export default Florida;
