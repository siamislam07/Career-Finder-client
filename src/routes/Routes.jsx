import { createBrowserRouter } from "react-router-dom"
import Home from "../Home"
import Login from "../page/Login"
import Register from "../page/Register"
import MainHome from "../page/MainHome"
import Blogs from "../page/Blogs"
import AddJob from "../page/addjob"
import MyJobs from "../page/MyJobs"
import AppliedJobs from "../page/AppliedJobs"
import AllJobs from "../page/AllJobs"

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
            },
            {
                path:'addjob',
                element:<AddJob />
            },
            {
                path:'myjobs',
                element:<MyJobs />
            },
            {
                path:'appliedjobs',
                element:<AppliedJobs />
            },
            {
                path:'alljobs',
                element:<AllJobs />
            },

        ]
    }
])

export default Routes