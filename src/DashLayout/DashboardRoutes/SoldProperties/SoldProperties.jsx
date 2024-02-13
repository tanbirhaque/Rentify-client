import React from 'react';
import useSoldProperties from '../../../Hooks/useSoldProperties';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import useProperties from '../../../Hooks/useProperties';




const SoldProperties = () => {
    const [soldOutProperties] =useSoldProperties()
    const [tabIndex, setTabIndex] = useState(0);
    // const [properties] = useProperties();
      
    const apartment = soldOutProperties.filter(
        (item) => item.property_info.property_category === "Apartment"
    );
    console.log(apartment)
    const Commercial = soldOutProperties.filter(
        (item) => item.property_info.property_category === "Commercial"
    );
    const Residential = soldOutProperties.filter(
        (item) => item.property_info.property_category === "Residential"
    );

    return ( 
        <>
         <div className="overflow-x-auto">
         <Tabs
                        defaultIndex={tabIndex}
                        onSelect={(index) => setTabIndex(index)}
                    >
                        <TabList className="ml-[2px]">
                            <Tab>
                                Residential
                            </Tab>
                            <Tab>
                                Commercial
                            </Tab>
                            <Tab>
                                Apartment
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
                                {Residential.map((property, index) => (
                                    <div key={index}>
                                      
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
                                {Commercial.slice(0, 6).map((property, index) => (
                                    <div key={index}>
                                       
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
                                {apartment.slice(0, 6).map((property, index) => (
                                    <div key={index}>
                                      
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="font-semibold text-lg text-[#002172]">
                        <tr>
                            <th>Buyer-Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>transactionId</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {soldOutProperties.map((item, index) => (
                            <tr key={index}>
                                <td>{item.paymentUser}</td>
                                <td>{item.price}</td>
                                <td>{item.date}</td>
                                <td className='text-[#e33226]'>{item.property_status}</td>
                                <td>{item.transactionId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SoldProperties;