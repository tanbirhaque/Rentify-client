import React from 'react';
import useSoldProperties from '../../../Hooks/useSoldProperties';

const SoldProperties = () => {
    const [soldOutProperties] =useSoldProperties()
    return (
        <>
         <div className="overflow-x-auto">
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