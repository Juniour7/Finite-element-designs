import React from "react";
import { Helmet } from "react-helmet-async";
import 'aos/dist/aos.css';

//Components
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";

const Personnel = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Personnel - Finite Element Designs Ltd</title>
                    <meta 
                        name="Personell" 
                        content="Meet the team that makes it happen at Finite Element Designs Limited." 
                    />
                </Helmet>
            </div>
            <NavBar />
            <section className="mt-16 md:mt-20 lg:mt-0">
                <div className="relative bg-fixed bg-cover bg-center bg-no-repeat w-full h-72"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1465829235810-1f912537f253?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="absolute inset-y-0 mx-10 py-10">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-4xl md:text-5xl font-bold text-white">Personnel</h1>
                        <h3 data-aos="zoom-in" data-aos-duration="2000" className="text-xl text-white my-3">Meet the team that makes it happen.</h3>
                    </div>
                </div>
                <body className="w-[80%] md:w-[90%] mx-auto">
                    <div className="bg-[#CCD3CA] mt-10 mb-5 md:flex gap-3 shadow-xl">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" className="w-full md:w-[45%] h-[450px] lg:w-[370px] lg:h-[470px] ">
                            <img src={require('../Assets/Officials/IMG-20240105-WA0002.jpg')} loading="lazy" alt="Phares Atai" className="w-full h-full" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="2000" className="md:pt-4 md:w-[50%] p-2">
                            <div className="flex">
                                <h1 className="text-xl font-semibold mr-2">Name:</h1> 
                                <h2 className="text-xl ">Eng. Phares O. Atai P.E</h2>
                            </div>
                            <div className="flex">
                                <h1 className="text-xl font-semibold mr-1">Position:</h1> 
                                <h2 className="text-xl ">Managing Director</h2>
                            </div>
                            <div className="flex text-center">
                                <h1 className="text-xl font-semibold mr-2">Designation:</h1> 
                                <h2 className="text-xl ">Bsc. Civil Engineering</h2> 
                            </div>
                            <div className="flex text-center">
                                <h1 className="text-xl font-semibold mr-4">Profession:</h1> 
                                <h2 className="text-xl ">Civil & Structural Engineer</h2> 
                            </div>
                            <div className="">
                                <h1 className="text-xl font-bold">Career Objectives</h1>
                                <ol className="list-disc text-md text-black/75 leading-6 ml-5 text-left">
                                    <li>Offer a lasting contribution to the advancement of the Engineering profession in Kenya.</li>
                                    <li>Improve the quality and level of Civil and structural engineering in Kenya and worldwide.</li>
                                </ol>
                                <p>Corporate Member Institution of Engineers of Kenya </p>
                                <p className="font-sm font-semibold italic mt-7">Registered professional Engineer with the engineers board of Kenya.</p>
                            </div>
                        </div>
                    </div>
                   <div className="bg-[#CCD3CA] md:w-full lg:h-[470px] mt-10 mb-5 md:flex gap-5 shadow-xl">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="w-full h-[450px] md:w-[45%] lg:w-[370px] lg:h-[470px] ">
                            <img src={require('../Assets/Officials/MEM_0733.jpg')} alt="Assistant Structural Engineer" className="w-full h-full" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="2000" className="md:pt-4 md:w-[50%] p-2 leading-3">
                            <div className="flex text-center">
                                <h1 className="text-xl font-semibold mr-2">Name:</h1> 
                                <h2 className="text-xl ">Sharon J. Kimatui</h2>
                            </div>
                            <div className="flex">
                                <h1 className="text-xl font-semibold mr-2">Position:</h1> 
                                <h2 className="text-xl ">Assistant Structural Engineer</h2>
                            </div>
                            <div className="flex text-center">
                                <h1 className="text-xl font-semibold mr-2">Designation:</h1> 
                                <h2 className="text-xl ">Bsc. Civil Engineering</h2> 
                            </div>
                            <div className="flex text-center">
                                <h1 className="text-xl font-semibold mr-2">Profession:</h1> 
                                <h2 className="text-xl ">Civil Engineering</h2> 
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Career Objectives</h1>
                                <ol className="list-disc text-md text-black/75 leading-6 ml-5 text-left">
                                    <li>Committed to discharge civil engineering duties effectively with integrity dignity, diligence and passion for exlcellence.</li>
                                    <li>To be of great positive influence in the Engineering field when it comes adopting new technologies.</li>
                                </ol>
                                <p className="font-sm font-semibold italic mt-7">Graduate member of the engineers board of Kenya.</p>
                            </div>
                        </div>
                   </div>
                   <div className="bg-[#CCD3CA] md:w-full mt-10 mb-5  gap-5 shadow-xl hidden">
                        <div className="md:w-[] lg:w-[370px] lg:h-[470px] h-[420px]">
                            <img src="" alt="Assistant Structural Engineer" className="w-full h-full" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="2000" className="md:pt-4 md:w-[50%] p-2 leading-3">
                            <div className="flex text-center">
                                <h1 className="text-xl font-semibold mr-2">Name:</h1> 
                                <h2 className="text-xl ">Mageto Seth Onwonga</h2>
                            </div>
                            <div className="flex text-center md:mt-2">
                                <h1 className="text-xl font-semibold mr-2">Position:</h1> 
                                <h2 className="text-xl ">Assistant Structural Engineer</h2>
                            </div>
                            <div className="flex text-center md:mt-2">
                                <h1 className="text-xl font-semibold mr-2">Designation:</h1> 
                                <h2 className="text-xl ">Bsc. Civil Engineering</h2> 
                            </div>
                            <div className="flex text-center md:mt-2">
                                <h1 className="text-xl font-semibold mr-2">Profession:</h1> 
                                <h2 className="text-xl ">Civil Engineering</h2> 
                            </div>
                            <div className="md:mt-2 lg:w-[700px]">
                                <h1 className="text-xl font-bold">Professional Experience</h1>
                                <ol className="list-disc text-md text-black/75 leading-6 ml-5 text-left">
                                    <li>Experience covers engineering designs for a wide range of high-rise as well as low level structures considering vertical loads, earthquake loads, wind loads, earth pressure and hydrostatic pressure on the structures and the associated civil and geotechnical works within and without the country.</li>
                                    <li>Structural engineering work comprises of residential homes, office blocks, shopping malls, godowns, commercial complexes, schools, religious institutions and basements. The civil work has involved internal estate roads, petrol stations, car parks, and drainage and waste water disposal systems.</li>
                                    <li>The responsibilities have comprised of site investigation, assessment of structural soundness of old structures and structures affected by civil war, strengthening works for weak structures, renovations and alternative design solutions for problematic structures and grounds.</li>
                                </ol>
                                <p className="font-sm font-semibold italic mt-7">Graduate member of the engineers board of Kenya.</p>
                            </div>
                        </div>
                   </div>
                   <div className="bg-[#CCD3CA] md:w-full mt-10 mb-5 md:flex gap-5 shadow-xl">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="w-full h:[450px]  md:w-[45%] lg:w-[370px] lg:h-[470px]">
                            <img src={require('../Assets/Officials/MEM_0721.jpg')} alt="Assistant Structural Engineer" className="w-full h-full" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="2000" className="md:pt-4 md:w-[50%] p-2 leading-3">
                            <div className="flex text-center">
                                <h1 className="text-xl font-semibold mr-2">Name:</h1> 
                                <h2 className="text-xl ">Esther K. Momanyi</h2>
                            </div>
                            <div className="flex">
                                <h1 className="text-xl font-semibold mr-2">Position:</h1> 
                                <h2 className="text-xl ">Assistant Structural Engineer</h2>
                            </div>
                            <div className="flex text-center">
                                <h1 className="text-xl font-semibold mr-2">Designation:</h1> 
                                <h2 className="text-xl ">Bsc. Civil Engineering</h2> 
                            </div>
                            <div className="flex text-center">
                                <h1 className="text-xl font-semibold mr-2">Profession:</h1> 
                                <h2 className="text-xl ">Civil Engineering</h2> 
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Career Objectives</h1>
                                <ol className="list-disc text-md text-black/75 leading-6 ml-5 text-left">
                                    <li>Use my resourceful experience to offer quality Civil Engineering service to achieve sustainable development.</li>
                                    <li>Use my resourceful experience to offer quality Civil Engineering service to achieve sustainable development.</li>
                                </ol>
                                <p className="font-sm font-semibold italic mt-7">Graduate member of the engineers board of Kenya.</p>
                            </div>
                        </div>
                   </div>
                   <div className="bg-[#CCD3CA] md:w-full mt-10 mb-5 md:flex gap-5 shadow-xl">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="w-full h-[420px] md:h-[440px] md:w-[45%] lg:w-[370px] lg:h-[470px] ">
                            <img src={require('../Assets/Officials/MEM_0745.jpg')} alt="Assistant Structural Engineer" className="w-full h-full" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="2000" className="md:pt-4 md:w-[50%] p-2 leading-3">
                            <div className="flex text-center">
                                <h1 className="text-xl font-semibold mr-2">Name:</h1> 
                                <h2 className="text-xl ">Rose N. Mukono</h2>
                            </div>
                            <div className="flex md:mt-2">
                                <h1 className="text-xl font-semibold mr-2">Position:</h1> 
                                <h2 className="text-xl ">Assistant Structural Engineer</h2>
                            </div>
                            <div className="flex text-center md:mt-2">
                                <h1 className="text-xl font-semibold mr-2">Designation:</h1> 
                                <h2 className="text-xl ">Bsc. Civil Engineering</h2> 
                            </div>
                            <div className="flex text-center md:mt-2">
                                <h1 className="text-xl font-semibold mr-2">Profession:</h1> 
                                <h2 className="text-xl ">Civil Engineering</h2> 
                            </div>
                            <div className="md:mt-2 lg:w-[700px]">
                                <h1 className="text-xl font-bold">Professional Experience</h1>
                                <ol className="list-disc text-md text-black/75 leading-6 ml-5 text-left">
                                    <li>Design, detailing and subsequent implementation of the structural drawings of a box culvert along Musikoma-Mungatsi road at km 52+045.</li>
                                    <li>Detailing and preparation of structural drawings for the extension works for the casualty unit in Kimilili Sub-County Hospital.</li>
                                    <li className="md:hidden lg:block">Design and detailing of a 2-storey residential building of a client based in Kisii County.</li>
                                    <li className="md:hidden lg:block">Design, detailing and preparation of structural drawings, preparation of Bar Bending schedule for a proposed residential 2-storey development for a client based in Kisumu.</li>
                                    <li className="md:hidden lg:block">Detailing of structural drawings of a roof layout for revision of roof works of a client based in Kitale.</li>
                                </ol>
                                <p className="font-sm font-semibold italic mt-7">Graduate member of the engineers board of Kenya.</p>
                            </div>
                        </div>
                   </div>
                </body>
            </section>
            <Footer />
        </>
    );
}

export default Personnel;