import React from "react";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";


//Service Page Layout
const Management = () => {
    return (
        <>
            <NavBar />
            <section>
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-64"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 className="text-3xl md:text-5xl font-bold text-white/100">Project Management</h1>
                        <h4 className="text-md font-semibold text-gray-300 mt-7">Find out more about the variety of services we offer.</h4>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Management;