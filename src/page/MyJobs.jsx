import { useEffect, useState } from "react";
import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Footer from "../components/Footer";

const MyJobs = () => {
    const {user} = useAuth()
    const [data, setData] = useState([])

    console.log(data);
    console.log(user);

    const axios = useAxios()
    const apiUrl = ('/homeCards')

    useEffect(() => {


        axios.get(apiUrl)
            .then(res => {
                setData(res.data)

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, [apiUrl, axios])


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


                        <tr  >
                            <th>1</th>
                            <td>ooo</td>
                            <td>ooo</td>
                            <td>ooo</td>
                            <td>ooo</td>
                            <td>ooo</td>
                            <td>
                                <span className="badge border-red-200 mr-1">Delete</span>
                                <span className="badge border-red-200 ">Update</span>
                            </td>
                        </tr>



                    </tbody>
                </table>
            </div>


            <Footer />
        </ContentCenter>
    );
};

export default MyJobs;