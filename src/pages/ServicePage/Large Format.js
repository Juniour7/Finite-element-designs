import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/scrollToTop";


//Service Page Layout
const LargeFormat = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Large Format Printing - Finite Element Designs Ltd</title>
                    <meta 
                        name="Large Format Printing" 
                        content="Finite Element Designs Limited presents our cutting-edge Prograft Tx 3000 large format printing services, tailored to meet the specific needs of architects, engineers, and construction professionals.
                        With our state-of-the-art printing technology and commitment to quality, we offer unparalleled printing solutions for architectural and structural drawings, plans, and blueprints, facilitating documentation and visualization for projects of all sizes and complexities." 
                    />
                </Helmet>
            </div>
            <NavBar />
            <section className="bg-gray-50 pb-5 mt-16 md:mt-20 lg:mt-0">
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-64"
                    style={{backgroundImage: "url(https://lasercycleusa.com/wp-content/uploads/2022/03/impresion-gran-formato.jpg)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-3xl md:text-5xl font-bold text-white/100">Large Format Printing</h1>
                        <h4 data-aos="zoom-in" data-aos-duration="2000" className="text-md font-semibold text-gray-300 mt-7">Find out more about the variety of services we offer.</h4>
                    </div>
                </div>
                <body className="w-5/6 mx-auto">
                    <p data-aos="fade-up" data-aos-duration="2000" className="text-md text-center lg:text-left text-black mt-10">
                        Finite Element Designs Limited presents our cutting-edge Prograft Tx 3000 large format printing services, tailored to meet the specific needs of architects, engineers, and construction professionals.
                        With our state-of-the-art printing technology and commitment to quality, we offer unparalleled printing solutions for architectural and structural drawings, plans, and blueprints, facilitating documentation and visualization for projects of all sizes and complexities.
                    </p>
                    <div className="my-4 text-md text-center lg:text-left">
                        <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className="text-xl font-semibold text-about-500 ">Precision and Detail</h1>
                        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500">
                            Our Prograft Tx 3000 large format printer delivers exceptional precision and detail, ensuring that your architectural and structural drawings are reproduced with utmost clarity and accuracy. From intricate design elements 
                            to fine lines and annotations, our printing capabilities capture every detail with precision, enabling you to communicate your vision effectively to clients, stakeholders, and project teams.
                        </p>
                    </div>
                    <div className="my-4 text-md text-center lg:text-left">
                        <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100" className="text-xl font-semibold text-about-500">Versatility and Flexibility</h1>
                        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500">
                            With the ability to print on a wide range of media types and sizes, our large format printing services offer unparalleled versatility and flexibility to accommodate diverse project requirements. Whether you need oversized blueprints,
                            detailed renderings, or full-color presentations, our Prograft Tx 3000 printer can handle it all, providing you with the freedom to explore creative solutions and showcase your designs with confidence.
                        </p>
                    </div>
                    <div className="my-4 text-md text-center lg:text-left">
                        <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100" className="text-xl font-semibold text-about-500">Customized Solutions</h1>
                        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500">
                            At Finite Element Designs Limited, we understand that every project is unique, which is why we offer customized printing solutions tailored to your specific needs and preferences. Whether you require high-resolution prints for client presentations, 
                            durable prints for on-site reference, or archival prints for long-term documentation, our team works closely with you to deliver personalized printing solutions that meet your exact requirements.
                        </p>
                    </div>
                    <div className="my-4 text-md text-center lg:text-left">
                        <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100" className="text-xl font-semibold text-about-500">Fast Turnaround Times</h1>
                        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500">
                            We recognize the importance of timely project delivery, which is why we prioritize fast turnaround times for our large format printing services. Our efficient printing processes, combined with streamlined project management and logistics, 
                            ensure that your prints are produced quickly and efficiently without compromising on quality. Whether you need prints on short notice or as part of a larger project timeline, you can rely on us to deliver on time, every time.
                        </p>
                    </div>
                    <div className="my-4 text-md text-center lg:text-left">
                        <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100" className="text-xl font-semibold text-about-500">Quality Assurance</h1>
                        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500">
                            Quality is our top priority at Finite Element Designs Limited, and we take great care to ensure that every print meets the highest standards of quality and consistency. From color accuracy and print resolution to media durability 
                            and finish, our rigorous quality assurance processes guarantee that your prints are produced to the highest industry standards, providing you with confidence and peace of mind.
                        </p>
                    </div>
                    <div className="my-4 text-md text-center lg:text-left">
                        <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100" className="text-xl font-semibold text-about-500">Proffesional Expertise</h1>
                        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500">
                            Backed by a team of experienced printing professionals, we offer unparalleled expertise and support to ensure that your printing experience is seamless and hassle-free. Whether you 
                            need assistance with file preparation, print customization, or technical troubleshooting, our knowledgeable team is here to provide you with expert guidance and support every step of the way.
                        </p>
                    </div>
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1300" className="mb-5 text-md text-black text-center lg:text-left">
                        Choose Finite Element Designs Limited for superior large format printing services that combine precision, versatility, and reliability. Contact us today to 
                        learn more about our printing capabilities and discover how we can help bring your architectural and structural drawings to life with clarity, accuracy, and professionalism.
                    </p>
                </body>
                <ScrollToTop />
            </section>
            <Footer />
        </>
    );
}

export default LargeFormat;