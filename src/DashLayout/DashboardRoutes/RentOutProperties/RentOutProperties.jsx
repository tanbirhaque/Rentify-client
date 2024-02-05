import React from 'react';
import useRentOutProperties from '../../../Hooks/useRentOutProperties';

const RentOutProperties = () => {
    const [rentOutProperties] = useRentOutProperties();
    console.log(rentOutProperties);

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="font-semibold text-lg text-[#002172]">
                        <tr>
                            <th>Renter-Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>transactionId</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {rentOutProperties.map((item, index) => (
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

export default RentOutProperties;
