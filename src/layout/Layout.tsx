import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Layout = () => {
  return (
    <>
      <a
        href='/inregistrare-produs'
        data-aos='fade-right'
        className='fixed bottom-5 left-5 z-[999] animate-bounceUpDown rounded-xl bg-[var(--electric-green)] p-4 text-white'
      >
        Extindere Garantie 3 ani
      </a>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
