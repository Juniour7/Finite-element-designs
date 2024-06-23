import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/scrollToTop";


//Service Page Layout
const Consultancy = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Structural Design- Finite Element Designs Ltd</title>
                    < meta 
                        name="Structural Design Consultancy"
                        content="Finite Element Designs Limited offers comprehensive structural design consultancy and site supervision services across a wide range of sectors and project types. With a team of experienced structural engineers and construction professionals, we provide expert guidance and support throughout every stage of your project, ensuring that your vision becomes a reality."
                    />
                </Helmet>
            </div>
            <NavBar />
            <section className="bg-gray-50 pb-5 mt-16 md:mt-20 lg:mt-0">
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-64"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1493476523860-a6de6ce1b0c3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-3xl md:text-4xl font-bold text-white/100">Structural Design Consultancy</h1>
                        <h4 data-aos="zoom-in" data-aos-duration="2000" className="text-md font-semibold text-gray-300 mt-7">Find out more about the variety of services we offer.</h4>
                    </div>
                </div>
                <body className="w-5/6 mx-auto text-md text-black/55 leading-relaxed">
                    <h1 data-aos="fade-up" data-aos-duration="2000" className="text-xl md:text-2xl text-center lg:text-left font-bold mt-5 text-about1-900">Structural Design Consultancy & Site Supervision</h1>
                    <p data-aos="fade-up" data-aos-duration="2000" className="my-4 text-md text-black/100">
                        Finite Element Designs Limited offers comprehensive structural design consultancy and site supervision services across a wide range of sectors and
                        project types. With a team of experienced structural engineers and construction professionals, we provide expert guidance and support throughout every stage of your project, ensuring that your vision becomes a reality.
                    </p>
                    <div className="text-md">
                        <h3 data-aos="fade-up" data-aos-duration="2000" className=" text-black/100 mb-3">Our services cover various areas, including:</h3>
                        <ol className=" ml-5">
                            <l1 className="text-black/100 font-bold">Private Housing Projects: 
                                <p data-aos="fade-right" data-aos-duration="3000" className="text-md  text-gray-600 ml-5 font-light">
                                    Whether you're building your dream home or developing a residential complex, our team provides tailored structural design solutions to meet your specific requirements. From small-scale renovations to large-scale
                                    developments, we ensure that your project is structurally sound, aesthetically pleasing, and built to last.
                                </p>
                            </l1>
                            <li className="text-black/100 font-bold">Bridges:
                                <p data-aos="fade-right" data-aos-duration="3000" className="text-md text-gray-600 ml-5 font-light">
                                    From pedestrian footbridges to large-span vehicular bridges, we have the expertise to design safe and efficient bridge structures that meet the demands of modern infrastructure projects. Our team considers 
                                    factors such as traffic loads, environmental conditions, and geological characteristics to deliver innovative and cost-effective bridge designs.
                                </p>
                            </li>
                            <li className="text-black/100 font-bold">Warehouses:
                                <p data-aos="fade-right" data-aos-duration="3000" className="text-md text-gray-600 ml-5 font-light">
                                    Efficient structural design is crucial for the construction of warehouses and industrial facilities. We specialize in designing warehouse structures that optimize space utilization, support heavy loads, and provide 
                                    a safe and functional working environment. Whether you need a single-story warehouse or a multi-story distribution center, we can deliver tailored solutions to meet your needs.
                                </p>
                            </li>
                            <li className="text-black/100 font-bold">Steel Structures:
                                <p data-aos="fade-right" data-aos-duration="3000" className="text-md text-gray-600 ml-5 font-light">
                                    Steel is a versatile and durable building material commonly used in a wide range of structures, from commercial buildings to industrial facilities. Our team has extensive experience in designing steel structures that 
                                    are both practical and visually striking. Whether you're constructing a steel-framed office building, a manufacturing facility, or a sports arena, we can provide innovative design solutions that maximize performance and efficiency.
                                </p>
                            </li>
                        </ol>
                    </div>
                    <p data-aos="fade-up" data-aos-duration="2000" className="text-md text-black/100 my-3">
                        In addition to our design expertise, we offer comprehensive site supervision services to ensure that construction activities proceed smoothly and safely. Our site supervisors work closely with contractors, subcontractors, and other stakeholders
                        to verify compliance with design specifications, quality standards, and regulatory requirements.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="2000" className="text-md text-black/100 mb-2">
                        Choose Finite Element Designs Limited for all your structural design consultancy and site supervision needs. Contact us today to learn more about our services and how we can help bring your vision to life.
                    </p>
                </body>
                <ScrollToTop />
            </section>
            <Footer />
        </>
    );
}

export default Consultancy;