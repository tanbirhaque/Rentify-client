
import useOwnerSale from "../../../Hooks/useOwnerSale";
import BuyReqCard from "./BuyReqCard";
const BuyRequest = () => {
    const [ownerSale, refetch] = useOwnerSale()
    
    console.log(ownerSale);
    return (
        <>
            <div className="overflow-x-auto">
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
                            ownerSale.map(item => (
                                <BuyReqCard key={item._id} items={item}></BuyReqCard>
                            ))
                        }

                    </tbody>


                </table>
            </div>

        </>
    );
};

export default BuyRequest;