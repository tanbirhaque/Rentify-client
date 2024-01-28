import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useSaleRequest = () => {
    const { user } = useContext(AuthContext)
    const axiospublic = useAxiosPublic();
    const { data: salerequest = [], refetch } = useQuery({
        queryKey: ['salerequest'],
        queryFn: async () => {
            // when data import from database then chage the url & use axios public 
<<<<<<< HEAD
            const res = await axiospublic.get(`/requested-sale?requesteremail=${user.email}`)
=======
            const res = await axiospublic.get(`/requested-sale?email=${user.email}`)
>>>>>>> 4511bb260e27a76ad48d9474049db772e5873e68
            console.log(res.data)
            return res.data;
        }
    })
    return [salerequest, refetch]
};

export default useSaleRequest;