import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to={'/'} className='logo h-full w-24 rounded-full drop-shadow-lg'>
      <img src='logo.png' className='rounded-full' alt='logo' />
    </Link>
  );
};

export default Logo;
