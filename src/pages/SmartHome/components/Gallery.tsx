const Gallery = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg' src='blog/smarthome/1.jpg' alt='' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg' src='blog/smarthome/2.png' alt='' />
        </div>
      </div>
    </>
  );
};

export default Gallery;
