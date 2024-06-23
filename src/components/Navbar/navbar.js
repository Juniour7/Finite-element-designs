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


const MenuItem = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSubmenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <li className="relative">
        <button 
          className="w-full text-left p-2 rounded-md transition-colors duration-200"
          onClick={toggleSubmenu}
        >
          {label}
        </button>
        {children && (
          <ul 
            className={`pl-3 mt-1  space-y-1 transition-all duration-300 overflow-hidden ${
              isOpen ? 'max-h-[330px]' : 'max-h-0'
            }`}
          >
            {children}
          </ul>
        )}
      </li>
    );
};


//Menu For Mobile Screens
const MobileBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closemenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="bg-menu-500  w-full fixed top-0 z-50">
                <div className="flex justify-between h-16 ">
                    <div className="w-28 h-16">
                        <Link to="/">
                            <img 
                                src={require('./logo/logo.jpg')}
                                alt="logo"
                                className="w-full h-full"
                            />
                        </Link>
                    </div>
                    <div className="text-5xl mr-3 my-auto" onClick={toggleMenu}>
                        <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <div className="relative">
                    <div className={`absolute right-0 w-[75%] h-screen bg-white text-gray-700 z-50 text-lg shadow-xl transition-all duration-500 ${isOpen ? "sclae-100" : "scale-0"}`}>
                        <ul className="flex flex-col p-2 space-y-2">
                            <Link to="/" onClick={closemenu}><MenuItem label="Home" /></Link>
                            <Link to="/about" onClick={closemenu}><MenuItem label="About Us" /></Link>
                            <MenuItem label="Our Services">
                                <Link to="/engService" onClick={closemenu}><MenuItem label="Civil & Structural Engineering" /></Link>
                                <Link to="/training" onClick={closemenu}><MenuItem label="Structural Engineering Training" /></Link>
                                <Link to="/consultancy" onClick={closemenu}><MenuItem label="Structural Engineering Consultancy" /></Link>
                                <Link to="/management" onClick={closemenu}><MenuItem label="Project Management" /></Link>
                                <Link to="/steelFab" onClick={closemenu}><MenuItem label="Steel Fabrication" /></Link>
                                <Link to="/largeformat" onClick={closemenu}><MenuItem label="Large Format Printing" /></Link>
                                <Link to="/designbuild" onClick={closemenu}><MenuItem label="Design Build" /></Link>
                            </MenuItem>
                            <Link to="/project" onClick={closemenu}><MenuItem label="Projects" /></Link>
                            <Link to="/careers" onClick={closemenu}><MenuItem label="Careers" /></Link>
                            <Link to="/personnel" onClick={closemenu}><MenuItem label="Personnel" /></Link>
                            <Link to="/contact" onClick={closemenu}><MenuItem label="Contact Us" /></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}


//Menu For Pad Screens
const PadBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closemenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="bg-menu-500  w-full h-[90px] fixed top-0 z-50">
                <div className="flex justify-between">
                    <div className="w-[155px] h-[90px]">
                        <Link to="/">
                        <img 
                            src={require('./logo/logo.jpg')}
                            alt="logo"
                            className="w-full h-full"
                        />
                        </Link>
                    </div>
                    <div className="text-6xl mr-3 my-auto" onClick={toggleMenu}>
                        <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <div className="relative">
                    <div className={`absolute  w-[60%] h-screen bg-white text-gray-700 z-50 text-lg shadow-xl transition-all duration-500 ${isOpen ? "right-0" : "-right-[100%]"}`}>
                        <ul className="flex flex-col p-2 space-y-2">
                            <Link to="/" onClick={closemenu}><MenuItem label="Home" /></Link>
                            <Link to="/about" onClick={closemenu}><MenuItem label="About Us" /></Link>
                            <MenuItem label="Our Services">
                                <Link to="/engService" onClick={closemenu}><MenuItem label="Civil & Structural Engineering" /></Link>
                                <Link to="/training" onClick={closemenu}><MenuItem label="Structural Engineering Training" /></Link>
                                <Link to="/consultancy" onClick={closemenu}><MenuItem label="Structural Engineering Consultancy" /></Link>
                                <Link to="/management" onClick={closemenu}><MenuItem label="Project Management" /></Link>
                                <Link to="/steelFab" onClick={closemenu}><MenuItem label="Steel Fabrication" /></Link>
                                <Link to="/largeformat" onClick={closemenu}><MenuItem label="Large Format Printing" /></Link>
                                <Link to="/designbuild" onClick={closemenu}><MenuItem label="Design Build" /></Link>
                            </MenuItem>
                            <Link to="/project" onClick={closemenu}><MenuItem label="Projects" /></Link>
                            <Link to="/careers" onClick={closemenu}><MenuItem label="Careers" /></Link>
                            <Link to="/personnel" onClick={closemenu}><MenuItem label="Personnel" /></Link>
                            <Link to="/contact" onClick={closemenu}><MenuItem label="Contact Us" /></Link>
                        </ul>
                    </div>
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
                                            to="/management"
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
                                            to="/largeformat"
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
                                            to="/designbuild"
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