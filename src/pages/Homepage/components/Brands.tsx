import Tilt from 'react-parallax-tilt';
import { useState } from 'react';

const Brands = () => {
  return (
    <div className='mt-12 bg-white'>
      <h1 className='mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
        Compatible with top notch brands.
      </h1>
      <p className='mb-6 text-lg font-normal sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400'>
        Compatible with top-notch brands, ensuring seamless integration with the most reliable and trusted names in the
        industry. Whether you're upgrading your system or building a new one, our solutions are designed to work
        effortlessly with leading brands, providing superior performance, reliability, and long-lasting results.
        Experience the peace of mind that comes with knowing your equipment is fully compatible with the best in the
        business.
      </p>
      <div className='flex flex-row flex-wrap justify-center'>
        <LogoCard url='logos/solis.webp' />
        <LogoCard url='logos/growat.png' />
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
      className='m-4 aspect-square w-[120px] bg-cover bg-center bg-no-repeat drop-shadow-lg sm:w-[150px]'
      style={{
        backgroundImage: `url(${url})`,
      }}
    ></Tilt>
  );
}
