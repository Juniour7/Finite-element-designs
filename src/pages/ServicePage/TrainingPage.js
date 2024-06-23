import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/scrollToTop";


//Service Page Layout
const Training = () => {
    return (
        <>  
            <div>
                <Helmet>
                    <title>Engineering Training - Finite Element Designs Ltd</title>
                    <meta 
                        name="Structural Enfineering Training" 
                        content="" 
                    />
                </Helmet>
            </div>
            <NavBar />
            <section className="bg-gray-50 pb-5 mt-16 md:mt-20 lg:mt-0">
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-64"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-3xl md:text-5xl font-bold text-about-400">Engineering Training</h1>
                        <h4 data-aos="zoom-in" data-aos-duration="2000" className="text-md font-semibold text-about-200 mt-7">Find out more about the variety of services we offer.</h4>
                    </div>
                </div>
                <body className="w-5/6 mx-auto leading-relaxed">
                    <h1 data-aos="fade-up" data-aos-duration="3000" className="text-2xl lg:text-3xl text-center font-bold text-about-600 my-3">Engineering Training Services</h1>
                    <div data-aos="fade-up" data-aos-duration="3000" className="text-center">
                        <p>
                            Finite element Designs limited offers a wide range of trainings in the field of civil and structural engineering. Eng. Phares O. Atai, the lead trainer is certified by Prokon International, brings unparalleled expertise to the field of engineering training and 
                            certification in East and Central Africa. We specialize in imparting essential skills and knowledge to engineers and structural engineering firms, particularly focusing on the utilization of cutting-edge software and industry best practices.
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 data-aos="fade-up" data-aos-duration="3000" className="text-md lg:text-lg font-bold text-about-600 mt-4">Prokon Software Training</h2>
                        <p data-aos="fade-up" data-aos-duration="3000" className="">
                            We conduct Prokon software training sessions, certified by Prokon International, aimed at enhancing the proficiency of engineers in East and Central Africa. Prokon software is renowned for its comprehensive suite of tools for structural analysis, design, and
                            detailing. Through these training sessions, engineers gain hands-on experience in utilizing Prokon software to efficiently model, analyze, and design complex structural systems.
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 data-aos="fade-up" data-aos-duration="3000" className="text-md lg:text-lg font-bold text-about-600 mt-4">Structural Modelling in 3D</h2>
                        <p data-aos="fade-up" data-aos-duration="3000">
                            In addition to Prokon software training, Finite Element Designs Limited specializes in 3D structural modelling. This advanced training equips engineers with the skills needed to create accurate and detailed 3D models of structural systems, enabling them to visualize and
                            analyze projects with greater precision and efficiency.
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 data-aos="fade-up" data-aos-duration="3000" className="text-md lg:text-lg font-bold text-about-600 mt-4">Structural Detailing using Padds</h2>
                        <p data-aos="fade-up" data-aos-duration="3000" >
                            Finite Element Designs Limited also offers training in Parametric Drawing and Detailing System (Padds), a powerful software tool for structural detailing. Through hands-on workshops, engineers learn how to leverage Padds to create precise and detailed drawings of structural components, 
                            ensuring clarity and accuracy in construction documentation.
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 data-aos="fade-up" data-aos-duration="3000" className="text-md lg:text-lg font-bold text-about-600 mt-4">Project Management Training</h2>
                        <p data-aos="fade-up" data-aos-duration="3000">
                            We also provide comprehensive training programs in project management, both in-person and online, to equip engineers with the essential skills needed to successfully manage engineering projects from inception to completion. These training sessions cover project planning, scheduling, budgeting,
                            risk management, and communication, empowering engineers to effectively lead and execute projects with confidence.
                        </p>
                    </div>
                    <div className="mb-6 text-center">
                        <h2 data-aos="fade-up" data-aos-duration="3000" className="text-md lg:text-lg font-bold text-about-600 mt-4">Assistance with Engineering Board Registration</h2>
                        <p data-aos="fade-up" data-aos-duration="3000">
                            We offer support and guidance to graduate engineers preparing for registration with the Engineers Board of Kenya. Through personalized coaching and preparatory workshops, Eng.Phares O. Atai helps engineers navigate the registration process, ensuring compliance with regulatory requirements and facilitating 
                            their transition into the professional engineering community.
                        </p>
                    </div>
                </body>
                <ScrollToTop />
            </section>
            <Footer />
        </>
    );
}

export default Training;