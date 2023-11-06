/* eslint-disable react/prop-types */

const HomeCard = ({data}) => {

    
    return (
        <div className='border w-96 h-96 flex flex-col '>
            <div className='p-2 flex-grow'>
                <div className="avatar items-center rounded-l-3xl  mb-3 flex flex-col">
                    <div className="w-16   rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/zG4TZYT/60111.jpg" />
                    </div>
                    <p className='text-xl  p-1'>{data?.Name} </p>
                </div>
                <div className='space-y-3 flex-grow'>
                    <p className='text-xl '>Title: <span className="font-bold">{data.JobTitle}</span></p>
                    <p className='text-xl '>Posting Date: <span className="font-bold">{data.JobPostingDate}</span> </p>
                    <p className='text-xl '>Application Deadline: <span className="font-bold">{data.ApplicationDeadline}</span> </p>
                    <p className='text-xl '>Salary Range: <span className="font-bold">{data.SalaryRange}</span> </p>
                    <p className='text-xl '>Job Applicants Number: <span className="font-bold">{data.JobApplicantsNumber}</span> </p>
                </div>
            </div>
            <div className=' flex mb-2'>
                <button className='bg-orange-400 text-xl  w-full pt-2 pb-2 rounded-none '>Details</button>
            </div>
        </div>
    );
};

export default HomeCard;