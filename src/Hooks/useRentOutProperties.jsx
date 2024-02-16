import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useRentOutProperties = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data: rentOutProperties = [], refetch } = useQuery({
        queryKey: ['rentOutProperties',user],
        queryFn: async () => {
            // when data import from database then change the url & use axios public 
            const res = await axiosPublic.get(`/rentOut?email=${user.email}`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [rentOutProperties, refetch]
};

export default useRentOutProperties;