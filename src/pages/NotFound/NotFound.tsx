const NotFound = () => {
  return (
    <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-[var(--electric-green)]'>404</p>
        <h1 className='mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>
          Pagina nu a fost gasita
        </h1>
        <p className='mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>
          Ne pare rau, nu am putut gasi pagina pe care o cauti
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a
            href='/'
            className='shadow-xs rounded-md bg-[var(--electric-green)] px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--electric-green)]'
          >
            Inapoi acasa
          </a>
          <a href='/contact' className='text-sm font-semibold text-gray-900'>
            Contacteaza Suportul <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
