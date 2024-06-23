import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import LenanaSiteCarousel from "../../components/carousel/LenanaSite";

const LenanaProject = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>LenanaProject - Finite Element Designs Ltd</title>
                    <meta name="" content="" />
                </Helmet>
            </div>
            <NavBar />
            <section className="mt-16 md:mt-20 lg:mt-0">
                <div className="text-3xl md:w-3/4 w-[90%] mx-auto text-black/50 my-4 md:my-10">
                    <h1>Projects</h1>
                </div>
                <LenanaSiteCarousel />
                <body className="md:w-3/4 w-[90%] mx-auto my-5">
                    <h1 className="text-2xl text-blue-900">| Project Description</h1>
                </body>
            </section>
            <Footer />
        </>
    );
}

export default LenanaProject;