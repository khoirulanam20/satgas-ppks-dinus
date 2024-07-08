import React from 'react';

const Lapor = () => {
  return (
    <div className="flex justify-center p-10 my-5">
      <form className="w-full max-w-4xl">
        {/* Judul Halaman */}
        <h1 className="text-2xl font-bold mb-8 text-center">Form Laporan</h1>

        {/* Identitas */}
        <div className="mb-8 p-4 border rounded">
          <h2 className="text-xl font-bold mb-4">Identitas</h2>
          <table className="w-full">
            <tbody>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">Nama Lengkap</label></td>
                <td><input type="text" className="w-full p-2 border" /></td>
              </tr>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">Nomor Identitas</label></td>
                <td><input type="text" className="w-full p-2 border" /></td>
              </tr>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">Upload file identitas (jpg)</label></td>
                <td><input type="file" accept=".jpg" className="w-full p-2 border" /></td>
              </tr>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">Alamat</label></td>
                <td><input type="text" className="w-full p-2 border" /></td>
              </tr>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">No HP</label></td>
                <td><input type="text" className="w-full p-2 border" /></td>
              </tr>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">Email</label></td>
                <td><input type="email" className="w-full p-2 border" /></td>
              </tr>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">Nama Unit Kerja/Fakultas/Instansi</label></td>
                <td><input type="text" className="w-full p-2 border" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex space-x-4 mb-8">
          {/* Pelapor */}
          <div className="w-1/2 p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Pelapor</h2>
            <table className="w-full">
              <tbody>
                <tr className="mb-4">
                  <td className="pr-4"><label className="block text-gray-700">Status Pelapor</label></td>
                  <td>
                    <select className="w-full p-2 border">
                      <option>Mahasiswa</option>
                      <option>Dosen</option>
                      <option>Tenaga Kependidikan</option>
                      <option>Masyarakat Umum</option>
                    </select>
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="pr-4"><label className="block text-gray-700">Kategori</label></td>
                  <td>
                    <select className="w-full p-2 border">
                      <option>Korban</option>
                      <option>Pelapor/Saksi</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Terlapor */}
          <div className="w-1/2 p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Terlapor</h2>
            <table className="w-full">
              <tbody>
                <tr className="mb-4">
                  <td className="pr-4"><label className="block text-gray-700">Nama Lengkap Terlapor</label></td>
                  <td><input type="text" className="w-full p-2 border" /></td>
                </tr>
                <tr className="mb-4">
                  <td className="pr-4"><label className="block text-gray-700">Status Terlapor</label></td>
                  <td>
                    <select className="w-full p-2 border">
                      <option>Mahasiswa</option>
                      <option>Dosen</option>
                      <option>Tenaga Kependidikan</option>
                      <option>Masyarakat Umum</option>
                    </select>
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="pr-4"><label className="block text-gray-700">No HP Terlapor</label></td>
                  <td><input type="text" className="w-full p-2 border" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Peristiwa */}
        <div className="mb-8 p-4 border rounded">
          <h2 className="text-xl font-bold mb-4">Peristiwa</h2>
          <table className="w-full">
            <tbody>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">Tanggal Peristiwa</label></td>
                <td><input type="date" className="w-full p-2 border" /></td>
              </tr>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">Lokasi Peristiwa</label></td>
                <td><input type="text" className="w-full p-2 border" /></td>
              </tr>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">Kronologi Peristiwa</label></td>
                <td><textarea className="w-full p-2 border"></textarea></td>
              </tr>
              <tr className="mb-4">
                <td className="pr-4"><label className="block text-gray-700">Upload File Bukti Tindakan</label></td>
                <td><input type="file" className="w-full p-2 border" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center">
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-2 rounded hover:bg-yellow-500 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Lapor;
