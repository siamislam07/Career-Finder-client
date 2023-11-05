import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter";
import search from '../assets/animationJson/search.gif'
import profile from "../assets/animationJson/profile.gif"

const Banner = () => {
    return (
        <ContentCenter>
            
            <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/11/09/08/32/job-7580056_960_720.png)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content gap-10 flex-col md:flex-row lg:flex-row">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-white text-5xl font-bold">Find Your Dream Job</h1>
                        <p className="mb-5  text-xl bg-gradient-to-r from-zinc-50 to-slate-50 bg-clip-text text-transparent">Discover the perfect job opportunities that match your skills and aspirations.</p>
                        <div className="flex flex-row items-center justify-center mb-5">
                            <input
                                type="text"
                                className="w-64 p-3 rounded-lg"
                                placeholder="Search for jobs"
                            />
                            <button className="btn  rounded-l-lg ml-1">Search <img className="w-8" src={search} alt="" /></button>
                        </div>
                    </div>
                    <div>
                        <img className="w-56" src={profile} alt="" />
                    </div>
                </div>
            </div>

        </ContentCenter>
    );
};

export default Banner;