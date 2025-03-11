import Brands from './components/Brands';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Team from './components/Team';
import Stats from './components/Stats';
import Apps from './components/Apps';
// import Reviews from './components/Reviews';

const Homepage = () => {
  return (
    <>
      <a
        href='http://localhost:5173/despre-inovolt#inregistreaza-produs'
        data-aos='fade-right'
        className='animate-bounceUpDown fixed bottom-5 left-5 z-[999] rounded-full bg-[var(--electric-green)] p-4 text-white'
      >
        Pentru extinderea garanției cu 3 luni GRATUIT, click aici
      </a>
      <div className='container mx-auto mb-10 mt-36'>
        <Hero /> <hr className='mt-8' />
        <Brands /> <hr />
        <Stats /> <hr />
        <div
          className='my-6 flex w-full flex-col items-center justify-center'
          data-aos='fade-up'
          data-aos-duration='3000'
        >
          <h2 className='section-bold-title'>Vă prezentăm cu mândrie</h2>
          <img src='battery.png' className='my-6' />
          <h2 className='section-title text-2xl'>Bateria InoVolt 16kw</h2>
        </div>
        <hr />
        <Blog /> <hr />
        <Apps />
        <Team /> <hr />
        {/* <Reviews /> <hr /> */}
      </div>
    </>
  );
};

export default Homepage;
