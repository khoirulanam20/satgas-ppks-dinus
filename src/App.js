import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pengantar from './pages/Pengantar';
import Filosofi from './pages/Filosofi';
import Kegiatan from './pages/Kegiatan';
import Dokumen from './pages/Dokumen';
import Galeri from './pages/Galeri';
import Lapor from './pages/Lapor';
import AdminDashboard from './components/AdminDashboard';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pengantar" element={<Pengantar />} />
            <Route path="/filosofi" element={<Filosofi />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/dokumen" element={<Dokumen />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/lapor" element={<Lapor />} />
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
