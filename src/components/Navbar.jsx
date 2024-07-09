import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';

import logo from '../assets/logo.png'; // Sesuaikan dengan path yang benar untuk file logo.png

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative z-50 border-b-[1px] border-primary/50 bg-gray-800 text-white shadow-lg">
      <nav className="container flex h-[70px] md:h-[90px] items-center justify-between py-2 mx-auto">
        <div className="text-2xl text-white md:text-3xl flex items-center">
          <img src={logo} alt="Logo Satgas PPKS" className="h-12 md:h-16 w-auto mr-2" />
          <Link to="/" className="">
            Satgas
            <span className="inline-block font-bold text-primary dark:text-yellow-500">PPKS</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li className="cursor-pointer group relative">
              <Link to="/" className="flex h-[72px] items-center gap-[2px] hover:text-yellow-500">
                Beranda
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </Link>
              <div className="absolute left-0 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-yellow-500 hover:text-white">
                    <Link to="/pengantar">Pengantar</Link>
                  </li>
                  <li className="p-2 hover:bg-yellow-500 hover:text-white">
                    <Link to="/filosofi">Filosofi</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">
              <Link to="/kegiatan">Kegiatan</Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">
              <Link to="/dokumen">Dokumen</Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">
              <Link to="/galeri">Galeri</Link>
            </li>
            <li>
              <Link to="/lapor" className="bg-red-600 px-3 py-2 rounded-md text-white hover:bg-red-700">
                Lapor
              </Link>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <BiMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </nav>
      {/* Responsive Menu */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-[90px] bg-gray-800 text-white">
          <ul className="py-4">
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/">Beranda</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/pengantar">Pengantar</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/filosofi">Filosofi</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/kegiatan">Kegiatan</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/dokumen">Dokumen</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/galeri">Galeri</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/lapor" className="bg-red-600 px-3 py-2 rounded-md text-white hover:bg-red-700">
                Lapor
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
