import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

//Icons
import { CgInternal } from "react-icons/cg";

//Components
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";

const Careers = () => {
    

    return (
        <>
            <div>
                <SEO
                    title='Careers - Finite Element Designs Ltd'
                    description='Finite Element Designs Ltd offers unparalleled opportunities for talented graduates and individuals in search of a rewarding career.
                    We work hard to provide an environment in which you can flourish and involve you in some of the most challenging, iconic and economically essential projects.'
                />
            </div>
            <NavBar />
            <section className="bg-gray-100 mt-16 md:mt-20 lg:mt-0">
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-72"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1504607798333-52a30db54a5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-5xl font-bold text-white/100">Careers</h1>
                        <h4 data-aos="zoom-in" data-aos-duration="2000" className="text-md text-gray-300 mt-7">Finite Element Designs Limited offers you an opportunity to grow and expand your career.</h4>
                    </div>
                </div>
                <body className="w-[90%] mx-auto justify-center mt-10 text-md text-black pb-10">
                    <div className="mx-auto text-center justify-center">
                        <h1 data-aos="fade-right" data-aos-duration="2000" className="text-xl mb-3 font-bold text-blue-500">Welcome to career oppoturnities at Finite Element Designs Limited</h1>
                        <p data-aos="fade-up" data-aos-duration="2000">Finite Element Designs Ltd offers unparalleled opportunities for talented graduates and individuals in search of a rewarding career.</p>
                        <p data-aos="fade-up" data-aos-duration="2000">We work hard to provide an environment in which you can flourish and involve you in some of the most challenging, iconic and economically essential projects.</p>
                        <p data-aos="fade-up" data-aos-duration="2000">Choose from the varying options of opportunities available at our company.</p>
                    </div>
                    <div className="bg-white w-[98%] md:w-[80%] lg:w-[98%] mx-auto flex flex-wrap justify-center gap-2 mt-10 px-2 py-4">
                        <Link to="/industrial-career" className="relative bg-cover bg-center bg-no-repeat h-80 w-80 md:w-[90%] md:h-[350px] lg:h-96 lg:w-96 rounded-xl text-white text-xl font-semibold"
                            style={{backgroundImage: "url(https://images.unsplash.com/photo-1483213097419-365e22f0f258?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                        >
                            <div className="p-7 bg-about-500 h-80 md:h-[350px] lg:h-96 bg-opacity-55 rounded-xl">
                                <div className="absolute inset-x-0 top-0">
                                    <h1 className="text-3xl text-center text-white font-semibold md:font-bold">Career Opportunity</h1>
                                </div>
                                <div className="w-[50%] md:w-[40%] mx-auto mt-10 md:mt-16">
                                    <div className="text-blue-500 h-32 w-32 hover:scale-110 ease-in-out duration-300">
                                        <CgInternal className="w-full h-full"/>
                                    </div>
                                </div>
                                <div className="absolute text-blue-900 inset-x-0 bottom-0 text-center mb-10">
                                    <p className="text-xl text-white font-semibold">Want to grow your career with Finite Element Designs Ltd?</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/internship"   className="relative bg-cover bg-center bg-no-repeat h-80 w-80 md:w-[90%] md:h-[350px] lg:h-96 lg:w-96 rounded-xl text-white text-xl font-semibold"
                            style={{backgroundImage: "url(https://images.unsplash.com/photo-1483213097419-365e22f0f258?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                        >
                            <div className="p-7 bg-about-500 h-80 w-full md:h-[350px] lg:h-96 bg-opacity-55 rounded-xl">
                                <div className="absolute inset-x-0 top-0">
                                    <h1 className="text-3xl text-center text-white font-semibold md:font-bold">Internship</h1>
                                </div>
                                <div className="w-[50%] md:w-[40%] mx-auto mt-10 md:mt-16">
                                    <div className="text-blue-500 h-32 w-32 hover:scale-110 ease-in-out duration-300">
                                        <CgInternal className="w-full h-full"/>
                                    </div>
                                </div>
                                <div className="absolute text-blue-900 inset-x-0 bottom-0 text-center mb-10">
                                    <p className="text-xl text-white font-semibold">Looking for an internsip? </p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/attachment" className="relative  bg-cover bg-center bg-no-repeat h-80 w-80 md:w-[90%] md:h-[350px] lg:h-96 lg:w-96 rounded-xl text-white text-xl font-semibold"
                            style={{backgroundImage: "url(https://images.unsplash.com/photo-1483213097419-365e22f0f258?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                        >
                            <div className="p-7 bg-about-500 h-80 md:h-[350px] lg:h-96 bg-opacity-55 rounded-xl">
                                <div className="absolute inset-x-0 top-0">
                                    <h1 className="text-3xl text-center text-white font-semibold md:font-bold">Industrial Attachment</h1>
                                </div>
                                <div className="w-[50%] md:w-[40%] mx-auto mt-10 md:mt-16">
                                    <div className="text-blue-500 h-32 w-32 hover:scale-110 ease-in-out duration-300">
                                        <CgInternal className="w-full h-full"/>
                                    </div>
                                </div>
                                <div className="absolute text-blue-900 inset-x-0 bottom-0 text-center mb-10">
                                    <p className="text-xl text-white font-semibold">You wish  to relate theory to market realities?</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </body>
            </section>
            <Footer />
        </>
    );
}

export default Careers;