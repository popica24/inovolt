import clsx from 'clsx';

const Team = () => {
  return (
    <section className='w-full py-12 lg:py-24' x-data='{ activeSlide: 1, slideCount: 2 }'>
      <div className='container mx-auto px-4'>
        <div className='-mx-4 mb-12 flex flex-wrap items-center md:mb-20'>
          <div className='mb-12 w-full px-4 md:mb-0 md:w-1/2'>
            <div>
              <h1 className='section-title whitespace-nowrap'>Recomandati de partenerii nostri !</h1>
              <p className='mt-8 text-[1.5rem] leading-5 text-gray-700'>
                Partenerii noștri de încredere garantează calitatea și performanța.
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center transition-transform duration-1000 ease-in-out md:flex-row'>
          <Bubble color='#ab23ff8f' image={'team/voltra.png'} />
          <Bubble color='#7eb6518f' image={'team/jts.jpg'} />
          <Bubble color='#0000FF8f' image={'team/pendb.jpg'} />
        </div>
      </div>
    </section>
  );
};

export default Team;

const Bubble = ({ image, color }: { image: string; color: string }) => {
  return (
    <div
      className={clsx('relative my-3 h-full overflow-hidden rounded-full border-[5px] md:mr-8 ')}
      style={{ borderColor: color }}
    >
      <img
        className='block aspect-square h-full w-[180px] min-w-[100px] rounded-full object-cover md:w-[250px]'
        src={image}
        alt=''
      />
    </div>
  );
};
