import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxiospublic";

const useProperty = () => {
    const axiospublic = useAxiospublic();
    const { data: propertys = [], refetch } = useQuery({
        queryKey: ['propertys'],
        queryFn: async () => {
            // when data import from database then chage the url & use axios public 
            const res = await axiospublic.get(`/property`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [propertys, refetch]
};

export default useProperty;