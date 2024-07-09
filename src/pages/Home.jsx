import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import coverImage from '../assets/cover.jpg';

const Home = () => {
  return (
    <div className="mx-auto max-w-6xl my-5">
    <section
      className="relative bg-cover bg-center h-96"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Selamat Datang di Satgas PPKS UDINUS</h1>
        <p className="mt-4 text-white">Portal Informasi Satgas PPKS Universitas Dian Nuswantoro</p>
      </div>
    </section>

      <section className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 md:col-span-1">
          <img src={coverImage} alt="Foto Pengantar" className="w-full h-64 rounded-md shadow-md" />
        </div>
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Pengantar</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel ultricies mollis.
            Pellentesque eu nisl varius, tempus nulla non, aliquet augue. Nam ut sapien libero. In ultricies posuere
            est, sit amet tincidunt ex venenatis a. Nulla facilisi. Suspendisse potenti. Praesent sed.
          </p>
          <div className="mt-20">
              <Link to="/pengantar" className="bg-gray-800 text-white p-2 rounded-md hover:bg-yellow-500 transition duration-300">
                Baca Selengkapnya
              </Link>
            </div>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Kegiatan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dummy content for activities */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Kegiatan 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Kegiatan 1</h3>
              <p className="text-gray-700">Deskripsi kegiatan 1...</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Kegiatan 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Kegiatan 2</h3>
              <p className="text-gray-700">Deskripsi kegiatan 2...</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Kegiatan 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Kegiatan 3</h3>
              <p className="text-gray-700">Deskripsi kegiatan 3...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Lapor</h2>
          <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ex nec felis faucibus ullamcorper. Ut
              hendrerit nunc ac eros euismod, eget fermentum ipsum consequat. Duis vehicula suscipit odio, nec dignissim
              odio sagittis et. Sed accumsan massa nec consequat ultrices. Nulla facilisi. Nam vel leo nec tellus iaculis
              rutrum sed at erat. Vestibulum consequat lectus sed leo pretium varius. Vestibulum dapibus felis eu est
              finibus.
            </p>
            <div className="mt-4">
              <Link to="/lapor" className="bg-red-500 text-white p-2 rounded-md hover:bg-yellow-500 transition duration-300">
                Lapor Sekarang !!
              </Link>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <img src="https://via.placeholder.com/300" alt="Gambar Lapor" className="w-full h-60 md:max-w-full rounded-md shadow-md" />

          </div>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Dokumen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 flex items-center">
            <div className="mr-4">
              <FontAwesomeIcon icon={faFilePdf} className="text-gray-800 text-6xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">SK & KEBIJAKAN UDINUS</h3>
              <p className="text-gray-700 mb-4">Kumpulan SK & Kebijakan UDINUS tentang Pencegahan dan Penanganan Kekerasan Seksual di Lingkungan UDINUS</p>
              <a href="/path/to/document1.pdf" className="block bg-gray-800 text-white p-2 rounded-md mt-10 text-center hover:bg-yellow-500 transition duration-300">
                UNDUH
              </a>
            </div>
          </div>
        </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 flex items-center">
              <div className="mr-4">
                <FontAwesomeIcon icon={faFilePdf} className="text-gray-800 text-6xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">PERATURAN PERUNDANGAN</h3>
                <p className="text-gray-700 mb-4">Kumpulan Peraturan Perundangan tentang Pencegahan dan Penanganan Kekerasan Seksual di Lingkungan Perguruan Tinggi</p>
                <a href="/path/to/document2.pdf" className="block bg-gray-800 text-white p-2 rounded-md mt-4 text-center hover:bg-yellow-500 transition duration-300">
                  UNDUH
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 flex items-center">
              <div className="mr-4">
                <FontAwesomeIcon icon={faFilePdf} className="text-gray-800 text-6xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">DOKUMEN PENTING LAINNYA</h3>
                <p className="text-gray-700">Dokumen Penting Tentang Pencegahan dan Penanganan Kekerasan Seksual</p>
                <div className="mt-4">
                <a href="/path/to/document2.pdf" className="block bg-gray-800 text-white p-2 rounded-md mt-16 text-center hover:bg-yellow-500 transition duration-300">
                  UNDUH
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Galeri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery content */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Galeri 1" className="w-full h-48 object-cover" />
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Galeri 2" className="w-full h-48 object-cover" />
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Galeri 3" className="w-full h-48 object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
