import Tilt from 'react-parallax-tilt';

const Brands = () => {
  return (
    <div className='my-12 bg-white p-4'>
      <h1 className='section-title' data-aos='fade-up' data-aos-delay='200'>
        Compatibilitate cu branduri de top
      </h1>
      <p
        className='leading-[calc(var(0.25rem * 8))] mt-6 text-[1.1rem] text-[#6a7282]'
        data-aos='fade-up'
        data-aos-delay='400'
      >
        Compatibilitatea cu branduri de invertoare de top este un aspect esențial atunci când alegi un sistem de stocare
        a energiei solare.{' '}
      </p>
      <div className='mt-6 grid grid-cols-2 flex-row flex-wrap place-items-center items-center justify-around md:grid-cols-3 lg:flex'>
        <LogoCard url='logos/solis.webp' />
        <LogoCard url='logos/growat.png' />
        <LogoCard url='logos/victron.webp' />
        <LogoCard url='logos/deye.jpeg' />
        <LogoCard url='logos/sungrow.jpg' />
        <LogoCard url='logos/fronius.webp' />
      </div>
    </div>
  );
};

export default Brands;

function LogoCard({ url }: { url: string }) {
  return (
    <Tilt
      glareEnable={true}
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      perspective={800}
      transitionSpeed={1500}
      scale={1.1}
      gyroscope={true}
      className='m-4 aspect-square w-[120px] bg-cover bg-center bg-no-repeat drop-shadow-lg sm:w-[133px] xl:w-[150px]'
      style={{
        backgroundImage: `url(${url})`,
      }}
    ></Tilt>
  );
}
