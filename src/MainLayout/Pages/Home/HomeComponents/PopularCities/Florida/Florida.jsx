// this section is entirely made by sadia
import { NavLink } from "react-router-dom";
import DynamicCards from "../DynamicCards";
import useProperties from "../../../../../../Hooks/useProperties";
import { useState } from "react";
import PropertyCard from "../../../../../Shared/PropertyCards/PropertyCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Helmet } from "react-helmet";

const Florida = () => {
  const [properties] = useProperties();
  const cityProperties = properties.filter(
    (property) =>
      property?.property_info.property_location.address.city === "Florida"
  );
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
    const sorted = [...cityProperties].sort(
      (a, b) =>
        a.property_info.property_details.property_price -
        b.property_info.property_details.property_price
    );
    setProperty(sorted);
  };

  const sortByPriceHighToLow = () => {
    const sorted = [...cityProperties].sort(
      (a, b) =>
        b.property_info.property_details.property_price -
        a.property_info.property_details.property_price
    );
    setProperty(sorted);
  };

  return (
    <>
    <Helmet>
        <title>Rentify | Florida</title>
      
    </Helmet>
    <div>
      {/* banner section */}
      <div className="img3">
        <div className=" bg-[#000000B2]">
          <div className=" max-w-screen-2xl mx-auto py-24">
            <h2 className="md:text-6xl text-2xl font-bold text-white font-serif">
              All Properties in Florida
            </h2>
            <div className="mt-2">
              <NavLink
                to="/"
                className="navAfter relative font-medium text-base text-white mx-3"
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                className="navAfter relative font-medium text-base text-white mx-3"
              >
                Blogs
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
              {
                cityProperties?.map((property) => <DynamicCards key={property._id} property={property}></DynamicCards>)
              }
            </div> */}
      {/* tab card section */}
      <div className="max-w-[1296px] mx-auto  mb-[100px]">
        
          

          <div className=" py-10   flex justify-end">
            <details className="dropdown mb-10 ">
              <summary className="m-1 btn bg-[#002172] text-white hover:bg-[#e33226]">
                Sort By Price{" "}
                <MdKeyboardArrowDown className="text-xl"></MdKeyboardArrowDown>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a className="font-bold" onClick={sortByPriceHighToLow}>
                    High to Low
                  </a>
                </li>
                <li>
                  <a className="font-bold" onClick={sortByPriceLowToHigh}>
                    Low to High
                  </a>
                </li>
              </ul>
            </details>
          </div>


        <div className="">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <div className="md:flex justify-between items-center mx-3 md:mx-0">
          <TabList className="ml-[2px]">
              <Tab onClick={handleAllProperties}>All Properties</Tab>
              <Tab onClick={handleResidentialProperties}>Residential</Tab>
              <Tab onClick={handleCommercialProperties}>Commercial</Tab>
              <Tab onClick={handleApartmentProperties}>Apartment</Tab>
            </TabList>

            <p className="mr-[2px] font-bold md:text-lg text-gray-700 text-xs">
          {countData} Results Found
        </p>
          </div>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
               

                {property.length > 0
                  ? property.map((property) => (
                      <PropertyCard
                        key={property._id}
                        property={property}
                      ></PropertyCard>
                    ))
                  : cityProperties?.map((property) => (
                      <PropertyCard
                        key={property._id}
                        property={property}
                      ></PropertyCard>
                    ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
               

                {property.length > 0
                  ? property.map((property) => (
                      <PropertyCard
                        key={property._id}
                        property={property}
                      ></PropertyCard>
                    ))
                  : Residential.map((property, index) => (
                      <div key={index}>
                        <PropertyCard
                          property={property}
                          details_path={"/details"}
                        />
                      </div>
                    ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
               

                {property.length > 0
                  ? property.map((property) => (
                      <PropertyCard
                        key={property._id}
                        property={property}
                      ></PropertyCard>
                    ))
                  : Commercial.map((property, index) => (
                      <div key={index}>
                        <PropertyCard
                          property={property}
                          details_path={"/details"}
                        />
                      </div>
                    ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
                

                {property.length > 0
                  ? property.map((property) => (
                      <PropertyCard
                        key={property._id}
                        property={property}
                      ></PropertyCard>
                    ))
                  : apartment.map((property, index) => (
                      <div key={index}>
                        <PropertyCard
                          property={property}
                          details_path={"/details"}
                        />
                      </div>
                    ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
    </>
  );
};

export default Florida;
