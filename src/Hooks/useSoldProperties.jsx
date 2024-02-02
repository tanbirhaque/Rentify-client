import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useSoldProperties = () => {
    const { user } = useContext(AuthContext)
    const axiospublic = useAxiosPublic();
    const { data: soldOutProperties = [], refetch } = useQuery({
        queryKey: ['soldOutProperties',user],
        queryFn: async () => {
            // when data import from database then change the url & use axios public 
            const res = await axiospublic.get(`/soldOut?email=${user.email}`)
            console.log(res.data)
            return res.data;
        }
    })
    return [soldOutProperties, refetch]
};

export default useSoldProperties;