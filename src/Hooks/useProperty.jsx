import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProperty = () => {
  const axiosPublic = useAxiosPublic();
  const { data: properties = [], refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosPublic.get("/property");
      return res.data;
    },
  });
  return [properties, refetch];
};

export default useProperty;
