import { useLottie } from 'lottie-react';
import error from '../assets//animationJson/error.json'
import { Link } from 'react-router-dom';


const ErrorPage = () => {

    const options = {
        animationData: error,
        loop: true,

    };

    const { View } = useLottie(options);
    return (
        <div className='bg-[#E0E3EC]'>
            <div className='flex flex-col gap-4 justify-center h-screen items-center'>
                <p className='bg-transparent'>{View}</p>
                <Link><button className="btn rounded-lg text-xl">Back To Home</button></Link>
            </div>

        </div>
    );
};

export default ErrorPage;