import { useLoaderData } from "react-router-dom";
import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter";

const Details = () => {
    const details = useLoaderData()
    console.log(details);
    const { experienceLevel, BannerUrl, photoURL, title, salary, description, category,companyLocation } = details
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

                    
                    <button className="  font-semibold py-2 px-6 mt-6 block mx-auto hover:bg-violet-500-600 hover:shadow-md focus:outline-none btn btn-outline btn-default pt-2 border-t-slate-800 border-b-blue-800 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-lg">
                        Apply Now
                    </button>
                </div>

               
                <div>
                    
                    <img
                        src={BannerUrl}
                        alt="Job Banner"
                        className="w-full h-36 md:h-48 lg:h-64 object-cover rounded-lg"
                    />

                   
                    <p className="text-gray-700 mt-6">
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

        </ContentCenter>
    );
};

export default Details;