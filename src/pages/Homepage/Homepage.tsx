import Brands from './components/Brands';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Team from './components/Team';
import Stats from './components/Stats';
import Apps from './components/Apps';
// import Reviews from './components/Reviews';

const Homepage = () => {
  return (
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
      <h2 className='section-bold-title my-12'>Ne găsiți și aici</h2>
      <div className='flex w-full items-center justify-center'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.6217503738567!2d26.08090967656167!3d44.3998858038183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffba07697937%3A0xf6e834607fa8e7e5!2sStrada%20Popa%20%C8%98tefan%2052%2C%20Bucure%C8%99ti%20052034!5e0!3m2!1sen!2sro!4v1741653191992!5m2!1sen!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          height='450'
          width={'100%'}
          style={{ border: 0 }}
          aria-hidden='false'
          tabIndex={0}
        />
      </div>
      {/* <Reviews /> <hr /> */}
    </div>
  );
};

export default Homepage;
