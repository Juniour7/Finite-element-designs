import React from "react";
import Slider from "react-slick";


//Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NavCarousel = () => {
    const settingsLg = {
        arrows: false,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "150px",
        speed: 800,
        infinte: true
    }

    const settingsMd = {
        arrows: false,
        autoplay: true,
        centerPadding: "300px",
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 800,
        infinite: true
    }

    const settingsSm = {
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        infinte: true
    }

    return (
        <>
            <div className="md:hidden">
                <Slider {...settingsSm}>
                    <div className="relative w-full h-60 px-1 mt-2 focus:outline-none z-0">
                        <img src={require('../../Assets/SlideShow/IMG20230725131223.jpg')} alt="image" 
                        className="h-full w-full object-cover"/>
                        <div className="absolute bottom-2 mb-4 w-[80%] h-24 backdrop-blur-lg bg-about-800 opacity-75 p-3 left-4 place-items-center">
                            <h1 className="text-2xl text-white font-bold">Design of High-Rise Buildings</h1>
                        </div>
                    </div>
                    <div className="relative w-full h-60 px-1 mt-2 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/IMG20220330163507.jpg')} alt="Construction" className="h-full w-full" />
                        <div className="absolute bottom-2 mb-4 w-[90%] h-32 backdrop-blur-lg bg-about-800 opacity-75 p-3 left-4 place-items-center">
                            <h1 className="text-2xl text-white font-bold">Residential Design & Supervision of Residential Units</h1>
                        </div>
                    </div>
                    <div className="relative w-full h-60 px-1 mt-2 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/IMG20230830145514.jpg')} alt="Constrction" className="h-full w-full" />
                        <div className="absolute bottom-2 mb-4 w-[65%] h-24 backdrop-blur-lg bg-about-800 opacity-75 p-3 left-4 place-items-center">
                            <h1 className="text-2xl text-white font-bold">Project Management</h1>
                        </div>
                    </div>
                    <div className="relative w-full h-60 px-1 mt-2 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/sahan.JPG')} alt="Construction" className="h-full w-full " />
                        <div className="absolute bottom-2 mb-4 w-[70%] h-24 backdrop-blur-lg bg-about-800 opacity-75 p-3 left-4 place-items-center">
                            <h1 className="text-2xl text-white font-bold">Reinforced Concrete Design</h1>
                        </div>
                    </div>
                </Slider>
            </div>


            <div className="hidden lg:hidden md:block">
                <Slider {...settingsMd}>
                    <div className="relative w-full h-[450px] px-1 mt-2 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/IMG20230725131223.jpg')} alt="Construction" 
                        className="h-full w-full object-cover"/>
                        <div className="absolute bottom-10 mb-10 w-[600px] h-32 backdrop-blur-lg bg-about-800 opacity-75 p-3 left-4 place-items-center">
                            <h1 className="text-5xl text-white font-bold opacity-100">Design of High-Rise Buildings</h1>
                        </div>
                    </div>
                    <div className="relative w-full h-[450px] px-1 mt-2 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/IMG20220330163507.jpg')} alt="Construction" className="h-full w-full"/>
                        <div className="absolute bottom-10 mb-5 w-[650px] h-42 backdrop-blur-lg bg-about-800 opacity-75 p-3 left-4 place-items-center">
                            <h1 className="text-5xl text-white font-bold">Residential Design & Supervision of Residential Units</h1>
                        </div>
                    </div>
                    <div className="relative w-full h-[450px] px-1 mt-2 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/IMG20230830145514.jpg')} alt="Construction" className="h-full w-full"/>
                        <div className="absolute bottom-10 mb-10 w-[600px] h-24 backdrop-blur-lg bg-about-800 opacity-75 p-3 py-auto left-4 place-items-center">
                            <h1 className="text-5xl text-white font-bold">Project Management</h1>
                        </div>
                    </div>
                    <div className="relative w-full h-[450px] px-1 mt-2 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/sahan.JPG')}  alt="Construction" className="h-full w-full" />
                        <div className="absolute bottom-10 mb-10 w-[620px] h-32 backdrop-blur-lg bg-about-800 opacity-75 p-3 left-4 place-items-center">
                            <h1 className="text-5xl text-white font-bold">Reinforced Concrete Design</h1>
                        </div>
                    </div>
                </Slider>
            </div>


            <div className="hidden lg:block">
                <Slider {...settingsLg}>
                    <div className="relative w-full h-screen px-1 mt-3 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/IMG20230725131223.jpg')} alt="carousel" className="h-full w-full rounded-md object-cover"/>
                        <div className="absolute bottom-10 mb-20 w-[700px] h-48 backdrop-blur-lg bg-about-800 opacity-75 p-3 left-4 place-items-center">
                            <h1 className="text-7xl text-white font-bold">Design of High-Rise Buildings</h1>
                        </div>
                    </div>
                    <div className="relative w-full h-screen px-1 mt-3 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/IMG20220330163507.jpg')} alt="carousel" className="h-full w-full rounded-md" />
                        <div className="absolute bottom-10 mb-20 w-[900px] h-48 backdrop-blur-lg bg-about-800 opacity-75 p-2 left-4 place-items-center">
                            <h1 className="text-6xl text-white font-bold">Residential Design & Supervision of Residential Units</h1>
                        </div>
                    </div>
                    <div className="relative w-full h-screen px-1 mt-3 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/IMG20230830145514.jpg')} alt="carousel" className="h-full w-full rounded-md" />
                        <div className="absolute bottom-10 mb-20 w-[600px] h-48 backdrop-blur-lg bg-about-800 opacity-75 p-3 left-4 place-items-center">
                            <h1 className="text-7xl text-white font-bold">Project Management</h1>
                        </div>
                    </div>
                    <div className="relative w-full h-screen px-1 mt-3 focus:outline-none">
                        <img src={require('../../Assets/SlideShow/sahan.JPG')} alt="carousel" className="h-full w-full rounded-md" />
                        <div className="absolute bottom-10 mb-20 w-[700px] h-48 backdrop-blur-lg bg-about-800 opacity-75 p-3 left-4 place-items-center">
                            <h1 className="text-7xl text-white font-bold">Reinforced Concrete Design</h1>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default NavCarousel;