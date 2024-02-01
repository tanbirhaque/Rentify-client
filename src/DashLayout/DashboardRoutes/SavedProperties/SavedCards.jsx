import { FaHeart, FaStar, FaDollarSign, FaWifi, FaBed, FaTv, FaFire, FaPlus } from 'react-icons/fa';


const SavedCards = ({items}) => {
  const {property} = items
  return (
    <div>
      <div className="w-full max-w-[26rem] shadow-lg">
        <div className="bg-blue-gray relative rounded-xl">
          <img
            src={property.property_info.property_img }
            alt="ui/ux review check"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60" />
          <button className="absolute top-4 right-4 text-red-500 rounded-full">
            <FaHeart className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="text-[#002172] font-semibold ">{property.property_info. property_title}</h5>
            <div className="flex items-center gap-1.5 text-blue-gray">
              <FaStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
              3
            </div>
          </div>
          <p className="text-gray-500">
          Indulge in the epitome of urban sophistication with our Stylish Urban Loft, a captivating space meticulously curated to embody the essence of Industrial Chic Vibes.
          </p>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaDollarSign className="h-5 w-5" />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaWifi className="h-5 w-5" />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaBed className="h-5 w-5" />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaTv className="h-5 w-5" />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaFire className="h-5 w-5" />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaPlus />
            </span>
          </div>
        </div>
        <div className="pt-3">
          <button className=" bg-[#002172]  hover:bg-[#e33226] text-white py-3 px-6 w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SavedCards;
