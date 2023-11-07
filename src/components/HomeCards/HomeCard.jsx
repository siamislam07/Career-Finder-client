/* eslint-disable react/prop-types */

const HomeCard = ({ data, isMatching }) => {

    const cardStyles = {
        border: !isMatching ? '' : '2px solid', // Default border style for all cards
        boxShadow: !isMatching ? 'none' : '0px 0px 101px 4px rgba(62, 90, 173, 0.69)', // Box shadow with glow effect for matching cards
        opacity: !isMatching ? 0.6 : 1,
        transition: 'box-shadow 0.5s ease-in-out, opacity 0.5s ease-in-out', // Transition effect for the box shadow
    };

    // console.log(data);

    return (
        <div className='border w-96 h-[29rem] flex flex-col mx-auto rounded-md' style={cardStyles}>
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
                <button className='bg-gradient-to-r from-blue-800 to-indigo-900 text-white text-xl  w-full pt-2 pb-2 rounded-none '>Details</button>
            </div>
        </div>
    );
};

export default HomeCard;