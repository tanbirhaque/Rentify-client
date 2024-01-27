import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRequested = () => {
  const axiosPublic = useAxiosPublic();
  const { data: requested = [], refetch } = useQuery({
    queryKey: ["requested"],
    queryFn: async () => {
      const res = await axiosPublic.get("/requested-properties");
      return res.data;
    },
  });
  return [requested, refetch];
};

export default useRequested;
