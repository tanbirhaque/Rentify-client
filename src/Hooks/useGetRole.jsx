//component added by "Fahima"

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useGetRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userRole = [], refetch } = useQuery({
    queryKey: ["userRole", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return [userRole, refetch];
};

export default useGetRole;
