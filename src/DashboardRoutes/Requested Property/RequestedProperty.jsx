//coded by Fahima

import { useLoaderData } from "react-router-dom";
import RequestCard from "./RequestCard";

const RequestedProperty = () => {
  //data fetch
  const requestedProperties = useLoaderData();
  console.log(requestedProperties);

  return (
    <div>
      <div
        className="w-full"
        style={{
          backgroundImage: "url(https://i.ibb.co/Zdk0mLj/breadcrumb-4.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" bg-[#000000B2] rounded-lg">
          <div className=" max-w-screen-2xl mx-auto py-24 w-[1350px] ">
            <h2 className="text-6xl font-bold text-white font-serif pl-4">
              Requested Properties
            </h2>
            <p className="text-lg font-normal text-gray-200 font-serif pl-4 pt-4">
              All Your Requested Properties will be displayed here.
            </p>
          </div>
        </div>
      </div>
      {/* infos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {requestedProperties.map((requestedProperty) => (
          <RequestCard
            key={requestedProperty._id}
            requestedProperties={requestedProperty}
          />
        ))}
      </div>
    </div>
  );
};

export default RequestedProperty;
