import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if you're using it

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <section className="container mx-auto text-center p-4">
        <div className="grid md:grid-cols-3 py-5">
          <div className="px-4 py-8">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <Link to="/#home" className="">
                Satgas
                <span className="inline-block font-bold text-primary">PPKS</span>
              </Link>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link to="/about">About</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link to="/services">Services</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link to="/services">Services</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link to="/about">About us</Link>
                </li>
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                Social Links
              </h1>
              <div className="flex flex-col gap-3">
                <h1>Subscribe to our newsletter</h1>
                <input
                  className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  type="text"
                  placeholder="Email"
                />
                <div className="mt-6 flex items-center gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="duration-200 hover:scale-105">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="duration-200 hover:scale-105">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="duration-200 hover:scale-105">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-300/50 py-6 text-center">
          &copy; {new Date().getFullYear()} Satgas PPKS
        </div>
      </section>
    </footer>
  );
};

export default Footer;
