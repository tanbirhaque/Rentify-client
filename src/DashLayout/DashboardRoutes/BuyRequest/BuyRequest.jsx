import React from 'react';
import useOwnerSale from "../../../Hooks/useOwnerSale";
import BuyReqCard from "./BuyReqCard";
const BuyRequest = () => {
    const [ownerSale]=useOwnerSale()
    console.log(ownerSale);
    return (
        <>
        {
                ownerSale.map(item => ( 
<<<<<<< HEAD
                    <BuyReqCard key={item._id} item={item}></BuyReqCard>
=======
                    <BuyReqCard key={item._id} items={item}></BuyReqCard>
>>>>>>> main
                ))
            }
        </>
    );
};

export default BuyRequest;