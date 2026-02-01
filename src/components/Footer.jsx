import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#D4E157" }}
      className="text-gray-900 mt-16"
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Contact Info */}
        <div className="text-center md:text-left text-sm">
          <p>
            Contact:{" "}
            <a
              href="mailto:shekhar.shashank@bhu.ac.in"
              className="underline hover:text-gray-700"
            >
              shekhar.shashank@bhu.ac.in
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-2xl">
          <a
            href="mailto:shekhar.shashank@bhu.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/shashank-shekhar-514a74243"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/919931414114"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Strip */}
      <div
        style={{ backgroundColor: "#C0CA33" }}
        className="text-center text-sm py-2"
      >
        © 2026 Shashank Shekhar ·{" "}
        <a href="/contact" className="underline">
          Contact
        </a>
      </div>
    </footer>
  );
}
