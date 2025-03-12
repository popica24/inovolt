import Gallery from './components/Gallery';
import { Toaster } from 'react-hot-toast';

const AboutUs = () => {
  return (
    <>
      {' '}
      <Toaster />
      <div className='container mx-auto mb-10 mt-36'>
        <div id='header' className='animated fixed top-0 z-10 hidden w-full bg-white' style={{ opacity: '.95' }}>
          <div className='bg-white'>
            <div className='flex flex-wrap content-center items-center'>
              <div className='flex w-1/2 justify-start font-extrabold text-white'>
                <a className='flex pl-2 text-gray-900 no-underline hover:text-gray-900 hover:no-underline' href='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#334484'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='lucide lucide-squirrel'
                  >
                    <path d='M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10' />
                    <path d='M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4' />
                    <path d='M15.2 22a3 3 0 0 0-2.2-5' />
                    <path d='M18 13h.01' />
                  </svg>{' '}
                  <span className='hidden w-0 pl-1 md:block md:w-auto'>Ghostwind CSS</span>
                </a>
              </div>
              <div className='flex w-1/2 content-center justify-end'>
                <p className='mr-3 hidden h-14 p-4 text-center text-xs sm:block'>
                  <span className='pr-2'>Share this</span> 👉
                </p>
                <a
                  className='hover:text-underline inline-block h-10 w-10 p-2 text-center text-white no-underline hover:text-white md:h-auto md:w-16 md:p-4'
                  href='https://twitter.com/intent/tweet?url=#'
                  style={{ backgroundColor: '#33b1ff' }}
                >
                  <svg className='h-4 fill-current text-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                    <path d='M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z'></path>
                  </svg>
                </a>
                <a
                  className='hover:text-underline inline-block h-10 w-10 p-2 text-center text-white no-underline hover:text-white md:h-auto md:w-16 md:p-4'
                  href='https://www.facebook.com/sharer/sharer.php?u=#'
                  style={{ backgroundColor: '#005e99' }}
                >
                  <svg className='h-4 fill-current text-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                    <path d='M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            id='progress'
            className='h-1 bg-white shadow'
            style={{ background: 'linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)' }}
          ></div>
        </div>

        <div className='container text-center'>
          <h1 className='break-normal text-3xl font-bold md:text-5xl'>
            O modalitate mai bună de a alimenta viitorul <br /> Stocare inteligentă a energiei solare cu InoVolt
          </h1>
        </div>

        <div
          className='container mx-auto mt-8 w-full max-w-6xl rounded bg-white bg-cover'
          style={{ backgroundImage: 'url(blog/about/hero.jpg)', height: '75vh' }}
        ></div>

        <div className='container mx-auto -mt-32 max-w-5xl'>
          <div className='mx-0 sm:mx-6'>
            <div className='w-full bg-white p-8 text-xl leading-normal text-gray-800 md:p-24 md:text-2xl'>
              <p className='mb-5 text-2xl md:text-3xl' data-aos='fade-up'>
                Revoluția stocării energiei cu PowerPack 16kWh
              </p>

              <p className='py-6' data-aos='fade-up'>
                Energia solară schimbă regulile jocului atât pentru proprietarii de locuințe, cât și pentru afaceri. În
                această postare pe blog, vom explora cum stocarea avansată a energiei, precum InoVolt, maximizează
                eficiența, reduce costurile și îți oferă adevărata independență energetică.
              </p>

              <p className='py-6' data-aos='fade-up'>
                Într-o lume în care independența energetică devine tot mai importantă, bateria Model PowerPack 16kWh
                reprezintă o soluție de vârf pentru stocarea energiei. Acest sistem de stocare bazat pe tehnologia Litiu
                Fier Fosfat (LiFePO4) combină capacitatea mare de stocare cu durabilitatea și siguranța, oferind o
                soluție completă pentru casele și afacerile care doresc să facă tranziția către un viitor energetic
                sustenabil.
              </p>
              <Gallery />
              <ol>
                <li className='py-3' data-aos='fade-up'>
                  <p className='mb-5 text-2xl md:text-3xl'>Durabilitate excepțională: Investiție pe termen lung</p>
                  Cu un ciclu de viață impresionant de peste 8000 de cicluri la 25°C, PowerPack 16kWh depășește
                  semnificativ durata de viață a bateriilor tradiționale. Acest aspect transformă bateria într-o
                  investiție pe termen lung, reducând costul per kWh stocat și oferind o soluție fiabilă pentru ani
                  întregi. În comparație cu alte tehnologii de stocare, această durabilitate extraordinară reprezintă un
                  avantaj competitiv major și un pas înainte către sisteme energetice mai sustenabile.
                </li>
                <li className='py-3' data-aos='fade-up'>
                  <p className='mb-5 text-2xl md:text-3xl'>Performanță în orice condiții: Adaptabilitate climatică</p>
                  Gama largă de temperaturi de operare (-20°C~60°C pentru descărcare) face ca această baterie să fie
                  potrivită pentru diverse zone climatice. Chiar și în condiții de temperaturi scăzute, bateria continuă
                  să funcționeze, deși cu capacitate redusă, iar opțiunea pentru un mecanism suplimentar de încălzire
                  pentru temperaturi sub 0°C demonstrează atenția acordată adaptabilității. Această flexibilitate
                  climatică face ca PowerPack 16kWh să fie o soluție viabilă la nivel global, indiferent de condițiile
                  meteorologice locale.
                </li>
                <li className='py-3' data-aos='fade-up'>
                  <p className='mb-5 text-2xl md:text-3xl'>Capacitate mare într-un design compact</p>
                  Cu o capacitate de 314Ah și o energie totală de 16kWh într-un format relativ compact (475x255x770mm),
                  această baterie oferă o densitate energetică impresionantă. Deși greutatea de aproximativ 112kg nu
                  este neglijabilă, raportul capacitate-dimensiune face ca PowerPack să fie o soluție eficientă pentru
                  spațiile rezidențiale și comerciale unde fiecare metru pătrat contează. Această combinație între
                  capacitate mare și dimensiuni moderate reprezintă un echilibru ideal pentru aplicațiile moderne de
                  stocare a energiei.{' '}
                </li>
              </ol>

              <blockquote data-aos='fade-up' className='my-8 border-l-4 border-green-500 pl-8 italic md:pl-12'>
                InoVolt PowerPack 16kWh reprezintă exact ceea ce piața avea nevoie. Nu este doar un produs - este
                răspunsul la provocările energetice ale prezentului și viitorului.
                <br /> - Andrei Niculae (CEO)
              </blockquote>

              <ol>
                <li className='py-3' data-aos='fade-up'>
                  <p className='mb-5 text-2xl md:text-3xl'>Scalabilitate: Putere adaptabilă nevoilor tale</p>
                  Una dintre caracteristicile definitorii ale PowerPack 16kWh este capacitatea de conectare în paralel,
                  suportând până la 16 unități conectate simultan. Această funcționalitate permite scalarea sistemului
                  de la o singură locuință până la aplicații comerciale mai mari, oferind flexibilitate pentru diverse
                  scenarii de utilizare și posibilitatea de extindere pe măsură ce nevoile energetice cresc.
                  Scalabilitatea reprezintă un aspect esențial pentru soluțiile energetice ale viitorului, iar PowerPack
                  excelează în această privință.
                </li>
              </ol>
            </div>
            <div className='flex w-full items-center p-8 font-sans md:p-24'>
              <img className='mr-4 h-10 w-10 rounded-full' src='ceo.jpg' alt='Avatar of Author' />
              <div className='flex-1'>
                <p className='text-base font-bold leading-none md:text-xl'>Andrei Niculae</p>
                <p className='text-xs text-gray-600 md:text-base'>O modalitate mai bună de a alimenta viitorul</p>
              </div>
              <div className='justify-end'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
