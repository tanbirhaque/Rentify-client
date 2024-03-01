//This code by konika
// Redesign image format by Rana
import useSoldProperties from "../../../Hooks/useSoldProperties";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import { HiHomeModern } from "react-icons/hi2";
import { FcHome } from "react-icons/fc";
import { FaMoneyCheckAlt } from "react-icons/fa";

const SoldProperties = () => {
  const [soldOutProperties] = useSoldProperties();
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
  console.log(Residential);

  const totalTransactions = soldOutProperties.reduce(
    (total, property) => total + Number(property.price),
    0
  );

  return (
    <>
      <section className="py-1 bg-[#f3f3f3] w-full min-h-screen">
        <div className=" flex gap-8 mx-auto py-5 w-[93%]">
          <div className="flex bg-white text-lg shadow-md  py-77 px-5 items-center justify-between gap-6 w-80 rounded-2xl">
            <div>
              <h1 className="font-bold">{soldOutProperties.length}</h1>
              <h1>Total Sold Properties</h1>
            </div>
            <div className="bg-[#002172] text-white rounded-xl p-4">
              <HiHomeModern />
            </div>
          </div>
          <div className="flex bg-white shadow-md text-lg py-7 px-5 items-center justify-between gap-6 w-80 rounded-2xl">
            <div className="">
              <h1 className="font-bold">{Number(totalTransactions)}</h1>
              <h1>Total Transactions</h1>
            </div>
            <div className="bg-[#002172] text-white rounded-xl p-4">
              <FaMoneyCheckAlt />
            </div>
          </div>
          <div className="flex bg-white py-7 shadow-md  px-10 items-center justify-between gap-20 w-[880px] rounded-2xl">
            <div className="text-6xl">
              <FcHome />
            </div>
            <div className="text-lg">
              <h1 className="font-bold">INFORMATION</h1>
              <h1>
                This section offers a personalized viewing experience for
                property owners, providing access to exclusive listings and
                detailed insights tailored to your ownership status. Discover
                sold properties and market trends relevant to your portfolio.
                Contact us for a private consultation to explore your real
                estate opportunities further.
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[93%] mx-auto my-3  bg-white  px-6 py-5   shadow-lg rounded-lg">
          <div className="overflow-x-auto">
            <Tabs
              defaultIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className="ml-[2px]">
                <Tab>All Sold Properties</Tab>
                <Tab>Residential</Tab>
                <Tab>Commercial</Tab>
                <Tab>Apartment</Tab>
              </TabList>
              <TabPanel>
                <table className="table text-lg">
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
                        <td className="w-[19rem]">
                          <div className="flex gap-4 items-center w-auto">
                            <div>
                              <img
                                className="w-[100px] h-[75px] rounded"
                                src={item.property_img}
                                alt=""
                              />
                            </div>
                            <h2 className="w-36">{item.property_title}</h2>
                          </div>
                        </td>

                        <td>{item.paymentUser}</td>
                        <td>{item.price}</td>
                        <td>{item.date}</td>
                        <td className="text-[#e33226]">
                          {item.property_status}
                        </td>
                        <td>{item.transactionId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <div className="">
                  <div>
                    <table className="table text-lg">
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
                            <td className="w-[19rem]">
                              <div className="flex gap-4 items-center w-auto">
                                <div>
                                  <img
                                    className="w-[100px] h-[75px] rounded"
                                    src={property.property_img}
                                    alt=""
                                  />
                                </div>
                                <h2 className="w-36">
                                  {property.property_title}
                                </h2>
                              </div>
                            </td>
                            <td>{property.paymentUser}</td>
                            <td>{property.price}</td>
                            <td>{property.date}</td>
                            <td className="text-[#e33226]">
                              {property.property_status}
                            </td>
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
                  <div>
                    <table className="table text-lg">
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
                            <td className="w-[19rem]">
                              <div className="flex gap-4 items-center w-auto">
                                <div>
                                  <img
                                    className="w-[100px] h-[75px] rounded"
                                    src={property.property_img}
                                    alt=""
                                  />
                                </div>
                                <h2 className="w-36">
                                  {property.property_title}
                                </h2>
                              </div>
                            </td>
                            <td>{property.paymentUser}</td>
                            <td>{property.price}</td>
                            <td>{property.date}</td>
                            <td className="text-[#e33226]">
                              {property.property_status}
                            </td>
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
                  <div>
                    <table className="table text-lg">
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
                            <td className="w-[19rem]">
                              <div className="flex gap-4 items-center w-auto">
                                <div>
                                  <img
                                    className="w-[100px] h-[75px] rounded"
                                    src={property.property_img}
                                    alt=""
                                  />
                                </div>
                                <h2 className="w-36">
                                  {property.property_title}
                                </h2>
                              </div>
                            </td>
                            <td>{property.paymentUser}</td>
                            <td>{property.price}</td>
                            <td>{property.date}</td>
                            <td className="text-[#e33226]">
                              {property.property_status}
                            </td>
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
      </section>
    </>
  );
};

export default SoldProperties;
