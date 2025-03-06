import Brands from './components/Brands';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Team from './components/Team';
import Stats from './components/Stats';
// import Reviews from './components/Reviews';

const Homepage = () => {
  return (
    <div className='container mx-auto my-10'>
      <Hero /> <hr className='mt-8' />
      <Brands /> <hr />
      <Stats /> <hr />
      <div
        className='my-6 flex w-full flex-col items-center justify-center'
        data-aos='fade-up'
        data-aos-duration='3000'
      >
        <h2 className='section-bold-title'>We proudly present</h2>
        <img src='battery.png' className='my-6' />
        <h2 className='section-title text-2xl'>The InoVolt 16kw PowerPack</h2>
      </div>
      <hr />
      <Blog /> <hr />
      <Team /> <hr />
      {/* <Reviews /> <hr /> */}
    </div>
  );
};

export default Homepage;
