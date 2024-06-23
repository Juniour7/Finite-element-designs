import React from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet-async";


//Importing Icons
import { MdArchitecture } from "react-icons/md";
import { FaChalkboardTeacher, FaBuilding, FaSuitcase } from "react-icons/fa";
import { BsPrinterFill } from "react-icons/bs";
import { GiCargoCrane, GiSteelClaws } from "react-icons/gi";

//Compnents
import NavBar from "../components/Navbar/navbar";
import NavCarousel from "../components/carousel/carousel";
import ProjectCarousel from "../components/carousel/ProjectCarousel";
import Footer from "../components/Footer/Footer";


//Hompage Layout
const HomePage = () => {
    return (
        <>
            <div>
            <Helmet>
                    <title>Finite Element Designs Limited</title>
                    <meta 
                        name ="Finite Element Designs Limited"
                        content="Finite Element Designs Limited is a registered company in Kenya offering services for civil engineering and structural engineering works and services with the highest integrity, knowledge, and experience level."
                    />
                    <meta name="google-site-verification" content="1L0XEHtPG4pNfFWZTGugshQhnFMDPtbTBBSFyFO8K_0" />
                </Helmet>
            </div>
            <html className="font-body scroll-smooth">
                <NavBar />
                <NavCarousel />
                <body >
                    <section id="services" className="bg-cover w-full font-body pb-5"
                        style={{backgroundImage: "url(https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                    >
                        <div className="text-left w-[87%] mx-auto pt-3 md:pt-5 md:mb-10">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-about1-900 my-4">| Our Services</h1>
                        </div>
                        <div className="md:flex flex-wrap  gap-1  justify-center md:w-full lg:w-[90%] 2xl:w-[80%] mx-auto">
                            <div data-aos="fade-up" data-aos-duration="2000" className="bg-about1-900 relative hover:bg-about1-300 transition-colors duration-500 ease-in-out delay-200 rounded-md text-white w-[90%] md:w-[80%] h-[350px] mx-auto md:h-96 lg:w-96 2xl:w-[500px] 2xl:h-[500px] p-5 mb-4 shadow-black/50 shadow-md">
                                <div className="w-10 h-10">
                                    <MdArchitecture  className="w-full h-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Civil & Structural Engineering Services</h2>
                                <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" className="text-sm mt-1 md:mt-3">Finite Element Designs Limited Undertakes planning, design, construction supervision and maintenance management of building structures, substation structures, bridges and other major road drainage and water retaining structures.</p>
                                <Link to="/engService" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 cursor-pointer hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800" className="bg-about1-900 relative hover:bg-about1-300 transition-colors duration-500 ease-in-out delay-200 rounded-md text-white w-[90%] md:w-[80%] h-[350px] mx-auto md:h-96 lg:w-96 2xl:w-[500px] 2xl:h-[500px] p-5 mb-4 shadow-black/50 shadow-md">
                                <div className="w-10 h-10">
                                    <FaChalkboardTeacher className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold">Structural Engineering Training</h2>
                                <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" className="text-sm mt-3">Finite Element Designs Ltd offers a wide range of trainings in the field of civil and structural engineering.</p>
                                <Link to="/training" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className="bg-about1-900 relative hover:bg-about1-300 transition-colors duration-500 ease-in-out delay-200 rounded-md text-white w-[90%] md:w-[80%] h-[350px] mx-auto md:h-96 lg:w-96 2xl:w-[500px] 2xl:h-[500px] p-5 mb-4 shadow-black/50 shadow-md">
                                <div className="w-10 h-10">
                                    <FaBuilding  className="h-full w-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Structural Engineering Consultancy</h2>
                                <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" className="text-sm mt-5">Finite Element Designs Limited offers comprehensive structural design consultancy and site supervision services across a wide range of sectors and project types.</p>
                                <Link to="/consultancy" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200" className="hidden bg-about1-900 relative hover:bg-about1-300 transition-colors duration-500 ease-in-out delay-200 rounded-md text-white w-[90%] md:w-[80%] h-[350px] mx-auto md:mx-0 md:h-96 lg:w-96 2xl:w-[500px] 2xl:h-[500px] p-5 mb-4 shadow-black/50 shadow-md">
                                <div className="w-10 h-10">
                                    <FaSuitcase  className="w-full h-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Project Management</h2>
                                <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" className="text-sm mt-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, type specimen book</p>
                                <Link to="/management" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1400" className="bg-about1-900 relative hover:bg-about1-300 transition-colors duration-500 ease-in-out delay-200 rounded-md text-white w-[90%] md:w-[80%] h-[350px] mx-auto  md:h-96 lg:w-96 2xl:w-[500px] 2xl:h-[500px] p-5 mb-4 shadow-black/50 shadow-md">
                                <div className="w-10 h-10">
                                    <GiCargoCrane  className="h-full w-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Design-Build</h2>
                                <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" className="text-sm mt-5">Finite Element Designs Limited offers comprehensive design-build services for projects involving concrete and steel structures.</p>
                                <Link to="designbuild" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1600" className=" bg-about1-900 relative hover:bg-about1-300 transition-colors duration-500 ease-in-out delay-200 rounded-md text-white w-[90%] h-[350px] mb-4 mx-auto md:w-[80%] lg:w-96 2xl:w-[500px] 2xl:h-[500px] md:h-96 p-5 shadow-black/50 shadow-md">
                                <div className="w-10 h-10">
                                    <GiSteelClaws  className="w-full h-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Steel Fabrication</h2>
                                <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" className="text-sm mt-5">Finite Element Designs Limited is your trusted partner for premium steel fabrication services, delivering precision, quality, and compliance with the highest industry standards and codes.</p>
                                <Link to="/steelFab" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1800" className="bg-about1-900 relative hover:bg-about1-300 transition-colors duration-500 ease-in-out delay-200 rounded-md text-white w-[90%] h-[350px] mb-4  mx-auto md:mx-auto md:w-[80%] lg:w-96 2xl:w-[500px] 2xl:h-[500px] md:h-96 p-5 shadow-black/50 shadow-md">
                                <div className="w-10 h-10">
                                    <BsPrinterFill  className="w-full h-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Large Format Printing</h2>
                                <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" className="text-sm mt-5">Finite Element Designs Limited presents our cutting-edge Prograft Tx 3000 large format printing services tailored to meet specific needs of architects, engineers and construction professionals.</p>
                                <Link to="/largeformat" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                        </div>
                    </section>
                    <ProjectCarousel />     
                </body>
                <Footer />
            </html>
        </>
    );
};

export default HomePage;