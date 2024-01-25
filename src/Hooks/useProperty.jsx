import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxiospublic";

const useProperty = () => {
  const axiosPublic = useAxiospublic();
  const { data: property = [], refetch } = useQuery({
    queryKey: ["property"],
    queryFn: async () => {
      const res = await axiosPublic.get("/property");
      return res.data;
    },
  });
  return [property, refetch];
};

export default useProperty;
