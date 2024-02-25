import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import ContentCenter from "../../utilites/ContentCenter.jsx/ContentCenter";
import JobsRow from "./JobsRow";
import Footer from "../../components/Footer";
import axios from "axios";



const AllJobs = () => {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    console.log(data);

    // const axios = useAxios()
    // const apiUrl = ('/homeCards')

    useEffect(() => {


        axios.get('https://job-fawn.vercel.app/api/homeCards',{
            withCredentials: true
        })
            .then(res => {
                setData(res.data)

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, [])

    const [SearchQuery, setSearchQuery] = useState('')

    const handleSearch = (e) => {
        setSearchQuery(e)
        setSearchTerm(e)
    }

    const filteredData = data
        .filter((card) => {
            const lowerCaseTitle = card.title.toLowerCase();
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            return lowerCaseTitle.includes(lowerCaseSearchTerm);
        })
        .map((card) => ({ ...card,  }));


    return (
        <ContentCenter>
            <div className=" mt-10 flex justify-end">
                <input
                    value={SearchQuery}
                    onChange={(e) => handleSearch(e.target.value)}

                    type="text" placeholder="Search With Job Title" className="input input-bordered input-warning w-full max-w-xs" />
            </div>
            <div className="overflow-x-auto mt-14  md:mb-72 ">
                <table className="table text-xl font-serif">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th></th>
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary Range</th>
                        </tr>
                    </thead>
                    <tbody >


                        {/* {
                            data.map((job, index) => <JobsRow
                                key={job._id}
                                jobs={job}
                                index={index}
                            ></JobsRow>)
                        } */}

                        {filteredData.map((job, index) => (
                            <JobsRow
                                key={job._id}
                                jobs={job}
                                
                                index={index}
                            />
                        ))}


                    </tbody>
                </table>
            </div>

            <Footer />
        </ContentCenter>
    );
};

export default AllJobs;