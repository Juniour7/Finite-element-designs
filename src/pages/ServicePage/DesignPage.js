import React from "react";

//Components
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";


//Service Page Layout
const DesignBuild = () => {
    return (
        <>
            <NavBar />
            <section>
                <div className="bg-fixed bg-cover bg-center bg-no-repeat w-full h-64"
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className="mx-10 py-10">
                        <h1 className="text-3xl md:text-5xl font-bold text-white/100">Design Build</h1>
                        <h4 className="text-md font-semibold text-gray-300 mt-7">Find out more about the variety of services we offer.</h4>
                    </div>
                </div>
                <body className="w-5/6 mx-auto leading-relaxed">
                    <h1 className="text-2xl font-bold text-about-800 my-4">Design Build Services in Concrete & Steel</h1>
                    <div className="text-md">
                        <p>
                            Finite Element Designs Limited offers comprehensive design-build services for projects involving concrete and steel structures. With expertise in both structural engineering and construction, we provide 
                            integrated solutions that streamline project delivery from conceptual design to construction, ensuring efficiency, cost-effectiveness, and quality at every stage.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-about-800 mt-4">Conceptual Design</h2>
                        <p className="text-md md:w-[85%]">
                            Our design-build process begins with a collaborative conceptual design phase, where our team works closely with clients to understand their vision, objectives, and project requirements. Leveraging our engineering 
                            expertise and creativity, we develop innovative design concepts that balance aesthetic appeal, functionality, and structural integrity.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-about-800 mt-4">Engineering Expertise</h2>
                        <p className="text-md md:w-[85%]">
                            Finite Element Designs Limited boasts a team of experienced structural engineers who specialize in designing concrete and steel structures. Using advanced computational tools and analysis techniques, 
                            we develop detailed structural designs that optimize performance, durability, and safety while minimizing material usage and construction costs.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-about-800 mt-4">Construction Capabilities</h2>
                        <p className="text-md md:w-[85%]">
                            As a design-build firm, we have the unique advantage of combining engineering expertise with construction capabilities. Our skilled construction team is equipped to execute projects efficiently and effectively, ensuring that 
                            designs are translated into high-quality structures that meet or exceed client expectations. By integrating design and construction, we streamline project delivery, minimize coordination issues, and mitigate risks, resulting in faster timelines and cost savings for our clients.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-about-800 mt-4">Streamlined Project Delivery</h2>
                        <p className="text-md md:w-[85%]">
                            By offering design-build services, Finite Element Designs Limited provides clients with a single point of contact and accountability throughout the entire project lifecycle. From initial concept development to final construction, our team manages all
                            aspects of the project, including design, procurement, scheduling, and construction, ensuring seamless coordination and communication. This integrated approach not only simplifies the project management process but also accelerates delivery and reduces the likelihood of conflicts or delays.
                        </p>
                    </div>
                    <div className="mb-7">
                        <h2 className="text-xl font-bold text-about-800 mt-4">Quality Assurance</h2>
                        <p className="text-md md:w-[85%]">
                            At Finite Element Designs Limited, we are committed to delivering projects of the highest quality standards. Our design-build process incorporates rigorous quality assurance measures at every stage, from material selection and construction 
                            techniques to final inspections and commissioning. By adhering to industry best practices and regulatory requirements, we ensure that our concrete and steel structures are built to last, withstand environmental factors, and meet the needs of our clients for years to come.
                        </p>
                    </div>
                </body>
            </section>
            <Footer />
        </>
    );
}

export default DesignBuild;