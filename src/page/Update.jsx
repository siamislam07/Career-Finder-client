import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter";
import { useState } from "react";
import { DatePicker } from 'antd';
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import axios from "axios";
const { RangePicker } = DatePicker

const Update = () => {
    const { user } = useAuth()
    const [dates, setDates] = useState([])
    
    const data = useLoaderData()
    const { _id, title, photoURL, email, category, salary,   description, applicants, name, BannerUrl, experienceLevel, companyLocation } = data

    console.log(data);


    const handleSubmit = (e) => {

        e.preventDefault()


        const form = e.target

        const title = form.title.value
        const category = form.category.value
        const salary = form.salary.value
        const description = form.description.value
        const name = form.name.value
        const BannerUrl = form.BannerUrl.value
        const applicants = form.applicants.value
        const photoURL = user?.photoURL
        const email = user?.email
        const experienceLevel = form.experienceLevel.value
        const companyLocation = form.CompanyLocation.value

        const UpdateData = { title, photoURL, email, category, salary, dates, description, applicants, name, BannerUrl, experienceLevel, companyLocation };
        console.log(UpdateData);

        axios.put(`https://job-o8eovvphe-siams-projects-18d0f3fe.vercel.app/api/homeCards/${_id}`, UpdateData,{
            withCredentials: true
        })
            .then(data => {
                console.log(data);
                if (data.status === 200) {
                    toast.success('Jobs Update Successfully ')
                }
            })
            .catch(error=>{
                console.log(error);
                if (data.status !== 200) {
                    toast.error('Server busy ')
                }
            })
    }

    return (
        <ContentCenter>
            <div className="p-24    shadow-2xl mt-10">
                <h1 className="text-3xl font-extrabold">Update Your Jobs Circular</h1>
                <form onSubmit={handleSubmit}>
                    {/* form name and brandName row */}
                    <div className="md:flex gap-5 mb-5 ">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">

                                <input defaultValue={title} required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="title" placeholder="Job Title" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <select defaultValue={category} required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="category" >
                                    <option value="" hidden>Job Category</option>
                                    <option className="dark:bg-transparent" value="On Site">On Site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Hybrid">Hybrid</option>

                                </select>

                            </label>
                        </div>
                    </div>
                    {/* category and type  row */}
                    <div className="md:flex gap-5 mb-5">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input defaultValue={salary} required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="salary" placeholder="Job Salary $" />

                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label required className=" mt-5">

                                <RangePicker
                                
                                    onChange={(dates) => {
                                        if (dates && dates.length === 2) {
                                            const [startDate, endDate] = dates.map(date => date.format("MM-DD-YYYY"));
                                            setDates([startDate, endDate]);
                                        } else {
                                            setDates([]);
                                        }
                                    }}
                                    className="w-full px-4  py-2 " />
                            </label>
                        </div>
                    </div>

                    {/* price and description row */}
                    <div className="md:flex gap-5 mb-5">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input defaultValue={applicants} required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="number" name="applicants" placeholder="Job Applicants by Default zero" />

                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input defaultValue={description} required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="description" placeholder="Job Description" />

                            </label>
                        </div>
                    </div>
                    {/* rating photo url row */}
                    <div className="md:flex gap-5 mb-5">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input defaultValue={name} required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="name" placeholder="Your Name" />

                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input defaultValue={BannerUrl} required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="url" name="BannerUrl" placeholder="Banner Url" />
 
                            </label>
                        </div>
                    </div>


                    <div className="md:flex gap-5 mb-5">



                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input defaultValue={companyLocation} required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="CompanyLocation" placeholder="CompanyLocation" />

                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <select defaultValue={experienceLevel} required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="experienceLevel" >
                                    <option value="" hidden>Experience Level</option>
                                    <option className="dark:bg-transparent" value="On Site">Entry Level</option>
                                    <option value="Remote">Junior</option>
                                    <option value="Part-Time">Mid-Level</option>
                                    <option value="Hybrid">Senior</option>

                                </select>

                            </label>
                        </div>
                    </div>
                    <button type="submit" className="bg-gradient-to-r  from-violet-600 to-indigo-600 text-white font-semibold rounded-xl py-2 mt-5 shadow-lg hover:scale-105 duration-300 w-full">Publish</button>
                </form>

            </div>
            <Footer />
        </ContentCenter>
    );
};

export default Update;