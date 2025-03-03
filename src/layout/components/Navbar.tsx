import { NavLink, useLocation } from 'react-router';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { mobileNavContainerVariant, mobileNavListVariant, mobileNavExitProps } from './data/animationConfig';
const Navbar = () => {
  return (
    <header className='bg-background text-text-primary sticky top-0 z-[40] mx-auto w-full border-b border-gray-100 bg-[var(--pale-pink)] p-[2em] uppercase  opacity-80 backdrop-blur-lg'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
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
              <NavLink to='/' className={activeStyleCallback}>
                Product
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to='/blog' className={activeStyleCallback}>
                Features
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to='/blog' className={activeStyleCallback}>
                Marketplace
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to='/blog' className={activeStyleCallback}>
                Reviews
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const activeClassName = 'selected navlink mx-2 default-font';
const activeStyleCallback = ({ isActive }: { isActive: Boolean }) =>
  isActive ? activeClassName : 'default-font navlink';

const NavLinks = () => {
  return (
    <>
      <NavLink className={activeStyleCallback} to={'/'}>
        Product
      </NavLink>
      <NavLink className={activeStyleCallback} to={'/'}>
        Features
      </NavLink>
      <NavLink className={activeStyleCallback} to={'/'}>
        Marketplace
      </NavLink>
      <NavLink className={activeStyleCallback} to={'/'}>
        Reviews
      </NavLink>
    </>
  );
};
