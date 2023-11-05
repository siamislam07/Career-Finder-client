import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter";
import img from "../assets/animationJson/register.json"
import googles from "../assets/animationJson/google.gif"
import github from "../assets/animationJson/github.gif"
import icon from "../assets/animationJson/loginicon.gif"

import { useLottie } from "lottie-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";


const Register = () => {

    const options = {
        animationData: img,

        loop: true,
    };
    const { View } = useLottie(options);

    // user creating and other thinks

    const { createUser, googleLogIn, githubLogIn } = useAuth()

    

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    


    const handleRegister = e => {
        e.preventDefault()
        console.log('click');

        if (password.length < 6) {
            // setError('Password should be at least 6 characters or longer')
            toast.error('Password should be at least 6 characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password should have at least one upper case')
            return
        }
        else if (!/[^a-zA-Z0-9._-]/.test(password)) {
            toast.error('Password should have at least one special character')
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset()
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
                e.target.reset()
            })
            
    }

    const handleGithubLogIn =()=>{
        githubLogIn()
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
            toast.error(error.message)
        })
    }

    const handleGoogleLogIn = ()=>{
        googleLogIn()
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
            toast.error(error.message)
        })
    }


    return (
        <ContentCenter>
            <div className="flex items-center mt-10 justify-center min-h-[700px] bg-slate-50 dark:bg-transparent  ">

                <div className="flex flex-row-reverse gap-4 bg-gray-100 rounded-2xl shadow-lg dark:bg-transparent dark:shadow-2xl">
                    {/* form section */}
                    <div className="sm:w-1/2 px-16 mb-5">
                        <div className="flex ">
                            <h2 className="font-bold text-3xl mt-5">Register</h2>
                            <img className="w-20 dark:text-white" src={icon} alt="" />
                        </div>
                        {/* <p className="text-sm mt-4">By creating an account or signing in, you understand and agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies.</p> */}

                        <form className="flex flex-col gap-2" onSubmit={handleRegister}>
                            <input className="p-2 ring-1 duration-300 ring-violet-600 mt-8 rounded-xl border hover:shadow-lg" type="text" name="name" placeholder="Your name" onBlur={e => setName(e.target.value)} />
                            <input className="p-2 ring-1 duration-300 ring-violet-600 mt-8 rounded-xl border hover:shadow-lg" type="email" name="email" placeholder="E-mail" onBlur={e => setEmail(e.target.value)} />
                            <input className="p-2 ring-1 duration-300 ring-violet-500 mt-7 rounded-xl border hover:shadow-lg" type="password" name="password" placeholder="Password" onBlur={e => setPassword(e.target.value)} />
                            <button type="submit" className="bg-gradient-to-r  from-violet-600 to-indigo-600 text-white font-semibold rounded-xl py-2 mt-5 shadow-lg hover:scale-105 duration-300">Login</button>
                        </form>
                        
                        <div className="mt-10  grid grid-cols-3 items-center text-gray-500 ">
                            <hr className="border-gray-500" />
                            <p className="text-center">OR</p>
                            <hr className="border-gray-500" />
                        </div>

                        <button  onClick={handleGoogleLogIn} className="bg-white shadow-lg hover:scale-105 duration-300 border bg-gradient-to-r from-purple-300 to-indigo-400  w-full rounded-xl mt-5 flex justify-center items-center text-sm">
                            {/* <span className="">{Views}</span>  */}
                            <img className="w-10 " src={googles} alt="" />
                            Continue With Google</button>

                        <button onClick={handleGithubLogIn} className="bg-white mb-7 shadow-lg hover:scale-105 duration-300 border bg-gradient-to-r from-purple-300 to-indigo-400 w-full rounded-xl mt-5 flex justify-center items-center text-sm">
                            {/* <span className="">{Views}</span>  */}
                            <img className="w-10 " src={github} alt="" />
                            Continue With Github
                        </button>

                        <div>
                            <p className="border-t py-4 border-gray-400">Don't have an Account?<Link to='/register'><span className="underline text-slate-600 ">Register</span></Link></p>
                        </div>
                    </div>

                    {/* logo section */}
                    <div className="w-1/2 ml-24  mt-56 hidden sm:block">
                        <span className="mt-5"  >{View}</span>
                    </div>
                </div>
            </div>
        </ContentCenter>
    );
};

export default Register;