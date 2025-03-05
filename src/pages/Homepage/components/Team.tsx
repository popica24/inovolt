const Team = () => {
  return (
    <section className='w-full py-12 lg:py-24' x-data='{ activeSlide: 1, slideCount: 2 }'>
      <div className='container mx-auto px-4'>
        <div className='-mx-4 mb-12 flex flex-wrap items-center md:mb-20'>
          <div className='mb-12 w-full px-4 md:mb-0 md:w-1/2'>
            <div>
              <h1 className='font-heading mb-4 text-5xl sm:text-6xl'>Meet our experts</h1>
              <p className='text-gray-700'>
                Our team boasts top green energy experts, driving innovation in sustainability.
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-row flex-wrap justify-evenly transition-transform duration-1000 ease-in-out'>
          <div className=' relative my-3 mr-8 h-full overflow-hidden'>
            <div className='absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 p-4 text-center'>
              <div className='rounded-xl bg-white px-4 py-2'>
                <span className='block font-medium'>Nume Prenume</span>{' '}
                <span className='text-sm text-gray-700'>Rol</span>
              </div>
            </div>
            <img
              className='block h-full w-[200px] rounded-2xl object-cover md:w-[250px]'
              src='team/placeholder.webp'
              alt=''
            />
          </div>
          <div className=' relative my-3 mr-8 h-full overflow-hidden'>
            <div className='absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 p-4 text-center'>
              <div className='rounded-xl bg-white px-4 py-2'>
                <span className='block font-medium'>Nume Prenume</span>{' '}
                <span className='text-sm text-gray-700'>Rol</span>
              </div>
            </div>
            <img
              className='block h-full w-[200px] rounded-2xl object-cover md:w-[250px]'
              src='team/placeholder.webp'
              alt=''
            />
          </div>
          <div className=' relative my-3 mr-8 h-full overflow-hidden'>
            <div className='absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 p-4 text-center'>
              <div className='rounded-xl bg-white px-4 py-2'>
                <span className='block font-medium'>Nume Prenume</span>{' '}
                <span className='text-sm text-gray-700'>Rol</span>
              </div>
            </div>
            <img
              className='block h-full w-[200px] rounded-2xl object-cover md:w-[250px]'
              src='team/placeholder.webp'
              alt=''
            />
          </div>
          <div className=' relative my-3 mr-8 h-full overflow-hidden'>
            <div className='absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 p-4 text-center'>
              <div className='rounded-xl bg-white px-4 py-2'>
                <span className='block font-medium'>Nume Prenume</span>{' '}
                <span className='text-sm text-gray-700'>Rol</span>
              </div>
            </div>
            <img
              className='block h-full w-[200px] rounded-2xl object-cover md:w-[250px]'
              src='team/placeholder.webp'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
