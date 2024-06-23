import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

//Components
import ScrollToTop from './components/scrollToTop';


//Pages
import HomePage from "./pages/homepage";
import About from "./pages/about";
import Personnel from "./pages/Personnel";
import Project from "./pages/project";
import Careers from "./pages/Career";
import Contact from "./pages/contact";


//Services Pages
import EngService from "./pages/ServicePage/EngService";
import Training from "./pages/ServicePage/TrainingPage";
import Consultancy from "./pages/ServicePage/Consultancy";
import Management from "./pages/ServicePage/ManagementPage";
import SteelFab from "./pages/ServicePage/SteelFab";
import LargeFormat from "./pages/ServicePage/Large Format";
import DesignBuild from "./pages/ServicePage/DesignPage";

//Projects Pages
import KeyWestProject from './pages/ProjectPages/KeyWestProject';
import KileleshwaProject from './pages/ProjectPages/KileleshwaProject';
import LenanaProject from './pages/ProjectPages/LenanaProject';
import OtukeProject from './pages/ProjectPages/OtukeProject';
import RichmondSuitesProject from './pages/ProjectPages/RichmondSuitesProject';

//Career Pages
import Attachment from './pages/CareerPages/Attachment';
import Internship from './pages/CareerPages/Internship';
import IndustrialCareer from './pages/CareerPages/IndCareer';


function App() {
  return (
    <>
      <HelmetProvider>
        <Router basename="/">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/personnel" element={<Personnel />} />
            <Route path="/project" element={<Project />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          
            <Route path="/engService" element={<EngService />} />
            <Route path="/training" element={<Training />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/management" element={<Management />} />
            <Route path="/steelFab" element={<SteelFab />} />
            <Route  path="/largeformat" element={<LargeFormat />} />
            <Route path="/designbuild" element={<DesignBuild />} />

            <Route path="/KeyWestProject" element={<KeyWestProject />} />
            <Route path="/KileleshwaProject" element={<KileleshwaProject />} />
            <Route path="/LenanaProject" element={<LenanaProject />} />
            <Route path="/OtukeProject" element={<OtukeProject />} />
            <Route path="/RichmondSuitesProject" element={<RichmondSuitesProject />} />

            <Route path="/industrial-career" element={<IndustrialCareer />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/attachment" element={<Attachment />} />
          </Routes>
          <ScrollToTop />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
