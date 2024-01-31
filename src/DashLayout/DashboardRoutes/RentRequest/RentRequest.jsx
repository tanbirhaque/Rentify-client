//this code by konika
import useOwnerRent from "../../../Hooks/useOwnerRent";
import RentRequestCard from "./RentRequestCard";

const RentRequest = () => {
    const [ownerRent,refetch] = useOwnerRent()
    console.log(ownerRent);
    return (
        <><div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    
                    <th>Property Info.</th>
                    <th>Requester Name</th>
                    <th>Requester E-mail</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                ownerRent.map(item => (

                    <RentRequestCard key={item._id} refetch={refetch} items={item}></RentRequestCard>
                ))
            }

            </tbody>


        </table>
    </div>

            
        </>
    );
};

export default RentRequest;