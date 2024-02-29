import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useCurrentOwner = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: currentOwner = [], refetch } = useQuery({
        queryKey: ["currentOwner", user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/ownerRequest/${user.email}`);
            return res.data;
        },
    });
    return [currentOwner, refetch];
};

export default useCurrentOwner;