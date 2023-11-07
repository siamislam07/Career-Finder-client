

import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const ApplyModal = () => {

    const { user } = useAuth()

    const axios = useAxios()
    const url = ('/applied')

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target

        const name = form.name.value
        const email = form.email.value
        const resume = form.resume.value

        const data = { name, email, resume }
        console.log(data);
        axios.post(url, data)
            .then(data => {
                if (data.data.insertedId) {
                    toast.success('Jobs Applied Successfully ')
                    e.target.reset()
                }
            })


    }


    return (
        <div>
            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="  font-semibold py-2 px-6 mt-6 block mx-auto hover:bg-violet-500-600 hover:shadow-md focus:outline-none btn btn-outline btn-default pt-2 border-t-slate-800 border-b-blue-800 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-lg">
                Apply Now
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gradient-to-r from-slate-400 to-gray-600">

                    <div className="modal-action">
                        <form onSubmit={handleSubmit} method="dialog" className="w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">

                            <h2 className="text-4xl dark:text-white font-bold text-center">Fill Your Info</h2>

                            <div className="flex flex-col text-gray-400 py-2">
                                <label >Name</label>
                                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="name" defaultValue={user?.displayName} />
                            </div>

                            <div className="flex flex-col text-gray-400 py-2">
                                <label >E-mail</label>
                                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" name="email" defaultValue={user?.email} />
                            </div>

                            <div className="flex flex-col text-gray-400 py-2">
                                <label>Resume Link</label>
                                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="url" name="resume" />
                            </div>

                            

                            <button className="btn w-full text-xl my-5 py-2 bg-gradient-to-r from-orange-400 to-red-500 hover:shadow-orange-500/40 text-white font-semibold rounded-lg ">Apply</button>

                        </form>
                    </div>

                </div>

                <form method="dialog" className="modal-backdrop ">

                    <button>close</button>



                </form>

                {/* <div className="flex mt-2  justify-center items-center gap-10  relative">
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
                        </div> */}



            </dialog>
        </div>
    );
};

export default ApplyModal;