import Brands from './components/Brands';
import Hero from './components/Hero';

const Homepage = () => {
  return (
    <div className='container mx-auto my-10'>
      <Hero />
      <Brands />
    </div>
  );
};

export default Homepage;
