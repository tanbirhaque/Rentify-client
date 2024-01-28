//coded by Fahima
import RequestCard from "./RequestCard";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const RequestedProperty = () => {
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);

  // Request data fetched by useffect becouse usehook usestate data direct not defiend
  const url = `http://localhost:5000/all_requested?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProperties(data))
  }, [url])

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
          <div className="w-full lg:max-w-screen-2xl lg:mx-auto py-24 xl:w-[1350px] ">
            <h2 className="text-[36px] lg:text-6xl font-bold text-white font-serif pl-4">
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
        {properties.map((requestedProperty) => (
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
