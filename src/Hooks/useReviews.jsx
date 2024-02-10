import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";


const useReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", reviews],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews`);
      return res.data;
    },
  });
  return [reviews, refetch];
};

export default useReviews;
