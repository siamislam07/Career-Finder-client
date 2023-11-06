/* eslint-disable react/prop-types */

const HomeCard = ({ data }) => {
    console.log(data);

    return (
        <div className='border w-96 h-[29rem] flex flex-col mx-auto'>
            <div className='p-2 flex-grow'>
                <div className="avatar items-center rounded-l-3xl  mb-3 flex flex-col">
                    <div className="w-16   rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={data?.profileUrl} />
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
                <button className='bg-orange-400 text-xl  w-full pt-2 pb-2 rounded-none '>Details</button>
            </div>
        </div>
    );
};

export default HomeCard;