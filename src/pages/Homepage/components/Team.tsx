import clsx from 'clsx';

const Team = () => {
  return (
    <section className='w-full py-12 lg:py-24' x-data='{ activeSlide: 1, slideCount: 2 }'>
      <div className='container mx-auto px-4'>
        <div className='-mx-4 mb-12 flex flex-wrap items-center md:mb-20'>
          <div className='mb-12 w-full px-4 md:mb-0 md:w-1/2'>
            <div>
              <h1 className='section-title whitespace-nowrap'>Meet our experts</h1>
              <p className='mt-8 leading-5 text-gray-700'>
                Our team boasts top green energy experts, driving innovation in sustainability.
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center transition-transform duration-1000 ease-in-out md:flex-row'>
          <Bubble color='#ab23ff8f' image={'team/dev.jpeg'} name='Andrei Popescu' role='Developer' />
          <Bubble color='#7eb6518f' image={'team/ceo.jpg'} name='Nume Prenume' role='CEO' />
          <Bubble color='#0000FF8f' image={'team/marketing.webp'} name='Nume Prenume' role='Marketing' />
        </div>
      </div>
    </section>
  );
};

export default Team;

const Bubble = ({ name, role, image, color }: { name: string; role: string; image: string; color: string }) => {
  return (
    <div
      className={clsx('relative my-3 h-full overflow-hidden rounded-full border-[5px] md:mr-8 ')}
      style={{ borderColor: color }}
    >
      <div className='absolute bottom-[-20px] left-1/2 w-[200px] -translate-x-1/2 p-4 text-center'>
        <div className='rounded-xl px-4 py-2 text-white' style={{ backgroundColor: color }}>
          <span className='block font-medium'>{role}</span>
        </div>
      </div>
      <div className='absolute left-1/2 top-[-42px] w-[200px] -translate-x-1/2 p-4 text-center'>
        <div className='rounded-xl px-4 pb-2 pt-10 text-white' style={{ backgroundColor: color }}>
          <span className='block font-medium'>{name}</span>
        </div>
      </div>
      <img
        className='block aspect-square h-full w-[180px] min-w-[100px] rounded-full object-cover md:w-[250px]'
        src={image}
        alt=''
      />
    </div>
  );
};
