import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const RentRequestCard = ({ items }) => {
    const { _id,property, requestStatus, requesterNumber, requesterEmail,  requesterName } = items
    const axiosSecure = useAxiosSecure();

    const setAccept = (id) => {
        axiosSecure.put(`/accept/${id}`)
            .then((res) => {
                console.log(res);
                // updateRequestStatus(id, "Verify");
            })
            .catch((error) => console.error("Error updating verification status:", error));
    };
    const setReject = (id) => {
        axiosSecure.put(`/reject/${id}`)
            .then((res) => {
                console.log(res);
                // updateRequestStatus(id, "Rejected");
            })
            .catch((error) => console.error("Error updating verification status:", error));
    };
      
    return (
        <>
            <tr>

                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-20 h-20">
                                <img src={property.property_img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{property.property_title}</div>
                            <div className="text-sm opacity-50">{property.property_category}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        <div className="font-bold">{requesterName}</div>

                        <div className="text-sm opacity-50">{requesterNumber}</div>
                    </div>
                </td>
                <td>{requesterEmail}</td>
                <td>{requestStatus}</td>
                {/* <th>
                    <button onClick={() => setVerify(_id)}  className="btn btn-ghost btn-xs">Accpet</button>
                    <button onClick={() => setReject(_id)} className="btn btn-ghost btn-xs">Reject</button>
                </th> */}
               <td>
                                    {
                                        requestStatus === 'accepted' ?
                                            <>
                                                {requestStatus}
                                            </>
                                            :
                                            <>
                                                {
                                                    requestStatus === 'rejected' ?
                                                        <>{requestStatus}</>
                                                        :
                                                        <>
                                                            <button  onClick={() => setAccept(_id)} className="btn-one">Accept</button>
                                                        </>
                                                }
                                            </>
                                    }
                                </td>
                                <td>
                                    {
                                        requestStatus === 'accepted' ?
                                            <>
                                                {requestStatus}
                                            </>
                                            :
                                            <>
                                                {
                                                    requestStatus === 'rejected' ?
                                                        <>{requestStatus}</>
                                                        :
                                                        <>
                                                            <button onClick={() => setReject(_id)} className="btn-one">Reject</button>
                                                        </>
                                                }
                                            </>
                                    }

                                </td>
            </tr>
          
        </>
    );
};

export default RentRequestCard;