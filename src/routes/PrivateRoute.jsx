import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

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

    return  <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;