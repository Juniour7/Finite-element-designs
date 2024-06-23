import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/scrollToTop";


//Service Page Layout
const SteelFab = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Steel Fabrication - Finite Element Designs Ltd</title>
                    <meta 
                        name="Steel Fabrication" 
                        content="Finite Element Designs Limited is your trusted partner for premium steel fabrication services, delivering precision, quality, and compliance with the highest industry standards and codes. Our dedication to excellence ensures that your structural components and assemblies are meticulously crafted to meet your exact design specifications, resulting in superior performance, durability, and aesthetic appeal. Our facilities are designed to handle projects of varying complexities and scales." 
                    />
                </Helmet>
            </div>
            <NavBar />
            <section className="bg-gray-50 pb-5 mt-16 md:mt-20 lg:mt-0">
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-64"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1613970351372-9804e380bd09?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-3xl md:text-5xl font-bold text-white">Steel Fabrication Excellence</h1>
                        <h4 data-aos="zoom-in" data-aos-duration="2000" className="text-md font-semibold text-about-300 mt-7">Find out more about the variety of services we offer.</h4>
                    </div>
                </div>
                <body className="w-5/6 mx-auto leading-relaxed">
                    <p data-aos="fade-up" data-aos-duration="3000" className="text-md my-4 text-center lg:text-left">
                        Finite Element Designs Limited is your trusted partner for premium steel fabrication services, delivering precision, quality, and compliance with the highest industry standards and codes. Our dedication to excellence ensures that your structural components and assemblies are meticulously crafted to meet your exact design specifications, resulting in superior performance, durability, and aesthetic appeal.                      
                        Our facilities are designed to handle projects of varying complexities and scales. From cutting and welding to shaping and finishing, our skilled fabricators utilize the latest tools and techniques to produce steel components with exceptional accuracy and efficiency.
                    </p>
                    <div className="text-md my-3 text-center lg:text-left">
                        <h2 data-aos="fade-up" data-aos-duration="3000" className="font-bold text-xl text-about-600 ">Experienced Fabrication Team</h2>
                        <p data-aos="fade-up" data-aos-duration="3000">
                            At Finite Element Designs Limited, our fabrication team consists of highly trained and experienced professionals who are committed to delivering excellence in every project. With years of expertise in steel fabrication, our team possesses the technical know-how and 
                            attention to detail required to ensure that your structural components are fabricated to the highest standards of quality and precision.
                        </p>
                    </div>
                    <div className="text-md my-3 text-center lg:text-left">
                        <h2 data-aos="fade-up" data-aos-duration="3000" className="font-bold text-xl text-about-600 ">Customized Solutions</h2>
                        <p data-aos="fade-up" data-aos-duration="3000">
                            We understand that every project is unique, which is why we offer customized fabrication solutions tailored to your specific requirements. Whether you need standard 
                            structural beams and columns or intricate architectural features, our team works closely with you to develop bespoke fabrication solutions that meet your design intent, budget, and timeline.
                        </p>
                    </div>
                    <div className="text-md my-3 text-center lg:text-left">
                        <h2 data-aos="fade-up" data-aos-duration="3000" className="font-bold text-xl text-about-600">Quality Assurance</h2>
                        <p data-aos="fade-up" data-aos-duration="3000">
                            Quality is at the forefront of everything we do at Finite Element Designs Limited. From the selection of materials to the final inspection of finished components, we adhere to stringent quality control processes to ensure that our steel fabrication meets or exceeds industry standards and codes. Our commitment to quality assurance guarantees that your fabricated components are built to last, withstand environmental factors, and perform reliably under demanding conditions.
                        </p>
                    </div>
                    <div className="text-md my-3 text-center lg:text-left">
                        <h2 data-aos="fade-up" data-aos-duration="3000" className="font-bold text-xl text-about-600">Compliance and Safety</h2>
                        <p data-aos="fade-up" data-aos-duration="3000">
                            Safety is paramount in steel fabrication, and we prioritize compliance with relevant safety regulations and standards to protect our employees, clients, and the environment. Our fabrication processes are conducted with strict adherence to safety protocols, and we continuously invest in training and education to ensure that our team remains up-to-date on the latest safety practices and procedures.
                        </p>
                    </div>
                    <div className="text-md my-3 text-center lg:text-left">
                        <h2 data-aos="fade-up" data-aos-duration="3000" className="font-bold text-xl text-about-600">Timely Delivery</h2>
                        <p data-aos="fade-up" data-aos-duration="3000">
                            At Finite Element Designs Limited, we understand the importance of timely project delivery. Our streamlined fabrication processes, combined with efficient project management and logistics, enable us to meet even the tightest deadlines
                            without compromising on quality. Whether you require just-in-time delivery or phased fabrication schedules, you can rely on us to deliver your steel components on time and within budget.
                        </p>
                    </div>
                </body>
                <ScrollToTop />
            </section>
            <Footer />
        </>
    );
}

export default SteelFab;