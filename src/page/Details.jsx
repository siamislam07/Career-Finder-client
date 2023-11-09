import { useLoaderData } from "react-router-dom";
import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter";
import ApplyModal from "../components/ApplyModal";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";

const Details = () => {
    const { user } = useAuth()
    const details = useLoaderData();

    const { experienceLevel, BannerUrl, photoURL, title, salary, description, category, companyLocation } = details

    const currentDate = new Date();

    const applicationDeadline = new Date(details.dates[1]);

    const isDeadlinePassed = applicationDeadline < currentDate;


    const isOwner = user.email === details.email;

    return (
        <ContentCenter>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8 lg:p-12 md:mt-6">
                <div>

                    <img
                        src={photoURL}
                        alt="Company Logo"
                        className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full mx-auto"
                    />

                    <h1 className="text-3xl font-bold mt-6 text-center">{title}</h1>

                    <p className="text-lg font-semibold mt-4 text-center">${salary}</p>

                    <p className="text-lg mt-4 text-center">Number of Applicants: 50</p>

                    {!isOwner && !isDeadlinePassed && <ApplyModal details={details}/>}
                    {isOwner && <p className="text-center mt-5 text-red-500">Post owner cannot apply.</p>}
                    {isDeadlinePassed && <p className="text-center mt-5 text-red-500">Application deadline has passed.</p>}


                </div>


                <div>

                    <img
                        src={BannerUrl}
                        alt="Job Banner"
                        className="w-full h-36 md:h-48 lg:h-64 object-cover rounded-lg"
                    />

                    <p className=" mt-6">
                        {description}
                    </p>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold">Additional Information</h2>
                        <ul className="list-disc list-inside mt-2">
                            <li>Company Location: {companyLocation}</li>
                            <li>Job Type: {category}</li>
                            <li>Experience Level: {experienceLevel}</li>
                        </ul>
                    </div>
                </div>
            </div>


            <Footer />
        </ContentCenter>
    );
};

export default Details;