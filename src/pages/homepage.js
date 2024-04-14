import React from "react";
import { Link } from "react-router-dom";

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
            <html className="font-body scroll-smooth">
                <NavBar />
                <NavCarousel />
                <body>
                    <section id="services" className="bg-cover w-full font-body pb-5"
                        style={{backgroundImage: "url(https://img.freepik.com/free-photo/3d-background-with-white-cubes_23-2150472987.jpg?w=740&t=st=1709702240~exp=1709702840~hmac=8ae086153254b6de9ae9b72e7e00b299109f96d60d4bfd3368b311a6d193850e)"}}
                    >
                        <div className="text-left w-[87%] mx-auto pt-3 md:pt-5 md:mb-10">
                            <h1 className="text-2xl md:text-3xl font-bold text-about1-900 my-4">| Our Services</h1>
                        </div>
                        <div className="md:flex flex-wrap justify-center gap-2 md:w-full 2xl:w-[80%] mx-auto">
                            <div className="bg-about1-900 relative hover:bg-about1-300 duration-300 rounded-md text-white w-[80%] h-[350px] mx-auto md:mx-0 md:w-[80%] md:h-96 lg:w-96 2xl:w-[500px] 2xl:h-[500px] p-5 mb-7">
                                <div className="w-10 h-10">
                                    <MdArchitecture  className="w-full h-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Civil & Structural Engineering Services</h2>
                                <p className="text-sm mt-1 md:mt-3">Finite Element Designs Limited Undertakes planning, design, construction supervision and maintenance management of building structures, substation structures, bridges and other major road drainage and water retaining structures.</p>
                                <Link to="/engService" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 cursor-pointer hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div className="bg-about1-900 relative hover:bg-about1-300 duration-300 rounded-md text-white w-[80%] h-[350px] mx-auto md:mx-0 md:w-[80%] md:h-96 lg:w-96 2xl:w-[500px] 2xl:h-[500px] p-5 mb-7">
                                <div className="w-10 h-10">
                                    <FaChalkboardTeacher className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold">Structural Engineering Training</h2>
                                <p className="text-sm mt-3">Finite Element Designs Ltd offers a wide range of trainings in the field of civil and structural engineering.</p>
                                <Link to="/training" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div className="bg-about1-900 relative hover:bg-about1-300 duration-300 rounded-md text-white w-[80%] h-[350px] mx-auto md:mx-0 md:w-[80%] md:h-96 lg:w-96 2xl:w-[500px] 2xl:h-[500px] p-5 mb-7">
                                <div className="w-10 h-10">
                                    <FaBuilding  className="h-full w-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Structural Engineering Consultancy</h2>
                                <p className="text-sm mt-5">Finite Element Designs Limited offers comprehensive structural design consultancy and site supervision services across a wide range of sectors and project types.</p>
                                <Link to="/consultancy" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div className="hidden bg-about1-900 relative hover:bg-about1-300 duration-300 rounded-md text-white w-[80%] h-[350px] mx-auto md:mx-0 md:w-[80%] md:h-96 lg:w-96 2xl:w-[500px] 2xl:h-[500px] p-5 mb-7">
                                <div className="w-10 h-10">
                                    <FaSuitcase  className="w-full h-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Project Management</h2>
                                <p className="text-sm mt-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, type specimen book</p>
                                <Link to="/management" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div className="bg-about1-900 relative hover:bg-about1-300 duration-300 rounded-md text-white w-[80%] h-[350px] mx-auto md:mx-0 md:w-[80%] md:h-96 lg:w-96 2xl:w-[500px] 2xl:h-[500px] p-5 mb-7">
                                <div className="w-10 h-10">
                                    <GiCargoCrane  className="h-full w-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Design-Build</h2>
                                <p className="text-sm mt-5">Finite Element Designs Limited offers comprehensive design-build services for projects involving concrete and steel structures.</p>
                                <Link to="designbuild" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div className=" bg-about1-900 relative hover:bg-about1-300 duration-300 rounded-md text-white w-[80%] h-[350px] mb-4 md:mb-0 mx-auto md:mx-0 md:w-[80%] lg:w-96 2xl:w-[500px] 2xl:h-[500px] md:h-96 p-5">
                                <div className="w-10 h-10">
                                    <GiSteelClaws  className="w-full h-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Steel Fabrication</h2>
                                <p className="text-sm mt-5">Finite Element Designs Limited is your trusted partner for premium steel fabrication services, delivering precision, quality, and compliance with the highest industry standards and codes.</p>
                                <Link to="/steelFab" className="absolute bottom-6"><button className="text-center text-white rounded-md bg-menu-800 py-2 px-3 hover:bg-about-700">Learn More</button></Link>
                            </div>
                            <div className="bg-about1-900 relative hover:bg-about1-300 duration-300 rounded-md text-white w-[80%] h-[350px] mb-4 md:mb-0 mx-auto md:mx-0 md:w-[80%] lg:w-96 2xl:w-[500px] 2xl:h-[500px] md:h-96 p-5">
                                <div className="w-10 h-10">
                                    <BsPrinterFill  className="w-full h-full"/>
                                </div>
                                <h2 className="text-lg font-bold">Large Format Printing</h2>
                                <p className="text-sm mt-5">Finite Element Designs Limited presents our cutting-edge Prograft Tx 3000 large format printing services tailored to meet specific needs of architects, engineers and construction professionals.</p>
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