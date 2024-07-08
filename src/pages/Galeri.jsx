import React from 'react';

const Galeri = () => {
  const photos = [
    { src: 'https://via.placeholder.com/300', alt: 'Foto 1' },
    { src: 'https://via.placeholder.com/300', alt: 'Foto 2' },
    { src: 'https://via.placeholder.com/300', alt: 'Foto 3' },
    { src: 'https://via.placeholder.com/300', alt: 'Foto 4' },
    { src: 'https://via.placeholder.com/300', alt: 'Foto 5' },
    { src: 'https://via.placeholder.com/300', alt: 'Foto 6' },
  ];

  return (
    <div className="mx-auto max-w-6xl p-10 my-5">
    <h1 className="text-2xl font-bold mb-8 text-center">Galeri</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative overflow-hidden rounded-md shadow-md">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeri;
