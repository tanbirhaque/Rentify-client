import { useQuery } from "@tanstack/react-query";

const useBlogs = () => {
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await fetch(`/Blogs.json`)
            console.log(res.data)
            return res.data;
        }
    })
    return [blogs, refetch]
};

export default useBlogs;