import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

//Icons
import { FaChevronRight } from "react-icons/fa";


//Components
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";



const Project = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Projects - Finite Element Designs Ltd</title>
                    <meta 
                        name="Projects" 
                        content="Explore the projects we have donw for our now happy clients" 
                    />
                </Helmet>
            </div>
            <NavBar />
            <section className="w-full mt-16 md:mt-20 lg:mt-0">
                <body className="my-4 md:my-10  lg:w-[97%] w-[97%] md:w-[80%] mx-auto">
                    <div className="text-black/50 md:w-11/12 mx-auto my-4 md:my-10">
                        <h1 className="text-3xl md:text-5xl lg:ml-16 font-semibold">Projects</h1> 
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-3 ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="relative w-[500px] h-[280px] md:w-full md:h-[370px]  lg:w-96 lg:h-64">
                            <Link to="/KileleshwaProject">
                                <img  src={require('../Assets/Projects/KILELESHWA SAHAN/IMG20230830145514.jpg')} 
                                    alt="Kileleshwa Sahan" 
                                    className="w-full h-full" 
                                />
                                <div className="absolute flex gap-2 bottom-0 bg-blue-500 text-white text-2xl align-left px-4 h-1/4 w-full cursor-pointer">
                                    <h3 className="my-auto">Kileleshwa Sahan</h3>
                                    <div className="w-5 h-5 my-auto">
                                        <FaChevronRight className="w-full h-full" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="850" className="relative w-[500px] h-[280px] md:w-full md:h-[370px] lg:w-96 lg:h-64">
                            <Link to="/LenanaProject">
                                <img src={require('../Assets/Projects/LENANA ROAD SITE PICS/DSC00470.JPG')} 
                                    alt="Lenana" 
                                    className="w-full h-full" 
                                />
                                <div className="absolute flex gap-2 bottom-0 bg-blue-500 text-white text-2xl align-left px-4 h-1/4 w-full cursor-pointer">
                                    <h3 className="my-auto">Lenana Road Site</h3>
                                    <div className="w-5 h-5 my-auto">
                                        <FaChevronRight className="w-full h-full" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="1200" className="relative w-[500px] h-[280px] md:w-full md:h-[370px] lg:w-96 lg:h-64">
                            <Link to="/KeyWestProject">
                                <img src={require('../Assets/Projects/KEY WEST APARTMENTS/DSC06699.JPG')} 
                                    alt="Key West Aprtments" 
                                    className="w-full h-full" 
                                />
                                <div className="absolute flex gap-2 bottom-0 bg-blue-500 text-white text-2xl align-left px-4 h-1/4 w-full cursor-pointer">
                                    <h3 className="my-auto">Key West Apartment</h3>
                                    <div className="w-5 h-5 my-auto">
                                        <FaChevronRight className="w-full h-full" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div  data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="1400" className="relative w-[500px] h-[280px] md:w-full md:h-[370px] lg:w-96 lg:h-64">
                            <Link to="/OtukeProject">
                                <img src={require('../Assets/Projects/OTUKE/IMG20220302144803.jpg')}
                                    alt="Otuke Image" 
                                    className="w-full h-full" 
                                />
                                <div className="absolute flex gap-2 bottom-0 bg-blue-500 text-white text-2xl align-left px-4 h-1/4 w-full cursor-pointer">
                                    <h3 className="my-auto">Otuke Project</h3>
                                    <div className="w-5 h-5 my-auto">
                                        <FaChevronRight className="w-full h-full" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="1600" className="relative w-[500px] h-[280px] md:w-full md:h-[370px] lg:w-96 lg:h-64">
                            <Link to="/RichmondSuitesProject">
                                <img src={require('../Assets/SlideShow/RichmondSuites.jpg')} 
                                    alt="RichmondSuites Image" 
                                    className="w-full h-full" 
                                />
                                <div className="absolute flex gap-2 bottom-0 bg-blue-500 text-white text-2xl align-left px-4 h-1/4 w-full cursor-pointer">
                                    <h3 className="my-auto">Richmond Suites</h3>
                                    <div className="w-5 h-5 my-auto">
                                        <FaChevronRight className="w-full h-full" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="1800" className="relative hidden lg:block w-[500px] h-[280px] md:w-full md:h-[370px] lg:w-96 lg:h-64">
                            <Link to="#">
                                <img src={require('../Assets/SlideShow/IMG20211128165021.jpg')} 
                                    alt="RichmondSuites Image" 
                                    className="w-full h-full" 
                                />
                                <div className="absolute flex gap-2 bottom-0 bg-blue-500 text-white text-2xl align-left px-4 h-1/4 w-full cursor-pointer">
                                    <h3 className="my-auto">Richmond Suites</h3>
                                    <div className="w-5 h-5 my-auto">
                                        <FaChevronRight className="w-full h-full" />
                                    </div>
                                </div>
                            </Link>
                        </div>      
                    </div>
                </body>
            </section>
            <Footer />
        </>
    );
}

export default Project;