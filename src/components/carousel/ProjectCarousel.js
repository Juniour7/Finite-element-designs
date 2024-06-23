import React from "react";
import {Link} from "react-router-dom"
import Slider from "react-slick";


const ProjectCarousel = () => {
    const Settings = {
        arrows: false,
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 950,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <>
            <div className="hidden lg:block">
                <Slider {...Settings}>
                    <div className=" bg-gray-100 h-[450px] focus-outline:none">
                        <div className="flex">
                            <div className="w-[750px] h-[450px] my-auto p-7 ml-10">
                                <img src={require('../../Assets/Projects/KEY WEST APARTMENTS/DSC06699.JPG')} alt="Key West Apartments" className="w-full h-full rounded-xl" />
                            </div>
                            <div className="relative leading-5">
                                <h1 className="text-[#DBC07B] text-xl mt-5">Sample Projects</h1>
                                <h1 className="text-xl font-semibold mt-3">Key West Apartments</h1>
                                <p></p>
                                
                                <Link to="/project" className="absolute bottom-10 border-[1px] py-2 px-5 border-black hover:bg-black hover:text-white hover:border-none duration-300"><button>Explore</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-gray-100 h-[450px]">
                        <div className="flex">
                            <div className="w-[800px] h-[450px] my-auto p-7 ml-10">
                                <img src={require('../../Assets/Projects/OTUKE/IMG20220302144803.jpg')} alt="Otuke residential Home" className="w-full h-full rounded-xl" />
                            </div>
                            <div className="relative leading-5">
                                <h1 className="text-[#DBC07B] text-xl mt-5">Sample Projects</h1>
                                <h1 className="text-xl font-semibold mt-3">Otuke Residential Home</h1>
                                <p></p>
                                <Link to="/project" className="absolute bottom-10 border-[1px] py-2 px-5 border-black hover:bg-black hover:text-white  duration-300"><button>Explore</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-gray-100 h-[450px]">
                        <div className="flex">
                            <div className="w-[800px] h-[450px] my-auto p-7 ml-10">
                                <img src={require('../../Assets/SlideShow/RichmondSuites.jpg')} alt="Richmond Suites" className="w-full h-full rounded-xl" />
                            </div>
                            <div className="relative leading-5">
                                <h1 className="text-[#DBC07B] text-xl mt-5">Sample Projects</h1>
                                <h1 className="text-xl font-semibold mt-3">Richmond Suites</h1>
                                <p></p>
                                <Link to="/project" className="absolute bottom-10 border-[1px] py-2 px-5 border-black hover:bg-black hover:text-white  duration-300"><button>Explore</button></Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>


            <div className="hidden md:block lg:hidden">
                <Slider {...Settings}>
                    <div className=" bg-gray-100 h-[600px] p-3">
                        <div className="">
                            <h1 className="text-[#DBC07B] w-[85%] mx-auto text-3xl mt-5 ml-3">Sample Projects</h1>
                            <div className="w-[90%] h-[400px] m-auto p-2">
                                <img src={require('../../Assets/Projects/KEY WEST APARTMENTS/DSC06699.JPG')} alt="Key West Apartments" className="w-full h-full rounded-xl" />
                            </div>
                            <div className="leading-5 p-4">
                                <h1 className="text-xl font-semibold mt-1 mb-4">Key West Apartments</h1>
                                <p></p>
                                <Link to="/project" className="border-[1px] py-2 px-5 mb-2 border-black hover:bg-black hover:text-white hover:border-none duration-300"><button>Explore</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-gray-100 h-[600px] p-3">
                        <div className="w-full">
                            <h1 className="text-[#DBC07B] text-3xl mt-5 ml-3">Sample Projects</h1>
                            <div className="w-[90%] h-[400px] m-auto p-4">
                                <img src={require('../../Assets/Projects/OTUKE/IMG20220302144803.jpg')} alt="Otuke Residential Home" className="w-full h-full rounded-xl" />
                            </div>
                            <div className="leading-5 p-4">
                                <h1 className="text-xl font-semibold mt-3 mb-4">Otuke Residential Home</h1>
                                <p></p>
                                <Link to="/project" className="border-[1px] py-2 px-5 mb-2 border-black hover:bg-black hover:text-white  duration-300"><button>Explore</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-gray-100 h-[600px]">
                        <div className="w-full">
                            <h1 className="text-[#DBC07B] text-3xl mt-5 ml-3">Sample Projects</h1>
                            <div className="w-[90%] h-[400px] m-auto p-4">
                                <img src={require('../../Assets/SlideShow/RichmondSuites.jpg')} alt="Richmond Suites Project" className="w-full h-full rounded-xl" />
                            </div>
                            <div className="leading-5 p-4">
                                <h1 className="text-xl font-semibold mt-3 mb-4">Richmond Suites</h1>
                                <p></p>
                                <Link to="/project" className=" border-[1px] py-2 px-5 mb-2 border-black hover:bg-black hover:text-white  duration-300"><button>Explore</button></Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>


            <div className="md:hidden">
                <Slider {...Settings}>
                    <div className=" bg-gray-100 h-[470px] focus-outline:none">
                        <div className="w-full">
                            <h1 className="text-[#DBC07B] text-2xl mt-5 ml-3">Sample Projects</h1>
                            <div className="w-[95%] h-[250px] m-auto p-2">
                                <img src={require('../../Assets/Projects/KEY WEST APARTMENTS/DSC06699.JPG')} alt="Key West Apartments" className="w-full h-full rounded-xl" />
                            </div>
                            <div className="leading-5 p-4">
                                <h1 className="text-xl font-semibold mt-1 mb-4">Key West Apartments</h1>
                                <p></p>
                                <Link to="/project" className="border-[1px] py-2 px-5 mb-2 border-black hover:bg-black hover:text-white hover:border-none duration-300"><button>Explore</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-gray-100 h-[470px]">
                        <div className="w-full">
                            <h1 className="text-[#DBC07B] text-2xl mt-5 ml-3">Sample Projects</h1>
                            <div className="w-[95%] h-[250px] m-auto p-2">
                                <img src={require('../../Assets/Projects/OTUKE/IMG20220302144803.jpg')} alt="Otuke Residential Home" className="w-full h-full rounded-xl" />
                            </div>
                            <div className="leading-5 p-4">
                                <h1 className="text-xl font-semibold mt-3 mb-4">Otuke Residential Home</h1>
                                <p></p>
                                <Link to="/project" className="border-[1px] py-2 px-5 mb-2 border-black hover:bg-black hover:text-white  duration-300"><button>Explore</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-gray-100 h-[470px]">
                        <div className="w-full">
                            <h1 className="text-[#DBC07B] text-2xl mt-5 ml-3">Sample Projects</h1>
                            <div className="w-[95%] h-[250px] m-auto p-2">
                                <img src={require('../../Assets/SlideShow/RichmondSuites.jpg')} alt="Richmond Suites" className="w-full h-full rounded-xl" />
                            </div>
                            <div className="leading-5 p-4">
                                <h1 className="text-xl font-semibold mt-3 mb-4">Richmond Suites</h1>
                                <p></p>
                                <Link to="/project" className="border-[1px] py-2 px-5 mb-2 border-black hover:bg-black hover:text-white  duration-300"><button>Explore</button></Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default ProjectCarousel;