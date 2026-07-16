import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F09818] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <div className="bg-white rounded-xl shadow-md w-34 h-14 flex items-center justify-center p-3">
            <img
              src="/logo.png"
              alt="ADEFAM Logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <p className="mt-5 text-sm text-orange-100 leading-6">
            Empowering individuals with practical digital skills in
            Software Development, Web Development, Graphic Design,
            Data Analysis, UI/UX Design and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-5">
            Quick Links
          </h4>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-200 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-yellow-200 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                className="hover:text-yellow-200 transition"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="hover:text-yellow-200 transition"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-200 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xl font-semibold mb-5">
            Support
          </h4>

          <ul className="space-y-3">
            <li className="hover:text-yellow-200 cursor-pointer transition">
              Help Center
            </li>

            <li className="hover:text-yellow-200 cursor-pointer transition">
              Terms & Conditions
            </li>

            <li className="hover:text-yellow-200 cursor-pointer transition">
              Privacy Policy
            </li>

            <li className="hover:text-yellow-200 cursor-pointer transition">
              FAQs
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-5">
            Contact Us
          </h4>

          <div className="space-y-3 text-orange-100">
            <p>📧 adefamcomputers@gmail.com</p>

            <p>📞 +234 803 236 6804</p>

            <p>📍 Ogo-oluwa, Osun State, Nigeria</p>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-orange-300">
  <div className="max-w-7xl mx-auto px-6 py-5 flex justify-center items-center text-sm text-orange-100">

    <p className="text-center">
      © {new Date().getFullYear()} ADEFAM Computer Infotech. All Rights Reserved.
    </p>

  </div>
</div>
    </footer>
  );
};

export default Footer;