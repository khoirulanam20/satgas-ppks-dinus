import React from 'react';
import logo from '../assets/logo.png'; // Sesuaikan dengan path yang benar untuk file logo.png

const Filosofi = () => {
  return (
    <div className="mx-auto max-w-6xl p-10 my-5">
      <h1 className="text-2xl font-bold mb-8 text-center">Filosofi</h1>
      <div className="p-10 flex flex-col md:flex-row items-center md:items-start">
        <img
          src={logo} // Menggunakan logo sebagai source gambar
          alt="Filosofi Satgas PPKS"
          className="mb-4 md:mb-0 md:mr-4 w-full md:w-1/3 rounded-md shadow-md"
        />
        <div className="text-gray-700 md:w-2/3">
          <h3 className='font-bold text-base '>Filososi Logo Satgas PPKS </h3>
          <p className='text-sm'><br />
          1. Simbol Hati <br />
          Elemen berbentuk hati melambangkan empati, kepedulian, serta dukungan untuk melindungi dan memberikan rasa aman kepada seluruh civitas akademika Universitas Dian Nuswantoro. Hal ini mencerminkan tujuan Satgas PPKS yang fokus pada kesejahteraan, perlindungan serta kebersamaan untuk melawan segala bentuk kekerasan dan hal-hal yang berpotensi merusak sebuah harmonisasi kehidupan di lingkungan kampus.
          <br /> <br />
          2. Simbol Tangan <br />
          Elemen orang yang merangkul dan tangan yang terbuka melambangkan perlindungan, dukungan, pertolongan, serta kekuatan . Hal ini mencerminkan komitmen untuk bertindak secara proaktif dan preventif.
          <br /> <br />
          3. Warna Merah: <br />
          Warna merah melambangkan keberanian, semangat energi yang tinggi, serta perhatian dan kepedulian. Hal ini mencerminkan bawha Satgas PPKS siap dan berkomitmen dalam menangani masalah kekerasan seksual guna menciptakan lingkungan yang aman positif bagi semua civitas akademika Universitas Dian Nuswantoro.
          <br /> <br />
          4. Warna Biru: <br />
          Warna biru melambangkan kepercayaan, profesionalisme, dan ketenangan. Hal ini menunjukkan bahwa Satgas PPKS bertidak dengan integritas, dedikasi, dan ketenangan dalam menjalankan tanggung jawabnya untuk melindungi dan mendukung civitas akademika Universitas Dian Nuswantoro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filosofi;
