//coded by Fahima
// Tabs by rent & sale and property status filter accepted,pending & rejected add by sojib
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import useRequested from "../../../Hooks/useRequested";
import useAuth from "../../../Hooks/useAuth";
import ReqCard_mod from "./ReqCard_mod";
import ButtonBlue from "../../../MainLayout/Shared/buttons/Blue/ButtonBlue";
import ButtonRed from "../../../MainLayout/Shared/buttons/Red/ButtonRed";

const RequestedProperty = () => {
  const [requested, refetch] = useRequested();
  const [properties, setProperties] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  // Requested data fetched by useEffect because useState data direct not defined
  // const url = `https://rentify-server-drab.vercel.app/all_requested?email=${user?.email}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setProperties(data));
  // }, [url]);
  useEffect(() => {
    setProperties(requested);
  }, [requested]);

  // filter part
  // filter dropdown for accepted,pending and Rejected
  const handleAll = () => {
    // console.log(`This is accepted`)
    setProperties(requested);
  };

  const handleAccepted = () => {
    const accepted = requested.filter(
      (item) => item.requestStatus == "accepted"
    );
    // console.log(accepted)
    setProperties(accepted);
  };

  const handlePending = () => {
    const pending = requested.filter((item) => item.requestStatus == "pending");
    console.log(pending);
    setProperties(pending);
  };

  const handleRejected = () => {
    const rejected = requested.filter(
      (item) => item.requestStatus == "rejected"
    );
    console.log(rejected);
    setProperties(rejected);
  };

  // filter rent and sales for tabs
  const rentsProperties = properties.filter(
    (item) => item.property?.property_for == "rent"
  );
  const salesProperties = properties.filter(
    (item) => item.property?.property_for === "sale"
  );

  return (
    <div className="bg-[#f3f3f3] min-h-screen">
      {/* Background section*/}
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

      {/* Requested properties section */}
      <div className=" mx-8 mt-10">
        <div className=" xl:w-[1200px] mx-auto mt-5">
          {/* Here are used to menu class & Navlink for uniq design and filter by property status in Accepted, Pending & Rejected..[codded by Sojib] */}
          <div className="flex flex-row justify-center items-center mb-7 gap-4 flex-wrap">
            <button onClick={handleAll}>
              <ButtonBlue
                titleBlue={`All`}
                padX={"px-5"}
                padY={"py-3"}
              ></ButtonBlue>
            </button>

            <button onClick={handleAccepted}>
              <ButtonBlue
                titleBlue={`Accepted`}
                padX={"px-5"}
                padY={"py-3"}
              ></ButtonBlue>
            </button>

            <button onClick={handlePending}>
              <ButtonBlue
                titleBlue={`Pending`}
                padX={"px-5"}
                padY={"py-3"}
              ></ButtonBlue>
            </button>
            <button onClick={handleRejected}>
              <ButtonBlue
                titleBlue={`Rejected`}
                padX={"px-5"}
                padY={"py-3"}
              ></ButtonBlue>
            </button>
          </div>
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <div className="">
              <TabList>
                <Tab>Rent Requests</Tab>
                <Tab>Sale Requests</Tab>
              </TabList>
            </div>
            <TabPanel>
              <div className="">
                {rentsProperties?.map((requestedProperty) => (
                  <ReqCard_mod
                    key={requestedProperty._id}
                    requestedProperties={requestedProperty}
                    refetch={refetch}
                  />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                {salesProperties?.map((requestedProperty) => (
                  <ReqCard_mod
                    key={requestedProperty._id}
                    requestedProperties={requestedProperty}
                    refetch={refetch}
                  />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {/* infos */}
    </div>
  );
};

export default RequestedProperty;
