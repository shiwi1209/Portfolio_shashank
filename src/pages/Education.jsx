import React from "react";
import profileImg from "../assets/profilephoto.jpeg";

export default function Education() {
  return (
    <main className="pt-28 bg-white">
      {/* HERO */}
      <section className="relative">
        <div
          className="h-48 w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.placement.iitbhu.ac.in/static/images/bhu_gate.jpg)",
          }}
        />
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* LEFT PROFILE (same as About) */}
        <div className="md:col-span-1 text-center md:text-left">
          <img
            src={profileImg}
            alt="Profile"
            className="w-44 h-44 mx-auto md:mx-0 rounded-lg shadow-lg"
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
        </div>

        {/* RIGHT EDUCATION TABLE */}
        <div className="md:col-span-3">
          <h1 className="text-3xl font-serif font-bold mb-6">
            Education Details
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">S. No</th>
                  <th className="border px-3 py-2">Degree</th>
                  <th className="border px-3 py-2">Session</th>
                  <th className="border px-3 py-2">Subject</th>
                  <th className="border px-3 py-2">Board / University</th>
                  <th className="border px-3 py-2">School / College</th>
                  <th className="border px-3 py-2">Percentage / CGPA</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Matriculation</td>
                  <td className="border px-3 py-2">2014–2015</td>
                  <td className="border px-3 py-2">
                    English, Sanskrit, Math, S.St, Computer, Science
                  </td>
                  <td className="border px-3 py-2">CBSE</td>
                  <td className="border px-3 py-2">
                    Anandram Dhandhania Saraswati Vidya Mandir, Bhagalpur
                  </td>
                  <td className="border px-3 py-2">
                    8.6 CGPA (81.7%)
                  </td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Intermediate</td>
                  <td className="border px-3 py-2">2015–2017</td>
                  <td className="border px-3 py-2">
                    Physics, Chemistry, Math, Music, English
                  </td>
                  <td className="border px-3 py-2">CBSE</td>
                  <td className="border px-3 py-2">
                    Anandram Dhandhania Saraswati Vidya Mandir, Bhagalpur
                  </td>
                  <td className="border px-3 py-2">62.4%</td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Graduation</td>
                  <td className="border px-3 py-2">2017–2020</td>
                  <td className="border px-3 py-2">English Literature</td>
                  <td className="border px-3 py-2">
                    T.M.B University, Bhagalpur
                  </td>
                  <td className="border px-3 py-2">
                    Marwari College, Bhagalpur
                  </td>
                  <td className="border px-3 py-2">69.88%</td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">4</td>
                  <td className="border px-3 py-2">Masters – I</td>
                  <td className="border px-3 py-2">2021–2023</td>
                  <td className="border px-3 py-2">Linguistics</td>
                  <td className="border px-3 py-2">
                    Banaras Hindu University, Varanasi
                  </td>
                  <td className="border px-3 py-2">Main Campus</td>
                  <td className="border px-3 py-2">
                    7.5 CGPA (70.5%)
                  </td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">5</td>
                  <td className="border px-3 py-2">Masters – II</td>
                  <td className="border px-3 py-2">2024–Pursuing</td>
                  <td className="border px-3 py-2">
                    English Literature
                  </td>
                  <td className="border px-3 py-2">
                    Indira Gandhi Open University, Delhi
                  </td>
                  <td className="border px-3 py-2">
                    Marwari College
                  </td>
                  <td className="border px-3 py-2">—</td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">6</td>
                  <td className="border px-3 py-2">
                    PG Diploma in Translation
                  </td>
                  <td className="border px-3 py-2">2025</td>
                  <td className="border px-3 py-2">Translation</td>
                  <td className="border px-3 py-2">
                    Indira Gandhi Open University, Delhi
                  </td>
                  <td className="border px-3 py-2">
                    Marwari College
                  </td>
                  <td className="border px-3 py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
