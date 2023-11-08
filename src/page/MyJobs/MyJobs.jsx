import { useEffect, useState } from "react";
import ContentCenter from "../../utilites/ContentCenter.jsx/ContentCenter";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Footer from "../../components/Footer";
import UserJobsRow from "./UserJobsRow";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyJobs = () => {
    const { user } = useAuth()

    const [data, setData] = useState([])

    console.log(data);
    console.log(user);

    const axios = useAxios()
    const apiUrl = (`/user?email=${user?.email}`)
    // const deleteUrl = (`/homeCards/${id}`)

    useEffect(() => {


        axios.get(apiUrl)
            .then(res => {
                setData(res.data)

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, [apiUrl, axios])

    const handleDelete = id => {
        const proceed = Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your Job Circular has been deleted',
                    'success'
                )
                if (proceed) {
                    fetch(`https://server-nine-red.vercel.app/api/homeCards/${id}`, {
                        method: 'DELETE'
                    })

                        .then(res => res.json())
                        .then(res => {
                            console.log(data);
                            if (res.deletedCount > 0) {
                                
                                const remaining = data.filter(job => job._id != id)
                                setData(remaining)
                            }
                        })
                }
            }
        })

    }

    const handleUpdate = id =>{
            
    }


    return (
        <ContentCenter>
            <div className="overflow-x-auto mt-14 ">
                <table className="table text-xl font-serif">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>No</th>
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary Range</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >


                        {data.length === 0 ?(
                            <p>You haven't Add Any Job Post</p>
                        ):
                            data.map((job, index) => <UserJobsRow
                                key={job._id}
                                jobData={job}
                                index={index}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></UserJobsRow>)
                        }



                    </tbody>
                </table>
            </div>


            <Footer />
        </ContentCenter>
    );
};

export default MyJobs;