import axios from "axios";

const useAxiospublic = () => {
    const axiospublic = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return axiospublic;
};

export default useAxiospublic;