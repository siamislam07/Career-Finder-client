/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import logo from "../assets/icons/C.gif"
import { useLottie } from "lottie-react";
import underline from "../assets/animationJson/underline.json"
import { useEffect, useState } from "react";
import Modal from "./Modal";

const NavBar = ({ children }) => {
    //darkMode functions
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const handleChange = e => {
        if (e.target.checked) {
            setTheme("synthwave")
        }
        else {
            setTheme("cupcake")
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])
    //darkMode functions ends here

    // const phoneRef = useRef<LottieRefCurrentProps>(null);
    const options = {
        animationData: underline,
        loop: 2,

    };

    const { View } = useLottie(options);

    const navLinks = <>
        <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleChange} checked={theme === "cupcake" ? false : true} />

            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>
        <li><NavLink to="/" className='btn btn-outline btn-default pt-4 border-t-slate-800 border-b-red-800 border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-lg'>Home</NavLink></li>
        <Modal></Modal>
        <li><NavLink to="/Register" className="btn btn-outline btn-default pt-2 border-t-slate-800 border-b-amber-300 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-lg">Register</NavLink></li>
        <li><NavLink to="/blogs" className="btn btn-outline btn-default pt-2 border-t-slate-800 border-b-blue-800 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-lg">Blogs</NavLink></li>
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-transparent">
                    <div className="w-full max-w-[1200px] mx-auto px-[25px]">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 text-3xl font-bold flex items-center ">
                            <img src={logo} className="w-16" alt="logo" />
                            <div className="flex flex-col justify-center items-center relative">
                                <p className="bg-gradient-to-r from-slate-400 to-purple-600 bg-clip-text text-transparent  ">Career Finder </p>

                                <span className="absolute  top-4 hidden sm:block" >{View}</span>
                            </div>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-5">
                                {/* Navbar menu content here */}
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* Sidebar content here */}
                <SideBar></SideBar>
            </div>
        </div>
    );
};

export default NavBar;