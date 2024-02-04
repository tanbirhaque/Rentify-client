import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBlogsComment = () => {
    const axiosPublic = useAxiosPublic();
    const { data: comments = [], refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            // when data import from database then chage the url & use axios public 
            const res = await axiosPublic(`/comments`)
            console.log(res.data)
            return res.data;
        }
    })
    return [comments, refetch]
};

export default useBlogsComment;