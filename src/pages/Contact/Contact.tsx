const Contact = () => {
  return (
    <section className='mt-36 bg-white dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
        <h2 className='section-bold-title'>Contactează-ne !</h2>
        <p className='mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400'>
          Ai vreo problemă, nelămurire sau întrebare? Suntem aici să te ajutăm! Nu ezita să ne scrii și îți vom răspunde
          cât mai repede posibil.{' '}
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
              placeholder='exemplu@email.com'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
              Telefon
            </label>
            <input
              type='text'
              id='email'
              className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
              placeholder='07XXXXXXXX'
              required
            />
          </div>
          <div>
            <label htmlFor='subject' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
              Subiect
            </label>
            <input
              type='text'
              id='subject'
              className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
              placeholder='Subiectul discutiei'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'>
              Mesajul tau
            </label>
            <textarea
              id='message'
              rows={6}
              className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
              placeholder='Continutul discutiei'
            ></textarea>
          </div>
          <button
            type='submit'
            className='hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-[var(--electric-green)] px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit'
          >
            Trimite mesajul !
          </button>
        </form>
        <h2 className='section-bold-title my-12'>Ne găsiți și aici</h2>
        <div className='flex w-full items-center justify-center'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.6217503738567!2d26.08090967656167!3d44.3998858038183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffba07697937%3A0xf6e834607fa8e7e5!2sStrada%20Popa%20%C8%98tefan%2052%2C%20Bucure%C8%99ti%20052034!5e0!3m2!1sen!2sro!4v1741653191992!5m2!1sen!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            height='450'
            width={'100%'}
            style={{ border: 0 }}
            aria-hidden='false'
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
