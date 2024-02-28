import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllUser = () => {
    const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            // when data import from database then chage the url & use axios public 
            const res = await axiosPublic.get(`/users`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [users, refetch]
};

export default useAllUser;