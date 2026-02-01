import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Education from "./pages/Education";


function App() {
  return (
    <>
      <Navbar />

      {/* Push content below fixed navbar */}
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />


        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
