import React from "react";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import KileleshwaCarousel from "../../components/carousel/KileleshwaCarousel";

const KileleshwaProject = () => {
    return (
        <>
            <NavBar />
            <section className="text-3xl md:w-3/4 w-[90%] mx-auto text-black/50 my-4 md:my-10">
                <h1>Projects</h1>
            </section>
            <KileleshwaCarousel />
            <body className="md:w-3/4 w-[90%] mx-auto my-5">
                <h1 className="text-2xl text-blue-900">| Project Description</h1>
                <div className="my-7 text-md text-black">
                    <p>Finite Element Designs Limited provided design, supervision and project management services for a 15-storey residential apartment complex. </p>
                    <p>Reaffirming our proficiency in high-rise construction and structural integity.</p>
                </div>
            </body>
            <Footer />
        </>
    );
}

export default KileleshwaProject;