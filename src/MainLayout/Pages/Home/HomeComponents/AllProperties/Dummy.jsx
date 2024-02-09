import React, { useState } from 'react';

const YourComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const propertyData = [
    // Your property data here...
  ];

  const searchPropertyByTitle = (term) => {
    term = term.toLowerCase();
    return propertyData.filter(property => property.property_info.property_title.toLowerCase().includes(term));
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const results = searchPropertyByTitle(searchTerm);
    setSearchResults(results);
    // Handle the search results as needed, e.g., update state, display results, etc.
    console.log('Search results:', results);
  };

  return (
    <div className="max-w-screen-xl mx-auto gap-4 mt-16">
      <form onSubmit={handleSearch}>
        {/* ... other form elements */}
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Please search by property title"
          required
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-[#002172] hover:bg-[#e33226] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </form>

      {/* Display search results as needed */}
      {searchResults.map(result => (
        <div key={result._id}>
          {/* Render the search result details */}
          <p>{result.property_info.property_title}</p>
        </div>
      ))}
    </div>
  );
}

export default YourComponent;
