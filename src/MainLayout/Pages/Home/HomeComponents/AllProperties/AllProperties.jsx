// This section is created by Sadia

import { NavLink } from "react-router-dom";
import "./all.css";
import useProperties from "../../../../../Hooks/useProperties";
import DynamicCards from "../PopularCities/DynamicCards";
import { useState } from "react";

const AllProperties = () => {
  const [properties] = useProperties();
  const [property, setProperty] = useState([]);

  // const handleSearch = e => {
  //   e.preventDefault();

  //   const searchbar = e.target.searchbar.value
  //   console.log(searchbar)

  //   const filterProperty = properties.filter(item => {
  //   return  item.property_info.property_title.toLowerCase() == searchbar.toLowerCase();} )

  //   if(filterProperty.length === 0) {
  //     return setProperty([]);
  //   }
  //   else{
  //     return setProperty(filterProperty);
  //   }

  // }

  const handleSearch = (e) => {
    e.preventDefault();

    const searchbar = e.target.searchbar.value.trim().toLowerCase();

    if (!searchbar) {
      setProperty([]);
      return;
    }

    const filterProperty = properties.filter(
      (item) => item.property_info.property_title.toLowerCase().includes(searchbar)
    );

    setProperty(filterProperty);
  };

  return (
    <div>
      <div className="allimg">
        <div className=" bg-[#000000B2]">
          <div className=" max-w-screen-2xl mx-auto py-24">
            <h2 className="md:text-6xl text-2xl font-bold text-white font-serif">
              All Properties
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

      <div className="max-w-screen-xl mx-auto gap-4 mt-16">
        <form onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              name="searchbar"
              // onChange={() => handleSearch()}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Please search by property title"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-[#002172] hover:bg-[#e33226] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {/* {properties.map((property) => (
          <DynamicCards key={property._id} property={property}></DynamicCards>
        ))} */}

        {property.length > 0
          ? property.map((property) => (
              <DynamicCards
                key={property._id}
                property={property}
              ></DynamicCards>
            ))
          : properties.map((property) => (
              <DynamicCards
                key={property._id}
                property={property}
              ></DynamicCards>
            ))}
      </div>
    </div>
  );
};

export default AllProperties;
