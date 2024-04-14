import React from "react";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import RichmondSuitesCarousel from "../../components/carousel/RichmondSuites";

const RichmondSuitesProject = () => {
    return (
        <>
            <NavBar />
            <section className="text-3xl md:w-3/4 w-[90%]  mx-auto text-black/50 my-4 md:my-10">
                <h1>Projects</h1>
            </section>
            <RichmondSuitesCarousel />
            <body className="md:w-3/4 w-[90%]  mx-auto my-5">
                <h1 className="text-2xl text-blue-900">| Project Description</h1>
                <div className="my-7 md text-md text-balck/100">
                    <p>Finite Element Designs Ltd provided design and supervision services foor a 7-storey residential apartment complex, demonstarting our proficiency in high-rise construction and structural integrity.</p>
                </div>
            </body>
            <Footer />
        </>
    );
}

export default RichmondSuitesProject;