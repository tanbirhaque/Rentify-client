//coded by Fahima
// Tabs by rent & sale and property status filter accepted,pending & rejected add by sojib 
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RequestCard from "./RequestCard";
import { useEffect, useState } from "react";
import useRequested from "../../../Hooks/useRequested";
import useAuth from "../../../Hooks/useAuth";
import ReqCard_mod from "./ReqCard_mod";
import ButtonBlue from "../../../MainLayout/Shared/buttons/Blue/ButtonBlue";
import ButtonRed from "../../../MainLayout/Shared/buttons/Red/ButtonRed";

const RequestedProperty = () => {
  const [requested] = useRequested();
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  // Requested data fetched by useEffect because useState data direct not defined
  const url = `http://localhost:5000/all_requested?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProperties(data))
  }, [url])

  // filter part
  // filter dropdown for accepted,pending and Rejected
  const handleAll = () => {
    // console.log(`This is accepted`)
    setProperties(requested)
  }

  const handleAccepted = () => {
    const accepted = requested.filter(item => item.requestStatus == "accepted")
    // console.log(accepted)
    setProperties(accepted)
  }

  const handlePending = () => {
    const pending = requested.filter(item => item.requestStatus == "pending")
    console.log(pending)
    setProperties(pending)
  }

  const handleRejected = () => {
    const rejected = requested.filter(item => item.requestStatus == "rejected")
    console.log(rejected)
    setProperties(rejected)
  }


  // filter rent and sales for tabs
  const rentsProperties = properties.filter((item) => item.property?.property_for == "rent");
  const salesProperties = properties.filter((item) => item.property?.property_for === "sale");

  return (
    <div className="">
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
        {/*TODO:Dropdown filter by property status in Accepted, Pending & Rejected.. [now it's commented,, just created design. If you need this you uncomment it] */}
        {/* <div className=" flex justify-end my-5 mr-5">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-neutral mr-10 font-bold">Propery Status</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li className=" btn font-bold" onClick={handleAll}><a>All</a></li>
              <li className=" btn font-bold" onClick={handleAccepted}><a>Accepted</a></li>
              <li className=" btn font-bold" onClick={handlePending}><a>Pending</a></li>
              <li className=" btn font-bold" onClick={handleRejected}><a>Rejected</a></li>
            </ul>
          </div>
        </div> */}

        <div className=" xl:w-[1200px] mx-auto mt-5">
          {/* Here are used to menu class & Navlink for uniq design and filter by property status in Accepted, Pending & Rejected..[codded by Sojib] */}
          <div className="flex flex-row justify-center items-center mb-7 gap-4 flex-wrap">
            <button
              onClick={handleAll}
            >
              <ButtonBlue
                titleBlue={`All`}
                padX={"px-5"}
                padY={"py-3"}
              >
              </ButtonBlue>
            </button>

            <button
              onClick={handleAccepted}
            >
              <ButtonBlue
                titleBlue={`Accepted`}
                padX={"px-5"}
                padY={"py-3"}
              >
              </ButtonBlue>
            </button>

            <button
              onClick={handlePending}
            >
              <ButtonBlue
                titleBlue={`Pending`}
                padX={"px-5"}
                padY={"py-3"}
              >
              </ButtonBlue>
            </button>
            <button
              onClick={handleRejected}
            >
              <ButtonBlue
                titleBlue={`Rejected`}
                padX={"px-5"}
                padY={"py-3"}
              >
              </ButtonBlue>
            </button>
          </div>
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <div className="">
              <TabList>
                <Tab>
                  Rent Requests
                </Tab>
                <Tab>
                  Sale Requests
                </Tab>
              </TabList>
            </div>
            <TabPanel>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5"> */}
              <div className="">
                {rentsProperties?.map((requestedProperty) => (
                  <ReqCard_mod
                    key={requestedProperty._id}
                    requestedProperties={requestedProperty}
                  />
                  // <RequestCard
                  //   key={requestedProperty._id}
                  //   requestedProperties={requestedProperty}
                  // />
                ))}
              </div>
              {/* </div> */}
            </TabPanel>
            <TabPanel>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5"> */}
              <div>
                {salesProperties?.map((requestedProperty) => (
                  <ReqCard_mod
                    key={requestedProperty._id}
                    requestedProperties={requestedProperty}
                  />
                  // <RequestCard
                  //   key={requestedProperty._id}
                  //   requestedProperties={requestedProperty}
                  // />
                ))}
              </div>
              {/* </div> */}
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {/* infos */}
    </div >
  );
};

export default RequestedProperty;
