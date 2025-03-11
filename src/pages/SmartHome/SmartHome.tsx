import Gallery from './components/Gallery';

const SmartHome = () => {
  return (
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
        style={{ backgroundImage: 'url(quantum-assets/blog/image-lg-post.png)', height: '75vh' }}
      ></div>

      <div className='container mx-auto -mt-32 max-w-5xl'>
        <div className='mx-0 sm:mx-6'>
          <div className='w-full bg-white p-8 text-xl leading-normal text-gray-800 md:p-24 md:text-2xl'>
            <p className='mb-5 text-2xl md:text-3xl' data-aos='fade-up'>
              Viitorul energiei domestice: Baterii inteligente și control mobil{' '}
            </p>

            <p className='py-6' data-aos='fade-up'>
              În era digitalizării și a tranziției energetice, casele noastre devin din ce în ce mai inteligente, iar
              sistemele de stocare a energiei evoluează în același ritm. Bateriile inteligente, precum modelul PowerPack
              16kWh de la InoVolt, nu reprezintă doar simple dispozitive de stocare a energiei, ci hub-uri energetice
              sofisticate care transformă fundamental modul în care interacționăm cu energia în locuințele noastre.
            </p>

            <Gallery />
            <ol>
              <li className='py-3' data-aos='fade-up'>
                <p className='mb-5 text-2xl md:text-3xl'>
                  De la baterii pasive la sisteme inteligente de management energetic
                </p>
                Evoluția bateriilor domestice a fost spectaculoasă în ultimul deceniu. Am trecut de la simple
                acumulatoare care stocau energie pentru perioade de criză, la sisteme complete de management energetic
                care optimizează automat consumul, producția și stocarea energiei. PowerPack 16kWh exemplifică perfect
                această evoluție prin BMS-ul (Battery Management System) său inteligent.
              </li>
              <li className='py-1' data-aos='fade-up'>
                Nivelul de încărcare al bateriei
              </li>
              <li className='py-1' data-aos='fade-up'>
                Temperatura celulelor
              </li>
              <li className='py-1' data-aos='fade-up'>
                Rata de încărcare și descărcare
              </li>
              <li className='py-1' data-aos='fade-up'>
                Sănătatea generală a bateriei
              </li>
              <li className='py-1' data-aos='fade-up'>
                Eficiența energetică a sistemului
              </li>
              <li className='py-3' data-aos='fade-up'>
                <p className='mb-5 text-2xl md:text-3xl'>
                  Controlul în palma mâinii tale: Aplicațiile mobile în ecosistemul energetic
                </p>
                Una dintre cele mai semnificative inovații în domeniul stocării energiei este integrarea cu aplicațiile
                mobile. În cazul PowerPack 16kWh, aplicația dedicată în limba română transformă complet experiența
                utilizatorului, oferind:
              </li>
              <li data-aos='fade-up'>
                <b>Monitorizare în timp real: </b>
                Urmărirea nivelului de încărcare, a fluxurilor de energie și a performanței sistemului de oriunde te-ai
                afla.
              </li>
              <li data-aos='fade-up'>
                <b>Control de la distanță: </b>
                Posibilitatea de a comuta între diferite moduri de operare sau de a prioritiza anumite sarcini
                energetice fără a fi fizic prezent în locuință.
              </li>
              <li data-aos='fade-up'>
                <b>Analiză detaliată: </b>
                Accesul la statistici și grafice care ilustrează producția, consumul și stocarea energiei pe perioade
                diferite, permițând identificarea tiparelor și optimizarea ulterioară.
              </li>
              <li data-aos='fade-up'>
                <b>Notificări și alerte: </b>
                Informări automate despre evenimente importante precum întreruperi de curent, finalizarea ciclurilor de
                încărcare sau posibile probleme tehnice.
              </li>

              <li className='py-3' data-aos='fade-up'>
                <p className='mb-5 text-2xl md:text-3xl'>Integrarea în ecosistemul casei inteligente</p>
                Bateriile moderne precum PowerPack 16kWh nu funcționează izolat, ci se integrează perfect în ecosistemul
                mai larg al casei inteligente. Compatibilitatea cu diverse invertoare populare (SMA, Victron Energy,
                Deye, Growatt, Goodwe, Sermatec) permite conectarea cu:
              </li>
              <li className='py-1' data-aos='fade-up'>
                Sistemele de panouri fotovoltaice
              </li>
              <li className='py-1' data-aos='fade-up'>
                Pompe de căldură inteligente
              </li>
              <li className='py-1' data-aos='fade-up'>
                Sisteme de încălzire cu control electronic
              </li>
              <li className='py-1' data-aos='fade-up'>
                Stații de încărcare pentru vehicule electrice
              </li>
              <li className='py-1' data-aos='fade-up'>
                Sisteme de management al consumului pentru aparate electrocasnice
              </li>
            </ol>

            <ol>
              <li className='py-3' data-aos='fade-up'>
                <p className='mb-5 text-2xl md:text-3xl'>Beneficiile economice ale controlului inteligent</p>
                Controlul mobil al bateriilor inteligente nu este doar o chestiune de confort, ci și o oportunitate
                economică semnificativă. Proprietarii de sisteme PowerPack 16kWh pot:
              </li>
              <li data-aos='fade-up'>
                <b>Optimiza autoconsumul:</b> Utilizarea energiei solare stocate în perioadele de vârf tarifare.
              </li>
              <li data-aos='fade-up'>
                <b>Participa la programe de răspuns la cerere: </b> În regiunile unde este disponibil, proprietarii pot
                primi compensații financiare pentru ajustarea consumului în perioadele de stres al rețelei.
              </li>
              <li data-aos='fade-up'>
                <b>Monetiza capacitatea de stocare: </b>În unele piețe, excesul de capacitate de stocare poate fi vândut
                către operatorii de rețea.
              </li>
              <li data-aos='fade-up'>
                <b>Reduce taxele de rețea: </b>În multe țări, taxele de rețea sunt calculate în funcție de vârfurile de
                consum, care pot fi aplatizate prin utilizarea inteligentă a bateriilor.
              </li>
            </ol>
          </div>

          <div className='container mt-8 rounded bg-green-100 p-4 text-center font-sans md:p-24'>
            <h2 className='break-normal text-2xl font-bold md:text-4xl'>Inregistreaza-ti produsul !</h2>
            <h3 className=' break-normal text-base font-normal text-gray-600 md:text-xl'>
              Pentru o garantie extra de 3 luni inregistreaza-ti prodsul
            </h3>
            <div className='w-full pt-4 text-center'>
              <form action='#'>
                <div className='mx-auto flex max-w-sm flex-wrap items-center p-1 pr-0'>
                  <input
                    type='email'
                    placeholder='Seria Bateriei'
                    className='mr-2 flex-1 appearance-none rounded p-3 text-gray-600 shadow focus:outline-none'
                  />
                  <button
                    type='submit'
                    className='mt-4 block flex-1 appearance-none rounded bg-green-500 py-4 text-base font-semibold uppercase tracking-wider text-white shadow hover:bg-green-400 md:mt-0 md:inline-block'
                  >
                    Trimite
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='flex w-full items-center p-8 font-sans md:p-24'>
            <img className='mr-4 h-10 w-10 rounded-full' src='' alt='Avatar of Author' />
            <div className='flex-1'>
              <p className='text-base font-bold leading-none md:text-xl'>Andrei Niculae</p>
              <p className='text-xs text-gray-600 md:text-base'>O modalitate mai bună de a alimenta viitorul</p>
            </div>
            <div className='justify-end'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartHome;
