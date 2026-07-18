import React from "react";
import profileImg from "../assets/profilephoto.jpeg";
import bhuGateBackground from "../assets/bhu-gate-background.png";
import bookCover from "../assets/book5.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-white">
      
      {/* HERO BANNER */}
      <section className="relative">
        <div
          className="h-72 w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${bhuGateBackground})`,
          }}
        />

        {/* Profile Image */}
        <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2">
          <img
            src={profileImg}
            alt="profilephoto"
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-4xl mx-auto px-6 pt-24 text-center">
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
            href="/Portfolio_shashank/shashank_shekhar_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Download CV
          </a>

          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section id="research" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold text-center">
          Research Interests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Forensic Linguistics
            </h3>
            <p className="text-sm">
              Analysis of language in legal and investigative contexts,
              including written and spoken forensic evidence.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Sociolinguistics
            </h3>
            <p className="text-sm">
              Language variation, identity, and social meaning in multilingual
              communities.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Language Documentation
            </h3>
            <p className="text-sm">
              Field-based documentation and analysis of lesser-studied languages.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ FEATURED PUBLICATION (NEW SECTION ADDED) */}
      <section id="publications" className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-serif font-bold text-center mb-16">
            Featured Publication
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-2xl shadow-xl">

            {/* BOOK IMAGE */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src={bookCover}
                alt="Aspects of Angika"
                className="w-64 rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />
            </div>

            {/* BOOK DETAILS */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-3">
                Aspects of Angika (2026)
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                A comprehensive and critical study of the Angika language,
                exploring its linguistic structure, historical evolution,
                oral traditions, and socio-cultural significance. The work
                contributes to documentation and revitalization efforts
                aligned with NEP-2020.
              </p>

              <Link
                to="/publications"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                View Full Publication →
              </Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
