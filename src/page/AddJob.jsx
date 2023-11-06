import { useState } from "react";
import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter"
import { DatePicker } from 'antd';

const {RangePicker} = DatePicker

const AddJob = () => {

    const [date, setDate ] = useState([])






    return (
        <ContentCenter>
            <div className="p-24    shadow-2xl mt-10">
                <h1 className="text-3xl font-extrabold">Publish Your Jobs</h1>
                <form >
                    {/* form name and brandName row */}
                    <div className="md:flex gap-5 mb-5 ">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="name"placeholder="Job Title" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <select required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="category" >
                                    <option  value=""  hidden>Job Category</option>
                                    <option className="dark:bg-transparent" value="On Site">On Site</option>
                                    <option value="Samsung">Remote</option>
                                    <option value="Sony">Part-Time</option>
                                    <option value="Apple">Hybrid</option>

                                </select>
                                
                            </label>
                        </div>
                    </div>
                    {/* category and type  row */}
                    <div className="md:flex gap-5 mb-5">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                            <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="name"placeholder="Job Salary" />
                                
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                
                                <RangePicker
                                onChange={date}
                                className="w-full px-4  py-2 " />
                            </label>
                        </div>
                    </div>

                    {/* price and description row */}
                    <div className="md:flex gap-5 mb-5">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="number" name="price" placeholder="Job Applicants by Default zero" />
                                
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="description" placeholder="Description"/>
                                
                            </label>
                        </div>
                    </div>
                    {/* rating photo url row */}
                    <div className="md:flex gap-5 mb-5">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="name" placeholder="Your Name"  />
                                
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="url" name="url" placeholder="Banner Url"/>
                                
                            </label>
                        </div>
                    </div>


                    <div className="md:flex gap-5 mb-5">

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="text" name="name" placeholder="Salary Range $"  />
                                
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className=" mt-5">
                                <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded  duration-200 peer focus:border-indigo-600 focus:ring-1" type="url" name="url" placeholder="Profile pic Url"/>
                                
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="bg-gradient-to-r  from-violet-600 to-indigo-600 text-white font-semibold rounded-xl py-2 mt-5 shadow-lg hover:scale-105 duration-300 w-full">Publish</button>
                </form>

            </div>
        </ContentCenter>
    );
};

export default AddJob;