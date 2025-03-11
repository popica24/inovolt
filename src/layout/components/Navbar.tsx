import { useLocation } from 'react-router';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { mobileNavContainerVariant, mobileNavListVariant, mobileNavExitProps } from './data/animationConfig';
const Navbar = () => {
  return (
    <header className='bg-background text-text-primary fixed top-0 z-[40] mx-auto w-full border-b border-gray-100 p-[2em] uppercase  opacity-80 backdrop-blur-lg'>
      <div className='container mx-auto flex flex-wrap items-center justify-center'>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Navbar;

const Nav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className='default-font flex flex-1 items-center justify-end overflow-hidden lg:justify-center'>
        <div className='hidden justify-end md:flex'>
          <NavLinks />
        </div>
        <div className='flex w-[75px] justify-end md:hidden'>
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.div
            layout='position'
            key='nav-links'
            variants={mobileNavContainerVariant}
            initial='hidden'
            animate='show'
            className='mt-4 basis-full md:hidden'
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <a href='/' className='default-font mx-2'>
                Acasa
              </a>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <a href='/blog' className='default-font mx-2'>
                Magazin
              </a>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <a href='/blog' className='default-font mx-2'>
                Blog
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLinks = () => {
  return (
    <>
      <a className='default-font mx-2' href='/'>
        Acasa
      </a>
      <a className='default-font mx-2' href='/'>
        Magazin
      </a>
      <a className='default-font mx-2' href='/'>
        Blog
      </a>
    </>
  );
};
