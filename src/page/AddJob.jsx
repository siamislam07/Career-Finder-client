import { useState } from "react";
import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter"
import { DatePicker } from 'antd';
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import Footer from "../components/Footer";

const { RangePicker } = DatePicker

const AddJob = () => {

    const {user} = useAuth()
    // console.log('from add jobs',user.photoURL);

    const [dates, setDates] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        

        const form = e.target

        const title = form.title.value
        const category= form.category.value
        const salary = form.salary.value
        const description = form.description.value
        const name = form.name.value
        const BannerUrl = form.BannerUrl.value
        const applicants = form.applicants.value
        const photoURL = user?.photoURL
        const experienceLevel = form.experienceLevel.value
        const companyLocation = form.CompanyLocation.value

        const data = {title, photoURL ,category,salary, dates, description,applicants,  name,  BannerUrl,experienceLevel, companyLocation};
        console.log(data);

        axios.post('http://localhost:5000/api/homeCards', data)
        .then(data=>{
            if (data.data.insertedId) {
                toast.success('Jobs Published Successfully ')
            }
        })
    }




    return (
        <ContentCenter>
            <div className="p-24    shadow-2xl mt-10">
                <h1 className="text-3xl font-extrabold">Publish Your Jobs</h1>
                <form onSubmit={handleSubmit}>
                    {/* form name and brandName row */}
                    <div className="md:flex gap-5 mb-5 ">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">

                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="title" placeholder="Job Title" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <select required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="category" >
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
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="salary" placeholder="Job Salary $" />

                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">

                                <RangePicker
                                    onChange={(dates) => {
                                        if (dates && dates.length === 2) {
                                            const [startDate, endDate] = dates.map(date => date.format("DD-MM-YYYY"));
                                            setDates([startDate, endDate]);
                                        } else {
                                            setDates([]);
                                        }
                                    }}
                                    className= "w-full px-4  py-2 " />
                            </label>
                        </div>
                    </div>

                    {/* price and description row */}
                    <div className="md:flex gap-5 mb-5">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="number" name="applicants" placeholder="Job Applicants by Default zero" />

                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="description" placeholder="Job Description" />

                            </label>
                        </div>
                    </div>
                    {/* rating photo url row */}
                    <div className="md:flex gap-5 mb-5">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="name" placeholder="Your Name" />

                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="url" name="BannerUrl" placeholder="Banner Url" />

                            </label>
                        </div>
                    </div>


                    <div className="md:flex gap-5 mb-5">

                    

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="CompanyLocation" placeholder="CompanyLocation" />

                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <select required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="experienceLevel" >
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

export default AddJob;