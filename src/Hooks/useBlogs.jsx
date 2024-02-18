// first import tanstact query
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBlogs = () => {
    const axiosPublic = useAxiosPublic();
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            // when data import from database then chage the url & use axios public 
            const res = await axiosPublic(`/blogs`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [blogs, refetch]
};

export default useBlogs;