import React from "react";
import profileImg from "../assets/profilephoto.jpeg";

export default function About() {
  return (
    <main className="pt-28 bg-white">
      {/* HERO IMAGE */}
      <section className="relative">
        <div
          className="h-56 w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.placement.iitbhu.ac.in/static/images/bhu_gate.jpg)",
          }}
        />
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT PROFILE */}
        <div className="md:col-span-1 text-center md:text-left">
          <img
            src={profileImg}
            alt="Profile"
            className="w-48 h-48 mx-auto md:mx-0 rounded-lg shadow-lg"
          />

          <h2 className="mt-6 text-xl font-serif font-bold">
            Shashank Shekhar
          </h2>
          <p className="text-gray-600">
            Ph.D Scholar, Linguistics
          </p>

          <p className="mt-3 text-sm">
            <a
              href="mailto:shekhar.shashank@bhu.ac.in"
              className="text-blue-600 underline"
            >
              shekhar.shashank@bhu.ac.in
            </a>
          </p>

          <p className="mt-4 text-sm text-gray-700">
            Department of Linguistics <br />
            Banaras Hindu University
          </p>

          {/* LANGUAGES */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Languages</h3>
            <p className="text-sm text-gray-700">
              Hindi, English, Angika
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2 space-y-8">
          
          {/* ABOUT */}
          <div>
            <h1 className="text-3xl font-serif font-bold mb-4">
              About Me
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a Ph.D. scholar in Linguistics at Banaras Hindu University.
              My research interests include forensic linguistics,
              sociolinguistics, and language documentation, with a focus on
              Indian languages.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My work explores the interface between language, society, and law,
              including linguistic evidence analysis and discourse studies.
            </p>
          </div>

          {/* QUALIFICATION */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-2">
              Qualification
            </h2>
            <p className="text-gray-700">
              <strong>UGC-NET (Ph.D Admission Only)</strong> – June 2024  
              <br />
              Percentile: <strong>80.54</strong>
            </p>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-3">
              Skills
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Creative Writing</li>
              <li>Leadership Work</li>
              <li>Oratory Skills</li>
              <li>Model Construction for Academic Competitions</li>
              <li>Collaborative Teamwork</li>
            </ul>
          </div>

          {/* MEMBERSHIP */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-2">
              Learned Body Membership
            </h2>
            <p className="text-gray-700">
              Linguistic Society of India (LSI)  
              <br />
              Member since <strong>31 October 2025</strong>
            </p>
          </div>

          {/* ACHIEVEMENTS */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">
              Achievements & Participation
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>One-Day Conference</strong> – “Bhartiya Bhasha Pariwar:
                Strengthening India’s Linguistic Bonds”  
                <br />
                Department of Linguistics, BHU, Varanasi (20 Jan 2025)
              </li>

              <li>
                <strong>International Webinar</strong> – Second Language Acquisition  
                <br />
                Department of Linguistics, Osmania University (1 Oct 2024)
              </li>

              <li>
                <strong>Two-Day National Seminar</strong> – Teaching-Learning in
                Mother/Local Tongue (NEP-2020)  
                <br />
                Department of Linguistics, BHU (30 Sept – 1 Oct 2024)
              </li>

              <li>
                <strong>49th All India Conference of Dravidian Linguistics</strong>  
                <br />
                Department of Linguistics, BHU (28–30 June 2022)
              </li>

              <li>
                <strong>National & Regional Science Fairs</strong> – Science Model  
                <br />
                CBSE | Patna & Delhi (2014–2016)
              </li>

              <li>
                <strong>Yuva Sampadak</strong> – Newspaper Preparation  
                <br />
                Dainik Jagran, Bhagalpur (2012)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY (KEPT) */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-serif font-bold mb-8 text-center">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="https://source.unsplash.com/400x300/?university"
            alt="gallery1"
            className="rounded-lg shadow"
          />
          <img
            src="https://source.unsplash.com/400x300/?conference"
            alt="gallery2"
            className="rounded-lg shadow"
          />
          <img
            src="https://source.unsplash.com/400x300/?library"
            alt="gallery3"
            className="rounded-lg shadow"
          />
        </div>
      </section>
    </main>
  );
}
