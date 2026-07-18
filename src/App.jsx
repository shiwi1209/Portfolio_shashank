import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Education from "./pages/Education";
import Publications from "./pages/Publications";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* Scroll To Top Component */}
      <ScrollToTop />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="min-h-screen">
        <Routes>
          {/* Default Home Page */}
          <Route path="/" element={<Home />} />

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;