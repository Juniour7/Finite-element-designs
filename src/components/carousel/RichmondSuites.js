import React from "react";
import Slider from "react-slick";

//Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const RichmondSuitesCarousel = () => {
    const SettingsLg = {
        arrows: true,
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <>
            <div className="hidden lg:block w-3/4 mx-auto">
                <Slider {...SettingsLg}>
                    <div className="w-96 h-[550px] focus:outline-none">
                        <img src={require('../../Assets/Projects/RICHMOND SUITES/IMG_20190828_094248.jpg')} alt="RichmondSuites Image" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[550px] focus:outline-none">
                        <img src={require('../../Assets/Projects/RICHMOND SUITES/IMG_20190828_103306.jpg')} alt="RichmondSuites Image" className="w-full h-full" />
                    </div>
                </Slider>
            </div>


            <div className="hidden lg:hidden md:block w-3/4 mx-auto">
                <Slider {...SettingsLg}>
                    <div className="w-96 h-[400px] focus:outline-none">
                        <img src={require('../../Assets/Projects/RICHMOND SUITES/IMG_20190828_094248.jpg')} alt="RichmondSuites Image" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[400px] focus:outline-none">
                        <img src={require('../../Assets/Projects/RICHMOND SUITES/IMG_20190828_103306.jpg')} alt="RichmondSuites Image" className="w-full h-full" />
                    </div>
                </Slider>
            </div>


            <div className="md:hidden w-[90%] mx-auto">
                <Slider {...SettingsLg}>
                    <div className="w-full h-[228px] focus:outline-none">
                        <img src={require('../../Assets/Projects/RICHMOND SUITES/IMG_20190828_094248.jpg')}  alt="RichmondSuites Image" className="w-full h-full rounded-md" />
                    </div>
                    <div className="w-full h-[228px] focus:outline-none">
                        <img src={require('../../Assets/Projects/RICHMOND SUITES/IMG_20190828_103306.jpg')}   alt="RichmondSuites Image" className="w-full h-full rounded-md" />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default RichmondSuitesCarousel;