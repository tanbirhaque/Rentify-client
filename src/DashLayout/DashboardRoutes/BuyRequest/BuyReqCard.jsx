//this code by konika
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const BuyReqCard = ({ items, refetch }) => {

    const { _id, property, requestStatus, requesterNumber, requesterEmail, requesterName } = items
    const axiosSecure = useAxiosSecure();

    const setAccept = (id,) => {
        axiosSecure.put(`/accept/${id}`)
            .then((res) => {
                console.log("hi", res);
                refetch()
                // updateRequestStatus(id, "Verify");
            })

            .catch((error) => console.error("Error updating verification status:", error));
    };
    const setReject = (id) => {
        axiosSecure.put(`/reject/${id}`)
            .then((res) => {
                console.log(res);
                refetch()
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
                <td>{requesterName} </td>
                <td>{requesterEmail}</td>
                <td>{requesterNumber}</td>
                <td>{requestStatus}</td>

                <td >
                    <div className="flex gap-2 items-center justify-center">
                        <div>
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
                                                    <button onClick={() => setAccept(_id)} className="btn text-white hover:bg-[#002172] bg-[#e33226]">Accept</button>
                                                </>
                                        }
                                    </>
                            }
                        </div>
                        <div>
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
                                                    <button onClick={() => setReject(_id)} className="btn text-white hover:bg-[#002172] bg-[#e33226] ">Reject</button>
                                                </>
                                        }
                                    </>
                            }
                        </div>
                    </div>
                </td>
                
            </tr>


        </>
    );
};

export default BuyReqCard;