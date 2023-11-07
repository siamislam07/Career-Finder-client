import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Modal = () => {
    const handleClicked = () => {
        console.log('clicked');
    }
    return (
        <div>
            <button className="btn btn-outline btn-default  border-t-slate-800 border-b-amber-600 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-lg " onClick={() => document.getElementById('my_modal_5').showModal()}>Login</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gradient-to-r from-slate-400 to-gray-600">


                    <div className="modal-action flex flex-col ">
                        {/* <form method="dialog"> */}
                        {/* if there is a button in form, it will close the modal */}
                        {/* <button className="btn">Close</button> */}
                        {/* </form> */}
                        <form method="dialog" className=" w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h2 className="text-4xl dark:text-white font-bold text-center">LOG IN</h2>
                            <div className="flex flex-col text-gray-400 py-2">
                                <label >E-mail</label>
                                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" name="email" id="" />
                            </div>
                            <div className="flex flex-col text-gray-400 py-2">
                                <label>Password</label>
                                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" name="password" id="" />
                            </div>


                            <div className="flex justify-between text-gray-400 py-2">
                                <p className="flex items-center"><input className="mr-2" type="checkbox" id="" />Remember Me</p>
                            </div>
                            <button onClick={handleClicked} className="w-full text-xl my-5 py-2 bg-gradient-to-r from-orange-400 to-red-500 hover:shadow-orange-500/40 text-white font-semibold rounded-lg ">Log In</button>
                            <p className="text-gray-400">Don't Have an Account <button onClick={() => document.getElementById('my_modal_6').showModal()} className="underline text-slate-300">Register</button></p>
                            
                        </form>

                        <div className="flex mt-2  justify-center items-center gap-10  relative">
                            <div>
                                <button className="btn ring-4 p-3 w-full btn-square btn-outline border-blue-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                    <FcGoogle className="text-2xl" />
                                </button>
                            </div>
                            <div>
                                <button className="btn ring-4 p-3 w-full btn-square btn-outline  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                    <BsGithub className="text-2xl" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </dialog>









            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gradient-to-r from-slate-400 to-gray-600">


                    <div className="modal-action flex flex-col">

                        <form method="dialog" className=" w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h2 className="text-4xl dark:text-white font-bold text-center">Register</h2>
                            <div className="flex flex-col text-gray-400 py-2">
                                <label >Name</label>
                                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="name" id="" />
                            </div>
                            <div className="flex flex-col text-gray-400 py-2">
                                <label >E-mail</label>
                                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" name="email" id="" />
                            </div>
                            <div className="flex flex-col text-gray-400 py-2">
                                <label>PhotoUrl</label>
                                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="url" name="url" id="" />
                            </div>

                            <button className="w-full text-xl my-5 py-2 bg-gradient-to-r from-orange-400 to-red-500 hover:shadow-orange-500/40 text-white font-semibold rounded-lg ">Register</button>
                            <p className="text-gray-400">Already Have an Account <button onClick={() => document.getElementById('my_modal_5').showModal()} className="border border-t-transparent border-r-transparent border-l-transparent border-b-orange-900 text-slate-300">Login</button></p>
                            {/* <p className="text-center text-2xl text-gray-400 font-light py-2">----or----</p> */}
                        </form>

                        <div className="flex mt-2  justify-center items-center gap-10  relative">
                            <div>
                                <button className="btn ring-4 p-3 w-full btn-square btn-outline border-blue-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                    <FcGoogle className="text-2xl" />
                                </button>
                            </div>
                            <div>
                                <button className="btn ring-4 p-3 w-full btn-square btn-outline  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                    <BsGithub className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;