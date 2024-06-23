import React from "react";
import { Helmet } from "react-helmet-async";

//components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";

const Internship = () => {
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
                    <title>Internship - Finite Element Designs Ltd</title>
                    <meta 
                        name="Internship" 
                        content="We are looking for talented and motivated new interns who can contribute to the success of our company. " 
                    />
                </Helmet>
            </div>
            <NavBar />
            <section className="bg-gray-100 pb-7 mt-16 md:mt-20 lg:mt-0">
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-72"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1504607798333-52a30db54a5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-5xl font-bold text-white/100">Internship</h1>
                        <h4 data-aos="zoom-in" data-aos-duration="2000" className="text-md text-gray-300 mt-7">Finite Element Designs Limited offers you an opportunity to grow and expand your career.</h4>
                    </div>
                </div>
                <body className="bg-white w-[90%] md:w-[80%] mx-auto justify-center p-2 md:p-5 my-10">
                    <div data-aos="fade-up" data-aos-duration="3000" className="text-md text-about-800">
                        <p>We are looking for talented and motivated new interns who can contribute to the success of our company. Here you can find the positions that are currently open for application, if none you can as well apply in the position you desire to work in and once an opportunity arises we shall contact you.</p>
                    </div>
                    <div className="my-7">
                        <h1 data-aos="fade-right" data-aos-duration="2000" className="text-xl font-semibold text-about-800">Current Internship Openings</h1>
                        <ol data-aos="fade-right" data-aos-duration="3000" className="list-disc ml-5">
                            <li>Assistant Structural Engineer</li>
                            <li>Office Assistant</li>
                            <li>Assistant Civil Engineer</li>
                            <li>Steel Fabricator</li>
                            <li>Driver</li>
                            <li>Secretary</li>
                            <li>Draftsman</li>
                        </ol>
                    </div>
                    <form onSubmit={onSubmit} className="my-6">
                        <h1 className="text-xl text-about-800 font-semibold mb-5">Apllicant's Details</h1>
                        <div className="md:flex flex-wrap gap-2">
                            <input type="text" name="name" placeholder="First Name" className="bg-gray-100 md:w-[400px] w-full px-3 py-2 mb-3 focus:outline-none" required/>
                            <input type="text" name="name" placeholder="Middle Name" className="bg-gray-100 md:w-[400px] w-full px-3 py-2 mb-3 focus:outline-none" required/>
                            <input type="text" name="name" placeholder="Last Name" className="bg-gray-100 md:w-[400px] w-full px-3 py-2 mb-3 focus:outline-none" required/>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <input type="number" name="Phone Number" placeholder="Phone Number" className="bg-gray-100 md:w-[400px] w-full block px-3 py-2 mb-3 focus:outline-none" required/>
                            <input type="email" name="email" placeholder="Email Address" className="bg-gray-100 md:w-[400px] w-full block px-3 py-2 mb-3 focus:outline-none" required/>
                        </div>
                        <div className="flex flex-wrap gap-2 my-5">
                            <label for="position" className="text-md font-semibold text-about-700">Job Position</label>
                            <select id="position" name="position" className="bg-gray-100 px-3 py-2 cursor-pointer focus:outline-none">
                                <option value="Assistant civil engineer">Assistant Structural Engineer</option>
                                <option value="Office Assistant" >Office Assistant</option>
                                <option value="Assistant civil engineer">Assistant Civil Engineer</option>
                                <option value="Steel Fabricator">Steel Fabricator</option>
                                <option value="Driver" >Driver</option>
                                <option value="Secretary" >Secretary</option>
                                <option value="Draftsman" >Drastsman</option>
                            </select>
                        </div>
                        <label className="">Upload CV</label>
                        <input type="file" name="cv" className="block cursor-pointer" />
                        <input data-aos="zoom-in" data-aos-duration="2000" type="submit" value="submit" className="bg-blue-900 my-5 px-5 py-2 text-xl rounded-md text-white cursor-pointer hover:bg-black/50 hover:text-white duration-300"/>
                    </form>
                </body>
            </section>
            <Footer />
        </>
    );
}

export default Internship;