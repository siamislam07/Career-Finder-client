/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeCard = ({ data, isMatching }) => {

    const cardStyles = {
        border: !isMatching ? '' : '2px solid', // Default border style for all cards
        boxShadow: !isMatching ? 'none' : '0px 0px 101px 4px rgba(62, 90, 173, 0.69)', // Box shadow with glow effect for matching cards
        opacity: !isMatching ? 0.6 : 1,
        transition: 'box-shadow 0.5s ease-in-out, opacity 0.5s ease-in-out', // Transition effect for the box shadow
    };

    // console.log(data);

    return (
        <div className='border  h-[29rem] flex flex-col mx-auto rounded-md' style={cardStyles}>
            <div className='p-2 flex-grow'>
                <div className="avatar items-center rounded-l-3xl  mb-3 flex flex-col">
                    <div className="w-16   rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={data?.photoURL} />
                    </div>
                    <p className='text-xl  p-1'>{data?.name} </p>
                </div>
                <div className='space-y-5 mt-6 flex-grow'>
                    <div className="flex justify-between">
                        <p className='text-xl flex '>Title : </p>
                        <span className=" text-xl font-bold  justify-end">{data?.title}</span>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-xl '>Posting Date : </p>
                        <span className="text-xl font-bold">{data?.dates?.[0]}</span>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-xl '>Application Deadline :</p>
                        <span className="text-xl font-bold">{data?.dates?.[1]}</span>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-xl '>Salary Range :</p>
                        <span className="text-xl font-bold">{data?.salary}</span>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-xl '>Job Applicants Number :</p>
                        <span className="text-xl font-bold">{data?.applicants}</span>
                    </div>
                </div>
            </div>
            <div className=' flex mb-2'>
                <Link className="w-full" to={`/details/${data._id}`}>
                    <button className='font-semibold py-2 px-6 mt-6 block mx-auto border-r-0 border-l-0 hover:bg-violet-500-600 hover:shadow-md focus:outline-none btn btn-outline btn-default pt-2 border-t-slate-800 border-b-blue-800 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full rounded-none '>Details</button>
                    </Link>
            </div>
        </div>
    );
};

export default HomeCard;