import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const useGetRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userRole = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return [userRole, refetch];
};

export default useGetRole;
