import React from "react";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import KeyWestCarousel from "../../components/carousel/KeyWestCarousel";

const KeyWestProject = () => {
    return (
        <>
            <NavBar />
            <section className="text-3xl md:w-3/4 w-[90%] mx-auto text-black/50 my-4 md:my-10">
                <h1>Projects</h1>
            </section>
            <KeyWestCarousel />
            <body className="md:w-3/4 w-[90%] mx-auto my-5">
                <h1 className="text-2xl text-blue-900">| Project Description</h1>
            </body>
            <Footer />
        </>
    );
}

export default KeyWestProject;