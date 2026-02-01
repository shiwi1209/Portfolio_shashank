import React from "react";
import profileImg from "../assets/profilephoto.jpeg";
  
export default function Home() {
  return (
    <main className="bg-white pt-28"> {/* pt-28 to offset fixed navbar */}
      {/* HERO BANNER */}
      <section className="relative">
        <div
          className="h-72 w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.placement.iitbhu.ac.in/static/images/bhu_gate.jpg)",
          }}
        />

        <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2">
          <img
            src={profileImg}
            alt="profilephoto"
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </section>

      {/* INTRO SECTION */}
      <section id="about" className="max-w-4xl mx-auto px-6 pt-24 text-center">
        <h1 className="text-4xl font-serif font-bold text-[var(--blue-dark)]">
          Shashank Shekhar
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Ph.D Scholar in Linguistics, Banaras Hindu University
        </p>
        <p className="mt-6 text-gray-700 leading-relaxed">
          Welcome to my academic website. My research focuses on linguistic
          structure, variation, and documentation, with special attention to
          Indian languages and sociolinguistic patterns.
        </p>

        {/* BUTTONS */}
        
       <div className="mt-8 flex justify-center gap-4">
  
          <a
  href="/CV/shashank_shekhar_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
>
  Download CV
</a>
<a
    href="/contact"
    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
  >
    Contact
  </a>

        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section id="research" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold text-center">Research Interests</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Forensic linguistics</h3>
            <p className="text-sm">
                    Analysis of language in legal and investigative contexts, including
                    written and spoken forensic evidence.           
             </p>
          </div>

          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Sociolinguistics</h3>
            <p className="text-sm">
              Language variation, identity, and social meaning in multilingual
              communities.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Language Documentation</h3>
            <p className="text-sm">
              Field-based documentation and analysis of lesser-studied languages.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
