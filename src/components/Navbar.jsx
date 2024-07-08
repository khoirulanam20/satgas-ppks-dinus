import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow-md h-36 flex items-center justify-center" style={{ zIndex: '50', position: 'sticky', top: '0' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Satgas PPKS</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-yellow-300">Beranda</Link></li>
          <li className="relative group">
            <div className="hover:text-yellow-300 cursor-pointer">Profil</div>
            <ul className="absolute hidden group-hover:block bg-gray-700 rounded-md shadow-lg">
              <li className="p-2 hover:text-yellow-300"><Link to="/pengantar">Pengantar</Link></li>
              <li className="p-2 hover:text-yellow-300"><Link to="/filosofi">Filosofi</Link></li>
            </ul>
          </li>
          <li><Link to="/kegiatan" className="hover:text-yellow-300">Kegiatan</Link></li>
          <li><Link to="/dokumen" className="hover:text-yellow-300">Dokumen</Link></li>
          <li><Link to="/galeri" className="hover:text-yellow-300">Galeri</Link></li>
          <li>
            <Link to="/lapor" className="bg-red-600 px-3 py-2 rounded-md text-white hover:bg-red-700">
              Lapor
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
