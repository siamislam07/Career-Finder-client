
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const navigate=()=>{
        navigate('/')
    }
    const navigate2=()=>{
        navigate('/login')
    }
    const navigate3=()=>{
        navigate('/register')
    }
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-300 space-y-3 ">
        <li><NavLink to='/' onClick={navigate} className="mt-5 rounded-lg text-lg font-extralight">Home</NavLink></li>
        <li><NavLink to='/login' onClick={navigate2} className='rounded-lg text-lg font-extralight'>login</NavLink></li>
        <li><NavLink to='/register' onClick={navigate3} className="rounded-lg text-lg font-extralight">Register</NavLink></li>
    </ul>
    );
};

export default SideBar;