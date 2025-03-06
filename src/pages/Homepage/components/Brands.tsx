import Tilt from 'react-parallax-tilt';

const Brands = () => {
  return (
    <div className='my-12 bg-white p-4'>
      <h1 className='section-title' data-aos='fade-up' data-aos-delay='200'>
        Compatible with top notch brands
      </h1>
      <p
        className='leading-[calc(var(0.25rem * 8))] mt-6 text-[1.25rem] text-[#6a7282]'
        data-aos='fade-up'
        data-aos-delay='400'
      >
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
        veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
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
