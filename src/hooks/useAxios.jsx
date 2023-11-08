import axios from "axios";

const instance = axios.create({
    baseURL: 'https://server-nine-red.vercel.app/api',
    withCredentials: true
});

const useAxios = () => {
    return instance
};

export default useAxios;