const Apps = () => {
  return (
    <div className='container'>
      <div className='section-bold-title'>Descarca aplicatia noastra</div>
      <div className='flex flex-col items-center justify-center md:flex-row'>
        <a href='#apple' className='md:me-4 '>
          <img className='w-[300px]' src='app-store.png' />
        </a>

        <a href='#android' className='md:ms-4'>
          <img className='w-[300px]' src='google-play.png' />
        </a>
      </div>
    </div>
  );
};

export default Apps;
