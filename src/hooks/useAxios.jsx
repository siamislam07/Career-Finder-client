import axios from "axios";

const instance = axios.create({
    baseURL: 'https://job-o8eovvphe-siams-projects-18d0f3fe.vercel.app/api',
    withCredentials: true
});

const useAxios = () => {
    return instance
};

export default useAxios;