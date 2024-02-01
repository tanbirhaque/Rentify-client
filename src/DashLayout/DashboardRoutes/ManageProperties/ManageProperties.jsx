// implement by Rana;
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PropertyCard from "../../../MainLayout/Shared/PropertyCards/PropertyCard";
import useProperties from "../../../Hooks/useProperties";
// import useAuth from '../../../Hooks/useAuth';

const ManageProperties = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [properties] = useProperties();
  // const { user } = useAuth();

  const Pending = properties?.filter(
    (item) => item?.property_info.verify_status === false
  );
  const Verified = properties?.filter(
    (item) => item.property_info.verify_status === true
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
        }}
      >
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
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
              {Pending?.map((property, index) => (
                <div key={index}>
                  <PropertyCard property={property} details_path={"/details"} />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
              {Verified?.map((property, index) => (
                <div key={index}>
                  <PropertyCard property={property} details_path={"/details"} />
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ManageProperties;
