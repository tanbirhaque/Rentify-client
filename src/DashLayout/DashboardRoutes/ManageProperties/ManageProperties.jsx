// implement and redesign by Rana;
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useProperties from "../../../Hooks/useProperties";
import useAuth from '../../../Hooks/useAuth';
import ManagePropertiesTable from "./ManagePropertiesTable";

const ManageProperties = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [properties] = useProperties();
  const { user } = useAuth();

  const Pending = properties?.filter(
    (item) => item?.property_info.verify_status === "pending" && user?.email ==item?.property_info?.owner_details?.owner_email
  );
  const Verified = properties?.filter(
    (item) => item.property_info.verify_status === "verified" && user?.email ==item?.property_info?.owner_details?.owner_email
  );

  return (
    <>
      {/* banner section */}
      <div
        className="w-full"
        style={{
          backgroundImage: "url(https://i.ibb.co/Zdk0mLj/breadcrumb-4.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div className=" bg-[#000000B2] rounded-lg">
          <div className="w-full lg:max-w-screen-2xl lg:mx-auto py-24 xl:w-[1350px] ">
            <h2 className="text-[36px] lg:text-6xl font-bold text-white font-serif pl-4">
              Manage Properties
            </h2>
            <p className="text-lg font-normal text-gray-200 font-serif pl-4 pt-4">
              Explore and Organize Your Properties here.
            </p>
          </div>
        </div>
      </div>
      {/* manage properties section */}
      <div className="mx-8 mt-10">
        <Tabs defaultIndex={tabIndex} onSelect={(i) => setTabIndex(i)}>
          <TabList>
            <Tab>Pending Properties</Tab>
            <Tab>Verified Properties</Tab>
          </TabList>
          {/* Pending properties */}
          <TabPanel>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead className="font-semibold text-lg text-[#002172]">
                  <tr>
                    <th>Property Info</th>
                    <th>Location</th>
                    <th>For</th>
                    <th>Price</th>
                    <th>Duration</th>
                    <th>Owner Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Pending?.map((property, index) => (
                <tr key={index}>
                  <ManagePropertiesTable property={property}></ManagePropertiesTable>
                </tr>
              ))} 
                </tbody>
              </table>
            </div>
          </TabPanel>
          {/* Verified properties */}
          <TabPanel>
            <div className="">
              <table className="table">
                <thead className="font-semibold text-lg text-[#002172]">
                  <tr>
                    <th>Property Info</th>
                    <th>Location</th>
                    <th>For</th>
                    <th>Price</th>
                    <th>Duration</th>
                    <th>Owner Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Verified?.map((property, index) => (
                <tr className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white" key={index}>
                  <ManagePropertiesTable property={property}></ManagePropertiesTable>
                </tr>
              ))} 
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ManageProperties;
