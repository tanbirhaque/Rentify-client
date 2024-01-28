// implement by Rana;
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PropertyCard from "../../../MainLayout/Shared/PropertyCards/PropertyCard";
import useProperties from "../../../Hooks/useProperties";

const ManageProperties = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [properties] = useProperties();

  const Pending = properties?.filter((item) => item?.property_info.verify_status === false);
  const Verified = properties?.filter((item) => item.property_info.verify_status === true);

  return (
    <div className="p-6">
      <Tabs defaultIndex={tabIndex} onSelect={(i) => setTabIndex(i)} >
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
  );
};

export default ManageProperties;
