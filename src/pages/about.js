import React from "react";
import SEO from "../components/SEO";


//Components
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";


//About Page Layout
const About = () => {
    return (
        <>
            <div>
                <SEO
                    title='About Us - Finite Element Designs Ltd'
                    description='Finite Element Designs Limited, established in January 2015, epitomizes a legacy of excellence in civil and structural engineering.
                    The company has thrived under the stewardship of the Managing Director Eng. Phares Orina Atai, a structural engineer with engineering experience over 18 years of postgraduate experience and a corporate member of the institution of the engineers of Kenya and a Professional and practicing engineer registered with the engineers board of Kenya (EBK).'
                />
            </div>
            <NavBar />
            <section className="mt-16 md:mt-20 lg:mt-0">
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-64"
                    style={{backgroundImage: "url(https://www.oraro.co.ke/wp-content/uploads/2020/03/Web-32.png)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-3xl md:text-5xl font-bold text-white/100">About Us</h1>
                        <h4 data-aos="zoom-in" data-aos-duration="2000" className="text-md text-gray-300 mt-7">Find out about who we are, what we do and the team that makes it happen.</h4>
                    </div>
                </div>
                <body className="md:w-2/3 w-[88%] leading-relaxed text-center lg:text-left mx-auto py-5">
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-offset="200" className="text-md text-black/150 mb-3">Finite Element Designs Limited is a registered company in Kenya offering consultancy services for civil engineering and structural engineering works and services with the highest integrity, knowledge, and experience level.</p>
                    <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-2xl text-center text-about-700 font-semibold">Our History</h1>
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-md text-black/75">Finite Element Designs Limited, established in January 2015, epitomizes a legacy of excellence in civil and structural engineering.</p>
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-md text-black/75 mb-3">
                        The company has thrived under the stewardship of the Managing Director Eng. Phares Orina Atai, a structural engineer with engineering experience over 18 years of postgraduate experience and a corporate member 
                        of the institution of the engineers of Kenya and a Professional and practicing engineer registered with the engineers board of Kenya (EBK).
                    </p>
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-md text-black/75 mb-3">
                        Since its inception, Finite Element Designs Limited has been a trailblazer in pioneering structural design methodologies, embracing cutting-edge technologies such as Prokon software and Finite Element numerical 
                        methods to deliver efficient and accurate engineering solutions.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000"  className="text-md text-black/75 mb-3">
                        The company's diverse portfolio includes civil engineering, structural design, road design, engineering consultancy, project management, and design-build services across various sectors. Our projects range from residential and commercial buildings to industrial structures and infrastructure development. One notable project is the Rugsan Mall in Mogadishu, completed in 2014, where Finite Element Designs Limited served as the structural
                        engineer and project manager, overseeing all aspects of the project until its successful completion.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className="text-md text-black/75 mb-3">
                        Until the drafting of this document, Rugsan Mall stood as the largest shopping complex in the Federal Republic of Somalia. Moreover, Finite Element Designs Limited demonstrated their capabilities as civil and structural engineers and project managers for the Uplands Premium Dairies and Foods Industries in Kagwe Githunguri, highlighting their proficiency in overseeing extensive
                        construction projects and structural design. This is just one example of their numerous successful endeavors in the field.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000"  className="text-md text-black/75 mb-3">
                         Finite Element Designs Limited remains committed to continuous improvement and knowledge sharing. The Company has conducted numerous training sessions and workshops, locally and internationally, imparting invaluable skills and expertise to emerging engineers and industry professionals. Notable among these training sessions are those held 
                        for university master's students in JKUAT in the year 2018, studying structural engineering, focusing on areas such as Finite Element Analysis (FEA). Also the company’s main director is an accredited trainer for East and Central Africa by Prokon international to train prokon software to engineers and engineering isntitutions around the region.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000"  className="text-md text-black/75 mb-3">
                        As the company continues to evolve, its dedication to excellence, innovation, and professional integrity remains unwavering, solidifying its position as a trusted leader in the field of civil and structural engineering.
                    </p>
                    <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000"  className="text-[#F0B323] text-2xl font-semibold text-center my-5">Vision, Mission and Values</h1>
                    <div>
                        <div data-aos="zoom-out" data-aos-duration="3000" data-aos-delay="1000"  data-aos-offset="300" className="w-full h-[300px] md:h-[390px] lg:h-[650px]">
                            <img src={require('../Assets/Media/corevalues.jpg')} alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-2xl text-about-700 text-center">Our Vision</h1>
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-md text-center text-black/75 mb-7">To be a world-leading company in engineering design, technological innovation, engineering management, steel fabrication and training in the construction industry.</p>
                    <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-2xl text-about-700  text-center">Our Mission</h1>
                    <ol data-aos="fade-right" data-aos-delay="1500" data-aos-duration="2000" className="text-md list-disc mb-7">
                        <li className="text-center lg:text-left">Offer quality service in design, construction, and engineering training.</li>
                        <li className="text-center lg:text-left">Maintain high levels of professionalism and integrity in the construction industry</li>
                        <li className="text-center lg:text-left">Develop engineering capacity in the construction industry.</li>
                        <li className="text-center lg:text-left"> Improve levels of innovation and technology used in the construction industry both locally and globally. </li>
                    </ol>
                    <div className="text-center lg:text-left text-gray-500 md:text-black/75 text-md">
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="mb-0 ">
                            <h1 className="text-2xl text-about-700  text-center">Core Values</h1>
                        </div>
                        <div className="mb-3">
                            <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-xl text-black font-semibold">Quality Service</h3>
                            <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200">Finite Element Designs Ltd is committed to meeting or exceeding our clients' expectations, with great attention to detail. </p>
                        </div>
                        <div className="mb-3">
                            <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-xl text-black font-semibold">Integrity</h3>
                            <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200">We offer our services with the highest level of integrity by maintaining consistency of actions, values, methods, measures, and principles. We adhere to ethical principles and soundness of character and judgment in everything.</p>
                        </div>
                        <div className="mb-3">
                            <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-xl text-black font-semibold">Innovation</h3>
                            <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200">We develop and apply world-class technology by listening, learning, and seeking new ideas. We attack complacency and continually improve.</p>
                        </div>
                        <div className="mb-3">
                            <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-xl text-black font-semibold">Team Work</h3>
                            <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200">Our team is equipped with the best knowledge and experience to deliver work according to the standards. They are competent at what they do and understand the importance of teamwork.</p>
                        </div>
                        <div>
                            <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200" className="text-xl text-black font-semibold">Efficiency</h3>
                            <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="200">We aim to obtain the best possible outcome in the least wasteful manner by maintaining relevant up-to-date and dynamic procedures and policies while consistently supporting a quality workforce. We provide ongoing training for our 
                                workforce and utilize best practices for time management.
                            </p>
                        </div>
                    </div>
                </body>
            </section>
            <Footer />
        </>
    );
}

export default About;