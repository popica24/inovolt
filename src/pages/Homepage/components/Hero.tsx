import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <div className='grid-cols-6 items-center px-5 md:grid'>
      <div className='col-span-4'>
        <div className='flex flex-col items-center justify-start'>
          <div className='mb-6 me-auto rounded-full border border-[#E7E7E9] px-4 py-1' data-aos='fade-up'>
            <div className='flex flex-row items-center'>
              <p className='font-semibold text-[#7eb651]'>Battery InoVolt 16kW</p>
              <span className='h-full px-2 text-[#E7E7E9]'>|</span>
              <p className='font-medium'>Check in store</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                height={20}
                fill='#b6b6b8'
                aria-hidden='true'
                data-slot='icon'
                className='mt-[3px]'
              >
                <path
                  fill-rule='evenodd'
                  d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
          </div>
          <h1 className='text-[4.5rem] font-[610] leading-[1] text-[#101828]' data-aos='fade-up' data-aos-delay='200'>
            A better way to store solar energy
          </h1>
          <p
            className='leading-[calc(var(0.25rem * 8))] mt-6 text-[1.25rem] text-[#6a7282]'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
          </p>
          <div className='mt-6 flex w-full flex-row items-center justify-start' data-aos='fade-up' data-aos-delay='600'>
            <button className='rounded bg-[#55BC01] px-4 py-2 font-bold text-white hover:bg-white hover:text-[#55BC01]'>
              Marketplace
            </button>
            <button className='ms-4 rounded bg-white px-4 py-2 font-bold text-[#55BC01] hover:bg-[#55BC01] hover:text-white'>
              Consultancy
            </button>
          </div>
        </div>
      </div>
      <div className='col-span-2 mx-auto mt-12 max-w-[300px] md:mx-0 md:mt-0 md:max-w-none'>
        <svg role='img' viewBox='0 0 366 729' data-aos='fade-left' data-aos-delay='300'>
          <title>App screenshot</title>
          <defs>
            <clipPath id='2ade4387-9c63-4fc4-b754-10e687a0d332'>
              <rect rx='36' width='316' height='684'></rect>
            </clipPath>
          </defs>
          <path
            d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
            fill='#4B5563'
          ></path>
          <path
            d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
            fill='#343E4E'
          ></path>
          <foreignObject
            width='316'
            height='684'
            clip-path='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'
            transform='translate(24 24)'
          >
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={1500}
              showIndicators={false}
            >
              <img
                className='h-full w-full'
                alt=''
                src='https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/90/79/98/90799808-b769-22e7-16c4-0e4e9f381b22/49735dd0-db41-4662-934f-06133ec77b21__U5fae_U4fe1_U56fe_U7247_20240113145521.jpg/300x0w.webp'
              />
              <img
                className='h-full w-full'
                alt=''
                src='https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/36/97/dd/3697ddb4-5395-62a3-c2fc-617b6d18c3e5/d04b9e63-c8b0-45d4-8bdd-9f024390bc96__U5fae_U4fe1_U56fe_U7247_20240113145509.jpg/300x0w.webp'
              />
              <img
                className='h-full w-full'
                alt=''
                src='https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/73/2e/c7/732ec76b-fa12-411c-d13a-e5de01db01d2/a9f56dd8-16bc-43c2-baea-5006a2dd86a4__U5fae_U4fe1_U56fe_U7247_20240113145534.jpg/300x0w.webp'
              />
            </Carousel>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
