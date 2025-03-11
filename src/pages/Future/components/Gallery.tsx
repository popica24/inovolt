const Gallery = () => {
  return (
    <>
      <div className='grid grid-cols-2 place-items-center gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg' src='blog/future/1.jpeg' alt='' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg' src='blog/future/2.webp' alt='' />
        </div>
      </div>
    </>
  );
};

export default Gallery;
