import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCommentsReply = () => {
    const axiosPublic = useAxiosPublic();
    const { data: commentsReply = [], refetch } = useQuery({
        queryKey: ['commentsReply'],
        queryFn: async () => {
            // when data import from database then chage the url & use axios public 
            const res = await axiosPublic.get(`/commentsReply`)
            console.log(res.data)
            return res.data;
        }
    })
    return [commentsReply, refetch]
};

export default useCommentsReply;