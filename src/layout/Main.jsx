import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar>
                <Outlet></Outlet>
            </NavBar>
        </div>
    );
};

export default Main;