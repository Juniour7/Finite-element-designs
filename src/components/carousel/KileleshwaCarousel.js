import React from "react";
import Slider from "react-slick";

//Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KileleshwaCarousel = () => {
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
                    <div className="w-96 h-[600px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20230801113254.jpg')} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[600px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20230801114223.jpg')} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[600px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20230830145514.jpg')} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[600px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/WhatsApp Image 2023-05-31 at 4.47.00 PM.jpeg')} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[600px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20240123163046.jpg')} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[600px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/WhatsApp Image 2023-05-31 at 4.47.30 PM.jpeg')} alt="" className="w-full h-full" />
                    </div>
                </Slider>
            </div>


            <div className="hidden lg:hidden md:block w-3/4 mx-auto">
                <Slider {...SettingsLg}>
                    <div className="w-96 h-[400px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20230801113254.jpg')} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[400px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20230801114223.jpg')} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[400px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20230830145514.jpg')} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[400px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/WhatsApp Image 2023-05-31 at 4.47.00 PM.jpeg')} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[400px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20240123163046.jpg')} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-96 h-[400px] focus:outline-none">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/WhatsApp Image 2023-05-31 at 4.47.30 PM.jpeg')} alt="" className="w-full h-full" />
                    </div>
                </Slider>
            </div>


            <div className="md:hidden w-[90%] mx-auto rounded-md">
                <Slider {...SettingsLg}>
                    <div className="w-full h-[228px] focus:outline-none rounded-md">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20230801113254.jpg')} alt="Kileleshwa Sahan Project" className="w-full h-full rounded-md" />
                    </div>
                    <div className="w-full h-[228px] focus:outline-none rounded-md">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20230801114223.jpg')} alt="Kileleshwa Sahan Project" className="w-full h-full rounded-md" />
                    </div>
                    <div className="w-full h-[228px] focus:outline-none rounded-md">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20230830145514.jpg')} alt="Kileleshwa Sahan Project" className="w-full h-full rounded-md" />
                    </div>
                    <div className="w-full h-[228px] focus:outline-none rounded-md">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/WhatsApp Image 2023-05-31 at 4.47.00 PM.jpeg')} alt="Kileleshwa Sahan Project" className="w-full h-full rounded-md" />
                    </div>
                    <div className="w-full h-[228px] focus:outline-none rounded-md">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/IMG20240123163046.jpg')} alt="Kileleshwa Sahan Project" className="w-full h-full rounded-md" />
                    </div>
                    <div className="w-full h-[228px] focus:outline-none rounded-md">
                        <img src={require('../../Assets/Projects/KILELESHWA SAHAN/WhatsApp Image 2023-05-31 at 4.47.30 PM.jpeg')} alt="Kileleshwa Sahan Project" className="w-full h-full rounded-md" />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default KileleshwaCarousel;