import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import useAuth from "../../hooks/useAuth";
import ContentCenter from "../../utilites/ContentCenter.jsx/ContentCenter";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import AppliedJobsRow from "./AppliedJobsRow";

const AppliedJobs = () => {

    const { user } = useAuth()


    // console.log(user.email);

    const [job, setjob] = useState([])

    const url = `https://server-nine-red.vercel.app/api/user?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setjob(data))

    }, [url])


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

                        </tr>
                    </thead>
                    <tbody >


                        {
                            job.map((jobs, index) => <AppliedJobsRow
                                key={jobs._id}
                                jobData={jobs}
                                index={index}


                            ></AppliedJobsRow>)
                        }



                    </tbody>
                </table>
            </div>


            <Footer />
        </ContentCenter>
    );
};

export default AppliedJobs;