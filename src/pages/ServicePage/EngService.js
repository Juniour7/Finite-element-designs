import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/scrollToTop";


//Service Page Layout
const EngService = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Civil & Structural Engineering - Finite Element Designs Ltd</title>
                    <meta 
                        name="Civil & Structural Engineering" 
                        content="We undertake planning, design, construction supervision and maintenance management of building structures, substation structures, bridges and other major road drainage and water retaining structures." 
                    />
                </Helmet>
            </div>
            <NavBar />
            <section className="bg-gray-50 pb-5 mt-16 md:mt-20 lg:mt-0">
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-64"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1490775949603-0e355e8e01ba?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-3xl md:text-4xl font-bold text-white">Civil & Structural Engineering Services</h1>
                        <h4 data-aos="zoom-in" data-aos-duration="2000" className="text-md font-semibold text-gray-300 mt-7">Find out more about the variety of services we offer.</h4>
                    </div>
                </div>
                <body className="w-5/6 mx-auto">
                    <div className="text-md text-black/100 leading-relaxed">
                        <h1 data-aos="fade-up" data-aos-duration="3000" className="text-2xl font-bold my-3 md:mt-5 text-about1-900">Structural Engineering Services</h1>
                        <p data-aos="fade-up" data-aos-duration="3000" className="my-2 text-xl text-black/100">Finite Element Designs Limited is responsible for structural engineering design and structural analysis.</p>
                        <p data-aos="fade-up" data-aos-duration="3000">We undertake planning, design, construction supervision and maintenance management of building structures, substation structures, bridges and other major road drainage and water retaining structures.</p>
                        <p data-aos="fade-up" data-aos-duration="3000">We build structures such as:</p>
                        <ol data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" data-aos-delay="2000" className="ml-10 mx-auto list-disc">
                            <li>High-rise Buildings</li>
                            <li>Offices</li>
                            <li>Institutions/Schools/Hospitals</li>
                            <li>Bridges</li>
                            <li>Residential development</li>
                            <li>Industrial, Warehouses, Workshops</li>
                        </ol>
                         
                    </div>
                    <div className="text-md text-black/100 leading-relaxed mt-5 mb-4">
                        <h1 data-aos="fade-up" data-aos-duration="3000" className="text-2xl font-bold mt-5 text-about1-900">Civil Engineering Services</h1>
                        <p data-aos="fade-up" data-aos-duration="3000">We deal with planning, design, construction supervision and maintanance of:</p>
                        <ol data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" data-aos-delay="2000" className="ml-10 mx-auto list-disc">
                            <li>Access Roads</li>
                            <li>Water Supply</li>
                            <li>Sewerage</li>
                            <li>Storm Water Drainage</li>
                        </ol>
                        <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="2000">As well as planning, design, construction supervision and maintanace of site and service schemes and infastructural services for substations, industrial, commercial and residential developments.</p>
                        <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="2000">We deal with the following areas:</p>
                        <ol data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" data-aos-delay="3000" className="ml-10 mx-auto list-disc">
                            <li>Water supply network</li>
                            <li>Water treatment plants</li>
                            <li>Waste water collection and treatment</li>
                            <li>Storm water drainage management</li>
                            <li>Roads and transportation engineering</li>
                        </ol>
                    </div>
                </body>
                <ScrollToTop />
            </section>
            <Footer />
        </>
    );
}

export default EngService;