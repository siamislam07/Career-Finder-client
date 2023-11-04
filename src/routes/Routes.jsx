import { createBrowserRouter } from "react-router-dom"
import Home from "../Home"
import Login from "../page/Login"
import Register from "../page/Register"
import MainHome from "../page/MainHome"
import Blogs from "../page/Blogs"

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path:'/',
                element:<MainHome></MainHome>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path:'register',
                element:<Register />
            },
            {
                path:'blogs',
                element:<Blogs></Blogs>
            }

        ]
    }
])

export default Routes