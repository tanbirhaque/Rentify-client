//This code by konika
import React from 'react';
import useSoldProperties from '../../../Hooks/useSoldProperties';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import { HiHomeModern } from "react-icons/hi2";
import { FcHome } from "react-icons/fc";
import { FaMoneyCheckAlt } from "react-icons/fa";



const SoldProperties = () => {
    const [soldOutProperties] = useSoldProperties()
    const [tabIndex, setTabIndex] = useState(0);


    const Residential = soldOutProperties.filter(
        (item) => item.property_category == "Residential"
    );
    const Commercial = soldOutProperties.filter(
        (item) => item.property_category == "Commercial"
    );
    const Apartment = soldOutProperties.filter(
        (item) => item.property_category == "Apartment"
    );
    // console.log(Residential);

    const totalTransactions = soldOutProperties.reduce(
        (total, property) => total + Number(property.price),
        0
    );

    return (
        <>
            <div className=" flex gap-8 ml-10 my-10">
                <div className="flex bg-slate-200 text-lg shadow-md  py-77 px-5 items-center justify-between gap-6 w-80 rounded-2xl">
                    <div>
                        <h1 className="font-bold">{soldOutProperties.length}</h1>
                        <h1>Total Sold Properties</h1>
                    </div>
                    <div className="bg-[#002172] text-white rounded-xl p-4">
                        <HiHomeModern />
                    </div>
                </div>
                <div className="flex bg-slate-200 shadow-md text-lg py-7 px-5 items-center justify-between gap-6 w-80 rounded-2xl">
                    <div className="">
                        <h1 className="font-bold">{Number(totalTransactions)}</h1>
                        <h1>Total Transactions</h1>
                    </div>
                    <div className="bg-[#002172] text-white rounded-xl p-4">
                        <FaMoneyCheckAlt />
                    </div>
                </div>
                <div className="flex bg-slate-200 py-7 shadow-md  px-10 items-center justify-between gap-20 w-[880px] rounded-2xl">
                    <div className="text-6xl">
                        <FcHome />
                    </div>
                    <div className="text-lg">
                        <h1 className="font-bold">INFORMATION</h1>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1>
                    </div>

                </div>
            </div>
          <div className="mx-8 mt-10">
          <div className="overflow-x-auto">
                <Tabs
                    defaultIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <TabList className="ml-[2px]">
                        <Tab>
                            All Sold Properties
                        </Tab>
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
                        <table className="table table-zebra">
                            {/* head */}
                            <thead className="font-semibold text-lg text-[#002172]">
                                <tr>
                                    <th>Property Info</th>
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
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.property_img} />
                                                    </div>
                                                </div>

                                                <div className="font-bold">{item.property_title}</div>


                                            </div>
                                        </td>
                                        <td>{item.paymentUser}</td>
                                        <td>{item.price}</td>
                                        <td>{item.date}</td>
                                        <td className='text-[#e33226]'>{item.property_status}</td>
                                        <td>{item.transactionId}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel>
                        <div className="">

                            <div >
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead className="font-semibold text-lg text-[#002172]">
                                        <tr>
                                            <th>Property Info</th>
                                            <th>Buyer-Email</th>
                                            <th>Price</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>transactionId</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Residential.map((property, index) => (
                                            <tr key={index}>

                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={property.property_img} />
                                                            </div>
                                                        </div>

                                                        <div className="font-bold">{property.property_title}</div>


                                                    </div>
                                                </td>
                                                <td>{property.paymentUser}</td>
                                                <td>{property.price}</td>
                                                <td>{property.date}</td>
                                                <td className='text-[#e33226]'>{property.property_status}</td>
                                                <td>{property.transactionId}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="">

                            <div >
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
                                        {Commercial.slice(0, 6).map((property, index) => (
                                            <tr key={index}>

                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={property.property_img} />
                                                            </div>
                                                        </div>

                                                        <div className="font-bold">{property.property_title}</div>


                                                    </div>
                                                </td>
                                                <td>{property.paymentUser}</td>
                                                <td>{property.price}</td>
                                                <td>{property.date}</td>
                                                <td className='text-[#e33226]'>{property.property_status}</td>
                                                <td>{property.transactionId}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="">

                            <div >
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
                                        {Apartment.slice(0, 6).map((property, index) => (
                                            <tr key={index}>

                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={property.property_img} />
                                                            </div>
                                                        </div>

                                                        <div className="font-bold">{property.property_title}</div>


                                                    </div>
                                                </td>
                                                <td>{property.paymentUser}</td>
                                                <td>{property.price}</td>
                                                <td>{property.date}</td>
                                                <td className='text-[#e33226]'>{property.property_status}</td>
                                                <td>{property.transactionId}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </TabPanel>
                </Tabs>

            </div>
          </div>
        </>
    );
};

export default SoldProperties;