//this code by konika
import useOwnerSale from "../../../Hooks/useOwnerSale";
import BuyReqCard from "./BuyReqCard";
const BuyRequest = () => {
    const [ownerSale, refetch] = useOwnerSale()
    
    console.log(ownerSale);
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="font-semibold text-lg text-[#002172]">
                        <tr >
                            
                            <th>Property Info.</th>
                            <th>Requester Name</th>
                            <th>Requester E-mail</th>
                            <th>Requester Number</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ownerSale.map(item => (
                                <BuyReqCard key={item._id} refetch={refetch} items={item}></BuyReqCard>
                            ))
                        }

                    </tbody>


                </table>
            </div>

        </>
    );
};

export default BuyRequest;