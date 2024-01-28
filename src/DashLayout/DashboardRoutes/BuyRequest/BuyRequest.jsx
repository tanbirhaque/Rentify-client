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
                    <BuyReqCard key={item._id} items={item}></BuyReqCard>
                ))
            }
        </>
    );
};

export default BuyRequest;