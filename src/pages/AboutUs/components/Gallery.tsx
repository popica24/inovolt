const Gallery = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg' src='blog/about/2.png' alt='' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg' src='blog/about/3.png' alt='' />
        </div>
      </div>
    </>
  );
};

export default Gallery;
