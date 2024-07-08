import React from 'react';

const Dokumen = () => {
  return (
    <div className="mx-auto max-w-6xl p-10 my-5">
    <h1 className="text-2xl font-bold mb-8 text-center">Dokumen</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 flex flex-col items-center">
            <img src="https://via.placeholder.com/150" alt="Dokumen 1" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Dokumen 1</h3>
            <p className="text-gray-700 text-center">Deskripsi dokumen 1...</p>
            <a href="/path/to/document1.pdf" className="bg-blue-500 text-white mt-4 p-2 rounded-md hover:bg-yellow-500 transition duration-300">
              Unduh Dokumen 1
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 flex flex-col items-center">
            <img src="https://via.placeholder.com/150" alt="Dokumen 2" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Dokumen 2</h3>
            <p className="text-gray-700 text-center">Deskripsi dokumen 2...</p>
            <a href="/path/to/document2.pdf" className="bg-blue-500 text-white mt-4 p-2 rounded-md hover:bg-yellow-500 transition duration-300">
              Unduh Dokumen 2
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 flex flex-col items-center">
            <img src="https://via.placeholder.com/150" alt="Dokumen 3" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Dokumen 3</h3>
            <p className="text-gray-700 text-center">Deskripsi dokumen 3...</p>
            <a href="/path/to/document3.pdf" className="bg-blue-500 text-white mt-4 p-2 rounded-md hover:bg-yellow-500 transition duration-300">
              Unduh Dokumen 3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dokumen;
