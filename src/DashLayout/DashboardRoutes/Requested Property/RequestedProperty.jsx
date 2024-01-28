//coded by Fahima
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RequestCard from "./RequestCard";
import { useEffect, useState } from "react";
import useRequested from "../../../Hooks/useRequested";
import useAuth from "../../../Hooks/useAuth";

const RequestedProperty = () => {
  const [requested] = useRequested();
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  // Request data fetched by useffect becouse usehook usestate data direct not defiend
  const url = `http://localhost:5000/all_requested?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProperties(data))
  }, [url])

  // filter part
  // filter dropdoen for accepted,pending and Rejected
  const handleAccepted = () => {
    const acchepted = requested.filter(item => item.requestStatus == "accept")
    // console.log(acchepted)
    setProperties(acchepted)
  }

  const handlePending = () => {
    const pending = requested.filter(item => item.requestStatus == "pending")
    console.log(pending)
    setProperties(pending)
  }

  const handleRejected = () => {
    const rejected = requested.filter(item => item.requestStatus == "reject")
    console.log(rejected)
    setProperties(rejected)
  }


  // filter rent and sales for tabs
  const rentsProperties = properties.filter((item) => item.property.property_for == "rent");
  const salesProperties = properties.filter((item) => item.property.property_for === "sale");

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
      <div className=" mx-10 mt-10">
        {/* Tabs and filter dropdown flex */}
        <div className="flex justify-between items-start">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Rent</Tab>
              <Tab>Sale</Tab>
            </TabList>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {rentsProperties.map((requestedProperty) => (
                  <RequestCard
                    key={requestedProperty._id}
                    requestedProperties={requestedProperty}
                  />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {salesProperties.map((requestedProperty) => (
                  <RequestCard
                    key={requestedProperty._id}
                    requestedProperties={requestedProperty}
                  />
                ))}
              </div>
            </TabPanel>
          </Tabs>
          <div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-neutral mr-10">Propery Status</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={handleAccepted}><a>Accepted</a></li>
                <li onClick={handlePending}><a>Pending</a></li>
                <li onClick={handleRejected}><a>Rejected</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* infos */}
    </div>
  );
};

export default RequestedProperty;
