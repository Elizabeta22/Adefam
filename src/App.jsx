
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/header";
import Footer from "./Components/footer";

import Home from "./Pages/home";
import About from "./Pages/About";
import CoursePage from "./Pages/CoursePage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import StudentDashboard from "./Pages/StudentDashboard";
import TopTechSkills2026 from "./Pages/TopTechSkills2026";
import FutureWebDevelopment from "./Pages/FutureWebDevelopment";
import BeginnerDataAnalysis from "./Pages/BeginnerDataAnalysis";
import CybersecurityBestPractices from "./Pages/CybersecurityBestPractices";
import SuccessfulTechCareer from "./Pages/SuccessfulTechCareer";


import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/top-tech-skills-2026" element={<TopTechSkills2026 />} />
        <Route path="/future-web-development" element={<FutureWebDevelopment />}/>
        <Route path="/beginner-data-analysis" element={<BeginnerDataAnalysis />}/>
        <Route path="/cybersecurity-best-practices" element={<CybersecurityBestPractices />}/>
        <Route path="/successful-tech-career" element={<SuccessfulTechCareer />} />

 
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;