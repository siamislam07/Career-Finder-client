import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const PrivateRoute = ({children}) => {
    const {isItLoading, user} = useAuth()
    const location = useLocation()
    console.log(location);
    if (isItLoading) {
        return <span className="loading loading-bars loading-lg mt-96 ml-[56rem]"></span>
    }

    if (user) {
        return children
    }

    return  <Navigate state={location.pathname} to='/login'> {toast.error('logged In First or Register')}</Navigate>
};

export default PrivateRoute;