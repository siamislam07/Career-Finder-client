import { createBrowserRouter } from "react-router-dom"
import Home from "../Home"
import Login from "../page/Login"
import Register from "../page/Register"
import MainHome from "../page/MainHome"
import Blogs from "../page/Blogs"
import AddJob from "../page/addjob"
import MyJobs from "../page/MyJobs/MyJobs"
import AppliedJobs from "../page/AppliedJobs/AppliedJobs"

import ErrorPage from "../components/ErrorPage"
import PrivateRoute from "./PrivateRoute"
import AllJobs from "../page/AllJobs/AllJobs"
import Details from "../page/Details"
import Update from "../page/Update"

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'addjob',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: 'myjobs',
                element: <PrivateRoute><MyJobs /></PrivateRoute>
            },
            {
                path: 'update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://server-nine-red.vercel.app/api/homeCards/${params.id}`)
            },
            {
                path: 'appliedjobs',
                element: <PrivateRoute><AppliedJobs /></PrivateRoute>
            },
            {
                path: 'alljobs',
                element: <AllJobs />
            },
            {
                path: 'details/:id',
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-nine-red.vercel.app/api/homeCards/${params.id}`)
            }

        ]
    }
])

export default Routes