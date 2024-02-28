//component added by "Fahima"

const Accordion = () => {
  return (
    <div className="my-5 w-full">
      {/* question-1 */}
      <div className="collapse bg-white mb-5 w-full">
        <input type="checkbox" className="w-full" />
        <div className="collapse-title text-sm sm:text-xl font-medium">
          How do I search for available rental properties on your website?
        </div>
        <div className="collapse-content">
          <p className="text-[#666666]">
            You can easily search for rental properties on our website by using
            the search bar and applying filters such as location, price range,
            number of bedrooms, and other preferences. Our user-friendly
            interface makes it simple to find the perfect home for your needs.
          </p>
        </div>
      </div>
      {/* question-2 */}
      <div className="collapse bg-white mb-5 w-full">
        <input type="checkbox" className="w-full" />
        <div className="collapse-title text-sm sm:text-xl font-medium">
          What information is typically included in property listings?
        </div>
        <div className="collapse-content">
          <p className="text-[#666666]">
            Property listings on our website include essential information such
            as the property&#39;s address, rental price, number of bedrooms and
            bathrooms, amenities, and a detailed description. You&#39;ll also
            find high-quality photos to give you a comprehensive view of the
            property.
          </p>
        </div>
      </div>
      {/* question-3 */}
      <div className="collapse bg-white mb-5 w-full">
        <input type="checkbox" className="w-full" />
        <div className="collapse-title text-sm sm:text-xl font-medium">
          How can I schedule a viewing of a rental property?
        </div>
        <div className="collapse-content">
          <p className="text-[#666666]">
            To schedule a viewing, simply navigate to the property listing you
            are interested in and use the provided contact information to get in
            touch with the property manager or owner. They will assist you in
            arranging a convenient time for a viewing.
          </p>
        </div>
      </div>
      {/* question-4 */}
      <div className="collapse bg-white mb-5 w-full">
        <input type="checkbox" className="w-full" />
        <div className="collapse-title text-sm sm:text-xl font-medium">
          Are utilities included in the rental price, or are they separate?
        </div>
        <div className="collapse-content">
          <p className="text-[#666666]">
            The inclusion of utilities varies from property to property. Some
            rentals may include certain utilities in the monthly rent, while
            others may require tenants to pay for utilities separately. Check
            the individual property listings for detailed information on what is
            covered in the rental agreement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
