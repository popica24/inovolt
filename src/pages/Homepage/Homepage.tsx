import Brands from './components/Brands';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Team from './components/Team';

const Homepage = () => {
  return (
    <div className='container mx-auto my-10'>
      <Hero />
      <Brands />
      <Blog />
      <Team />
    </div>
  );
};

export default Homepage;
