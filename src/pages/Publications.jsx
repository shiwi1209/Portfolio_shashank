import React from "react";

import profile from "../assets/profilephoto.jpeg";
import img1 from "../assets/book1.jpeg";
import img2 from "../assets/book2.jpeg";
import img3 from "../assets/book3.jpeg";
import img4 from "../assets/book4.jpeg";

export default function Publications() {
  return (
    <div className="pt-28 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50 min-h-screen">

      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
        Publications
      </h1>

      {/* BOOK SECTION */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 mb-20 border">

        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* PROFILE CARD - FIRST ON MOBILE */}
          <div className="order-1 md:order-2 md:w-1/3 flex justify-center">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300">

              <img
                src={profile}
                alt="Shashank Shekhar"
                className="w-52 h-52 object-cover rounded-xl mx-auto mb-4"
              />

              <h3 className="font-semibold text-lg">
                Shashank Shekhar
              </h3>

              <p className="text-sm text-gray-600">
                Ph.D. Scholar (Linguistics)
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Banaras Hindu University
              </p>

            </div>
          </div>

          {/* BOOK CONTENT - SECOND ON MOBILE */}
          <div className="order-2 md:order-1 md:w-2/3">

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Aspects of Angika (2026)
            </h2>

            <p className="text-lg font-medium mb-1">
              Author: Shashank Shekhar
            </p>

            <p className="text-lg font-medium mb-4">
              Co-Author: Prof. Abhinav Kumar Mishra
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <em>Aspects of Angika</em> presents an exhaustive and critical
              study of the Angika language, exploring its linguistic
              architecture, diachronic evolution, oral traditions, and
              socio-cultural significance. The book contributes meaningfully to
              the documentation, preservation, and revitalization of Angika
              within the broader intellectual framework envisioned under
              NEP-2020.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The book was formally released at the International Conference on
              “Reimagining Bhartiya Languages, Knowledge, and Interdisciplinary
              Philosophical Reflections and Educational Transformations Under
              NEP-2020”, organized by the Faculty of Arts, Banaras Hindu
              University, from 12–14 February 2026.
            </p>

          </div>

        </div>

        {/* SCHOLARS SECTION */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-4">
            Distinguished Scholars Present at the Release
          </h3>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Prof. Ajit Kumar Chaturvedi – Hon’ble Vice-Chancellor, BHU</li>
            <li>Prof. R. C. Sharma – Eminent Linguist, New Delhi (Chief Guest)</li>
            <li>Prof. Ram Nath Jha – School of Sanskrit & Indic Studies, JNU</li>
            <li>Prof. Sushma Ghildyal – Chairperson & Dean, Faculty of Arts, BHU</li>
            <li>Prof. Abhinav Kumar Mishra – Head, Dept. of Linguistics, BHU</li>
            <li>Dr. Pravin S. Rana – Organizing Secretary, RBLK-PRT 2026</li>
          </ul>
        </div>

      </div>

      {/* GALLERY SECTION */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Book Release Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          <img
            src={img1}
            alt="Book Release 1"
            className="rounded-xl shadow-lg object-cover w-full h-72 hover:scale-105 transition duration-300"
          />

          <img
            src={img2}
            alt="Book Release 2"
            className="rounded-xl shadow-lg object-cover w-full h-72 hover:scale-105 transition duration-300"
          />

          <img
            src={img3}
            alt="Book Release 3"
            className="rounded-xl shadow-lg object-cover w-full h-72 hover:scale-105 transition duration-300"
          />

          <img
            src={img4}
            alt="Book Release 4"
            className="rounded-xl shadow-lg object-cover w-full h-72 hover:scale-105 transition duration-300"
          />

        </div>
      </div>

    </div>
  );
}