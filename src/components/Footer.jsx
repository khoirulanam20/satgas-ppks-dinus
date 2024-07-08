import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Satgas PPKS
      </div>
    </footer>
  );
};

export default Footer;
