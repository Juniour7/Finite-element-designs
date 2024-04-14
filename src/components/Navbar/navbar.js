import React, {useState, Fragment } from "react";
import { Link } from "react-router-dom";

//Headless Ui for dropdown
import { Menu, Transition } from "@headlessui/react";

//Importing Icons
import { IoChevronDownSharp } from "react-icons/io5";

//importing SideBarData
import { SideBarData } from "./SideBar";

//dropdown function
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



//Menu For Mobile Screens
const MobileBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <nav className="bg-menu-500 flex justify-between w-full h-16">
                <div className="w-28 h-16">
                    <img 
                        src={require('./logo/logo.jpg')}
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="relative inline-block text-left">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 text-gray-400"
                        onClick={toggleDropdown}
                    >
                        <svg
                            className="w-10 h-10 my-auto mr-5 text-black/50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute right-4 z-10 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="py-1 flex flex-col justify-center items-center">
                                <Link to="/" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    Home
                                </Link>
                                <Link to="/about" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    About
                                </Link>
                                {/* Submenu */}
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="flex w-full px-4 py-2 text-left text-md text-gray-700 hover:bg-gray-100"
                                        onClick={showSidebar}
                                    >
                                        Services
                                        <svg
                                            className="-mr-1 ml-2 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div className={sidebar ? "bg-gray-100 w-56 absolute right-1 list-none place-items-center z-50" : "hidden"}>
                                        {SideBarData.map((item, index) => {
                                         return (
                                                <li key={index} className={item.className}>
                                                    <Link to={item.path}>
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </div>
                                </div>
                                <Link to="/project" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    Projects
                                </Link>
                                <Link to="/careers" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    Careers
                                </Link>
                                <Link to="/personnel" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    Personnel
                                </Link>
                                <Link to="/contact" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}


//Menu For Pad Screens
const PadBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <nav className="bg-menu-500 flex justify-between w-full h-20">
                <div className="w-36 h-20">
                    <img 
                        src={require('./logo/logo.jpg')}
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="relative inline-block text-left">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 text-gray-400"
                        onClick={toggleDropdown}
                    >
                        <svg
                            className="w-16 h-16 my-auto mr-5 text-black/50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute right-4 z-10 mt-2 w-[500px] origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="py-1 flex flex-col justify-center items-center">
                                <Link to="/" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    Home
                                </Link>
                                <Link to="/about" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    About
                                </Link>
                                {/* Submenu */}
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="flex w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={showSidebar}
                                    >
                                        Services
                                        <svg
                                            className="-mr-1 ml-2 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div className={sidebar ? "bg-gray-100 w-56 left-0 list-none text-center absolute place-items-center z-50" : "hidden"}>
                                        {SideBarData.map((item, index) => {
                                         return (
                                                <li key={index} className={item.className}>
                                                    <Link to={item.path}>
                                                        <span>{item.title}</span>
                                                </Link>
                                                </li>
                                            );
                                        })}
                                    </div>
                                </div>
                                <Link to="/project" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    Projects
                                </Link>
                                <Link to="/careers" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    Careers
                                </Link>
                                <Link to="/personnel" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    Personnel
                                </Link>
                                <Link to="/contact" 
                                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};


//Menu for Desktop Screens
const DeskBar = () => {
    return (
        <>
            <div className="bg-menu-500 w-full h-24 text-white flex justify-between">
                <div className="w-44 h-24 ">
                    <img src={require('../../Assets/logo.jpg')} alt="logo" className="w-full h-full"/>
                </div>
                {/* <div className="my-auto text-xl">
                    <h1 className="animate-bounce">Finite Element Designs Ltd</h1>
                </div> */}
                <div className="flex my-auto text-xl">
                    <ul className="">
                        <Link to="/"><button className="border-0 mr-2 px-2 py-1 rounded-md hover:shadow-inner hover:bg-about1-600 active:bg-about1-600">Home</button></Link>
                        <Link to="/about"><button className="border-0 mr-2 px-2 py-1 rounded-md hover:bg-about1-600">About Us</button></Link>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="inline-flex justify-center border-0 mr-2 px-2 py-1 rounded-md hover:bg-about1-600">
                                Services
                                <IoChevronDownSharp className="-mr-1 h-5 w-5 my-auto text-white" aria-hidden="true" />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                        <Link
                                            to="/engService"
                                            className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Civil & Structural Engineering Services
                                        </Link>
                                        )}                      
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <Link
                                            to="/training"
                                            className={classNames(
                                             active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Structural Engineering Training
                                        </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <Link
                                            to="/consultancy"
                                            className={classNames(
                                             active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Structural Engineering Consultancy
                                        </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <Link
                                            to="management"
                                            className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            'block px-4 py-2 text-sm'
                                         )}
                                        >
                                            Project Management
                                        </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <Link
                                            to="/steelFab"
                                            className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                         )}
                                        >
                                            Steel Fabrication
                                        </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <Link
                                            to="largeformat"
                                            className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            'block px-4 py-2 text-sm'
                                         )}
                                        >
                                            Large Format Printing
                                        </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <Link
                                            to="designbuild"
                                            className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            'block px-4 py-2 text-sm'
                                         )}
                                        >
                                            Design Build
                                        </Link>
                                        )}
                                    </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Link  to="/project"><button className="border-0 px-2 py-1 rounded-md hover:bg-about1-600">Projects</button></Link>
                        <Link  to="/careers"><button className="border-0 px-2 py-1 rounded-md hover:bg-about1-600">Careers</button></Link>
                        <Link  to="/personnel"><button className="border-0 px-2 py-1 rounded-md hover:bg-about1-600">Personnel</button></Link>
                        <Link  to="/contact"><button className="border-0 mr-1 px-2 py-1 rounded-md hover:bg-about1-600">Contact Us</button></Link>
                    </ul>
                </div>
            </div>
        </>
    );
};





const NavBar = () => {
    return (
        <>
            <div className="md:hidden">
                <MobileBar />
            </div>
            <div className=" hidden lg:hidden md:block">
                <PadBar />
            </div>
            <div className="hidden lg:block">
                <DeskBar />
            </div>
        </>
    );
};

export default NavBar;