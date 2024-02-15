// first import tanstact query
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useRecentAddProperties = () => {
    const axiosPublic = useAxiosPublic();
    const {user}=useContext(AuthContext)
    const { data:recentAddProperty = [], refetch } = useQuery({
        queryKey: ['recentAddProperty',user],
        queryFn: async () => {
            
            const res = await axiosPublic.get(`/recentAddProperties?email=${user.email}`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [recentAddProperty, refetch]
};

export default useRecentAddProperties;