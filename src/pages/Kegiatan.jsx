import React from 'react';

// Dummy data untuk kegiatan
const dummyKegiatan = [
  {
    id: 1,
    title: 'Kegiatan 1',
    description: 'Deskripsi kegiatan 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Kegiatan 2',
    description: 'Deskripsi kegiatan 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Kegiatan 3',
    description: 'Deskripsi kegiatan 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Kegiatan 4',
    description: 'Deskripsi kegiatan 4',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Kegiatan 3',
    description: 'Deskripsi kegiatan 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Kegiatan 3',
    description: 'Deskripsi kegiatan 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Kegiatan 3',
    description: 'Deskripsi kegiatan 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Kegiatan 3',
    description: 'Deskripsi kegiatan 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Kegiatan 3',
    description: 'Deskripsi kegiatan 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Kegiatan 3',
    description: 'Deskripsi kegiatan 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Kegiatan 3',
    description: 'Deskripsi kegiatan 3',
    image: 'https://via.placeholder.com/150',
  },

];

const Kegiatan = () => {
  return (
    <div className="mx-auto max-w-6xl p-10 my-5">
      <h1 className="text-2xl font-bold mb-8 text-center">Kegiatan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyKegiatan.map((kegiatan) => (
          <div key={kegiatan.id} className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={kegiatan.image} alt={kegiatan.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{kegiatan.title}</h2>
              <p className="text-gray-700">{kegiatan.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kegiatan;
