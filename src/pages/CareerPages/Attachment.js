import React, {useState} from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

//components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";

const Attachment = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "aab44f6b-e356-408d-a17a-100f4ac9d58f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <div>
                <Helmet>
                    <title>Industrial Attachment - Finite Element Designs Ltd</title>
                    <meta 
                        name="Industrial Attachment" 
                        content="Finite Element Designs Ltd offers industrial attachment opportunities for students that have not completed their course work." 
                    />
                </Helmet>
            </div>
            <NavBar />
            <section className="bg-gray-200 pb-10 mt-16 md:mt-20 lg:mt-0">
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-72"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1504607798333-52a30db54a5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-4xl md:text-5xl font-bold text-white/100">Industrial Attachment</h1>
                        <h4 data-aos="zoom-in" data-aos-duration="2000" className="text-md text-gray-300 mt-7">Finite Element Designs Ltd offers industrial attachment opportunities in various areas to help you grow and expand your career.</h4>
                    </div>
                </div>
                <body className="bg-white w-[90%] md:w-[80%] mx-auto justify-center p-2 md:p-5 mt-10">
                    <div className="leading-relaxed">
                        <h2 data-aos="fade-up" data-aos-duration="3000">Finite Element Designs Ltd offers industrial attachment opportunities for students that have not completed their course work.</h2>
                        <h2 data-aos="fade-up" data-aos-duration="3000">The following conditions apply:</h2>
                        <ol data-aos="fade-right" data-aos-duration="2000"  className="list-disc ml-5 text-black text-md">
                            <li>The student must be in session in their respective institution pursuing a Bachelors Degree or Diploma in the field of Civil & Structural Engineering from an accredited learning instituion.</li>
                            <li>A letter from the institution has to be provided.</li>
                            <li>Attachment period is (3)three months.</li>
                            <li>Be available full time for the duration of the program (3 months).</li>
                        </ol>
                        <h1 data-aos="fade-up" data-aos-duration="3000">How to apply? Fill the form below and we will get back to you.</h1>
                    </div>
                    <form  className="my-6" onSubmit={onSubmit}>
                        <h1 className="text-xl font-semibold mb-5">Apllicant's Details</h1>
                        <div className="md:flex flex-wrap gap-2">
                            <input type="text" name="First Name" id="name" placeholder="First Name" className="bg-gray-100 md:w-[400px] w-full px-3 py-2 mb-3 focus:outline-none" required/>
                            <input type="text" name="Middle Name"id="name"  placeholder="Middle Name" className="bg-gray-100 md:w-[400px] w-full px-3 py-2 mb-3 focus:outline-none" required/>
                            <input type="text" name="Surname" id="name" placeholder="Last Name" className="bg-gray-100 md:w-[400px] w-full px-3 py-2 mb-3 focus:outline-none" required/>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <input type="number" name="Phone Number" placeholder="Phone Number" className="bg-gray-100 md:w-[400px] w-full block px-3 py-2 mb-3 focus:outline-none" required/>
                            <input type="email" name="email" placeholder="Email Address" className="bg-gray-100 md:w-[400px] w-full block px-3 py-2 mb-3 focus:outline-none" required/>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <input type="text" name="institution" placeholder="Name of Institution" className="bg-gray-100 md:w-[400px] w-full px-3 py-2 mb-3 focus:outline-none" required/>
                            <input type="text" name="Course Name" placeholder="Course Name" className="bg-gray-100 md:w-[400px] w-full px-3 py-2 mb-3 focus:outline-none" required/>
                            <input type="number" name="current year" placeholder="Year of Study" className="bg-gray-100 md:w-[150px] w-full px-3 py-2 mb-3 focus:outline-none" required/>
                        </div>
                        <label className="">Upload Letter</label>
                        <input type="file" name="attachment" className="block cursor-pointer" />
                        <input type="submit" data-aos="zoom-in" data-aos-duration="2000" value="submit" className="bg-blue-900 my-5 px-5 py-2 text-xl rounded-md text-white cursor-pointer hover:bg-black/50 hover:text-white duration-300"/>
                    </form>
                </body>
            </section>
            <Footer />
        </>
    );
}

export default Attachment;