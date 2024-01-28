import useOwnerRent from "../../../Hooks/useOwnerRent";
import RentRequestCard from "./RentRequestCard";

const RentRequest = () => {
<<<<<<< HEAD
    const [ownerRent]=useOwnerRent()
    console.log(ownerRent);
    return (
       <>
      
        {
                    ownerRent.map(item => (

                        <RentRequestCard key={item._id}></RentRequestCard>
                    ))
                }
       </>
=======
    const [ownerRent] = useOwnerRent()
    console.log(ownerRent);
    return (
        <>

            {
                ownerRent.map(item => (

                    <RentRequestCard key={item._id}></RentRequestCard>
                ))
            }
        </>
>>>>>>> main
    );
};

export default RentRequest;