import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {isItLoading, user} = useAuth()

    if (isItLoading) {
        return <span className="loading loading-bars loading-lg mt-96 ml-[56rem]"></span>
    }

    if (!user?.email) {
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;