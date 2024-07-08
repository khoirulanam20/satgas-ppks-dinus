import React from 'react';

const Filosofi = () => {
  return (
    <div className="mx-auto max-w-6xl p-10 my-5">
    <h1 className="text-2xl font-bold mb-8 text-center">Filosofi</h1>
    <div className=" p-10 flex flex-col md:flex-row items-center md:items-start">
      <img src="https://via.placeholder.com/150" alt="Filosofi Satgas PPKS" className="mb-4 md:mb-0 md:mr-4 w-full md:w-1/3 rounded-md shadow-md" />
      <div className="text-gray-700 md:w-2/3">
        <p>
          Filosofi Satgas PPKS adalah untuk memastikan lingkungan yang aman, adil, dan inklusif bagi semua anggota komunitas. 
          Kami berkomitmen untuk mempromosikan kesetaraan, memberantas kekerasan, dan mendukung kesejahteraan mental dan fisik 
          setiap individu. Melalui edukasi, dukungan, dan tindakan yang proaktif, Satgas PPKS bertujuan untuk membangun 
          komunitas yang saling menghormati dan menghargai keberagaman.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Filosofi;
