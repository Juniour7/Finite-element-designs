import React from "react";
import SEO from "../components/SEO";


//components
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";


//Contact Page Layout
const Contact = () => {
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

    //Google Maps API
    // const { isLoaded, loadError } = useLoadScript({
    //     googleMapsApiKey: 'AIzaSyCdh4xxLtmJsc9qAalZFZQGODjMa3OsCYg',
    //     libraries,
    // }); 

    // if (loadError) {
    //     return <div>Error loading maps</div>;
    // }
    // if (!isLoaded) {
    //     return <div>Loading maps</div>;
    // }

    return (
        <>
            <div>
                <SEO
                    title='Contact Us - Finite Element Designs Ltd'
                    description='Find us at Kahawa Wendani Along Thika Road Deep Blue Building, 2nd Floor Room 32'
                />
            </div>
            <NavBar />
            <section className="mt-16 md:mt-20 lg:mt-0">
                <div className="bg-fixed bg-center bg-cover bg-no-repeat w-full h-72"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1653289755854-a41949e96282?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="ml-5 py-20">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-4xl text-blue-500 font-bold py-auto">Contact Us</h1>
                        <h2 data-aos="zoom-in" data-aos-duration="2000" className="text-md font-semibold text-about-200 mt-7">Reach out and we will get back to you as soon as possible.</h2>
                    </div>  
                </div>
                <body className="mx-auto w-[90%] mt-7 lg:flex lg:justify-evenly">
                    <div className="leading-loose">
                            <h1 className="text-2xl font-semibold text-blue-200 mb-7">Get In Touch</h1>
                            <p className="text-md">Fill the form below and we will get back to you as soon as possible.</p>
                        
                        <form onSubmit={onSubmit} className="w-[90%] mb-5">
                            <label>Full Name*</label>
                            <input type="text" name="user_name" className="border-2 focus:outline-none px-4 py-3 mb-5 w-full block text-sm" required/>
                            <label>Email Address*</label>
                            <input type="email" name="user_email" className="border-2 focus:outline-none px-4 py-3 mb-5 w-full block text-sm" required/>
                            <label>Phone Number</label>
                            <input type="number" name="phone number" className="border-2 focus:outline-none px-4 py-3 mb-5 w-full block text-sm"/>
                            <label>Inquiry*</label>
                            <textarea name="message" rows="6" className="border-2 focus:outline-none px-4 py-3 mb-5 w-full block text-sm" required/>
                            <input type="submit" data-aos="zoom-in" data-aos-duration="1000" value="Send Inquiry" className="px-4 py-2 border-1 bg-blue-200 text-back/150 font-bold hover:bg-gray-500 hover:text-gray-950 cursor-pointer focus:outline-none"/>
                        </form>
                    </div>
                    <div>
                        <div className="w-90%">
                            <h1 className="text-2xl font-semibold text-blue-200 mb-7">Our Location</h1>
                            <p className="text-md mb-5">Here you can find the pinned location of our office.</p>
                            <div data-aos="zoom-out" data-aos-duration="3000" className="h-64 md:h-96 md:w-[600px]">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.948411611083!2d36.920197726953106!3d-1.196480999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fba2970841f%3A0x27284ed0bb076d86!2sMagunas%20Supermarket%20Kahawa%20Wendani!5e0!3m2!1sen!2ske!4v1711442805610!5m2!1sen!2ske" 
                                    className="w-full h-full" 
                                    style={{border:0}} 
                                    allowfullscreen
                                />
                            </div>
                        </div>
                        <div className="bg-white">
                            <h1 className="text-2xl font-semibold text-blue-200 my-5">Contact Details</h1>
                            <div className="flex gap-5 my-3">
                                <div className="w-12 h-12 shadow-xl hover:cursor-pointer hover:scale-110 ease-in-out">
                                    <a href="https://wa.me/+254772041005" target="_blank">
                                        <img src="https://as1.ftcdn.net/v2/jpg/05/32/20/62/1000_F_532206245_N1xYEHrZVIWU1ihamWwmDbh1gZWGU7Jl.webp" alt="Whatsapp Logo" className="w-full h-full"/>
                                    </a>
                                </div>
                                <a href="https://wa.me/+254772041005" target="_blank" className="my-auto">
                                    <h3 className="text-md font-semibold text-about-800  hover:text-about-300 hover:cursor-pointer hover:font-bold">+254772041005</h3>
                                </a>
                            </div>
                            <div className="flex gap-5 my-3">
                                <div className="w-12 h-10 shadow-xl">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/640px-Gmail_icon_%282020%29.svg.png" alt="Whatsapp Logo" className="w-full h-full"/>
                                </div>
                                <h3 className="text-md font-semibold text-about-800 my-auto">finiteelementdesignsltd@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </body>
            </section>
            <Footer />
        </>
    );
}

export default Contact;