const Guide = () => {
  return (
    <div className='container mx-auto mb-10 mt-36'>
      <div className='relative p-5 sm:p-8 md:p-12'>
        <div
          className='h-64 overflow-hidden bg-cover bg-center text-center'
          style={{ height: '450px', backgroundImage: 'url(blog/guide/hero.webp)' }}
        ></div>
        <div className='mx-auto max-w-2xl'>
          <div className='mt-3 flex flex-col justify-between rounded-b bg-white leading-normal lg:rounded-b-none lg:rounded-r'>
            <div className=''>
              <h1 className='mb-2 text-2xl font-bold text-gray-900'>
                Cum să alegi bateria potrivită pentru sistemul tău solar
              </h1>
              <p className='mt-2 text-xs text-gray-700'>
                <p className='ms-1 font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900'>
                  Andrei Niculae
                </p>
              </p>
              <p className='my-5 text-base leading-8'>
                Alegerea unei baterii pentru sistemul tău solar reprezintă una dintre cele mai importante decizii în
                drumul spre independența energetică. Această investiție pe termen lung merită atenție deosebită, având
                în vedere impactul major asupra eficienței întregului sistem. Iată un ghid complet care te va ajuta să
                faci alegerea potrivită nevoilor tale specifice.
              </p>
              <h3 className='my-5 text-2xl font-bold'>1. Înțelege nevoile tale energetice</h3>
              <p className='my-5 text-base leading-8'>
                Înainte de a compara modele și specificații, este esențial să înțelegi exact cât de multă energie ai
                nevoie să stochezi:
                <ul className='list-disc'>
                  <li>
                    <b>Calculează consumul zilnic:</b> Fă o listă cu toate dispozitivele electrice pe care le folosești,
                    puterea lor și timpul de utilizare zilnic. Totalizează pentru a obține necesarul de kWh/zi.
                  </li>
                  <li>
                    <b>Stabilește autonomia dorită:</b> Decide pentru câte zile vrei să ai independență energetică în
                    cazul lipsei soarelui sau a unei pene de curent.
                  </li>
                  <li>
                    <b>Identifică vârfurile de consum:</b> Notează dispozitivele cu consum mare care funcționează
                    simultan pentru a determina puterea maximă necesară.
                  </li>
                </ul>
                Aceste calcule îți vor oferi două cifre esențiale: capacitatea necesară (kWh) și puterea de vârf (kW) pe
                care trebuie să le asigure bateria ta.{' '}
              </p>

              <h3 className='my-5 text-2xl font-bold'>2. Alege tehnologia potrivită</h3>
              <p className='my-5 text-base leading-8'>
                Există mai multe tipuri de baterii, fiecare cu avantaje și dezavantaje:
                <ul className='mt-4 list-disc'>
                  <b>Litiu Fier Fosfat (LiFePO4)</b>
                  <li>
                    Avantaje: Durată de viață lungă (peste 8000 de cicluri), siguranță ridicată, nu suferă de efectul de
                    memorie
                  </li>
                  <li>Dezavantaje: Cost inițial mai ridicat, greutate considerabilă</li>
                </ul>
                <ul className='mt-4 list-disc'>
                  <b>Litiu-Ion</b>
                  <li>Avantaje: Densitate energetică ridicată, greutate redusă, eficiență bună</li>
                  <li>Dezavantaje: Durată de viață mai scurtă (1500-3000 cicluri), risc de supraîncălzire</li>
                </ul>
                <ul className='my-4 list-disc'>
                  <b>Plumb-Acid</b>
                  <li>Avantaje: Cost inițial redus, tehnologie matură</li>
                  <li>
                    Dezavantaje: Durată de viață scurtă (300-500 cicluri), necesită întreținere, densitate energetică
                    scăzută
                  </li>
                </ul>
                Pentru majoritatea utilizatorilor casnici care caută o soluție pe termen lung, bateriile LiFePO4
                reprezintă cea mai bună alegere datorită duratei de viață excelente și siguranței superioare.
              </p>

              <h3 className='my-5 text-2xl font-bold'>3. Evaluează capacitatea și puterea</h3>
              <p className='my-5 text-base leading-8'>
                Odată ce ai stabilit tehnologia, trebuie să te asiguri că bateria aleasă poate:
                <ul className='mt-4 list-disc'>
                  <li>
                    <b>Stoca suficientă energie</b> pentru a-ți acoperi nevoile zilnice și autonomia dorită (kWh)
                  </li>
                  <li>
                    <b>Furniza suficientă putere</b> pentru a alimenta toate dispozitivele simultan (verifică curentul
                    maxim de descărcare)
                  </li>
                </ul>
                De exemplu, o baterie precum PowerPack 16kWh cu o capacitate de 16kWh și un curent maxim de descărcare
                de 200A poate alimenta o casă medie pentru 1-2 zile și poate susține vârfuri de consum considerabile.{' '}
              </p>

              <h3 className='my-5 text-2xl font-bold'>4. Verifică compatibilitatea cu sistemul existent</h3>
              <p className='my-5 text-base leading-8'>
                Asigură-te că bateria este compatibilă cu:
                <ul className='mt-4 list-disc'>
                  <li>
                    <b>Invertorul</b> tău existent sau planificat
                  </li>
                  <li>
                    <b>Panourile solare</b> (tensiune, curent)
                  </li>
                  <li>
                    <b>Sistemul de management al energiei</b> din casă
                  </li>
                </ul>
                Verifică lista de invertoare compatibile specificată de producător și asigură-te că tensiunea nominală a
                bateriei (ex. 51.2V pentru PowerPack) se potrivește cu cerințele sistemului tău.
              </p>

              <h3 className='my-5 text-2xl font-bold'>5. Verifică garanția și suportul tehnic</h3>
              <p className='my-5 text-base leading-8'>
                Asigură-te că:
                <ul className='mt-4 list-disc'>
                  <li>
                    <b>Perioada de garanție</b> este suficient de lungă (minim 5 ani)
                  </li>
                  <li>
                    <b>Există suport tehnic local</b> pentru instalare și eventuale probleme
                  </li>
                  <li>
                    <b>Producătorul are un istoric solid</b> și nu va dispărea peste câțiva ani
                  </li>
                </ul>
              </p>

              <h3 className='my-5 text-2xl font-bold'>6. Consideră caracteristicile inteligente</h3>
              <p className='my-5 text-base leading-8'>
                Bateriile moderne oferă funcționalități suplimentare valoroase:
                <ul className='mt-4 list-disc'>
                  <li>
                    <b>BMS inteligent</b> (Battery Management System) pentru protecție și optimizare
                  </li>
                  <li>
                    <b>Monitorizare la distanță</b> prin aplicații mobile
                  </li>
                  <li>
                    <b>Interfețe ușor de utilizat</b> (ecran LCD, configurare intuitivă){' '}
                  </li>
                  <li>
                    <b>Strategii de încărcare/descărcare</b> adaptabile la tarife dinamice de energie{' '}
                  </li>
                </ul>
              </p>
              <h3 className='my-5 text-2xl font-bold'>Concluzie</h3>
              <p className='my-5 text-base leading-8'>
                Alegerea bateriei potrivite pentru sistemul tău solar este o decizie complexă care implică mult mai mult
                decât simpla comparare a prețurilor. O baterie de calitate precum PowerPack 16kWh, cu tehnologie
                LiFePO4, durabilitate ridicată și caracteristici inteligente reprezintă o investiție sigură pentru
                independența ta energetică pe termen lung.
              </p>
              <p className='my-5 text-base leading-8'>
                Ia-ți timp pentru a evalua toate aspectele menționate mai sus și consultă întotdeauna un specialist
                înainte de a lua decizia finală. Independența energetică este un maraton, nu un sprint, iar bateria este
                inima acestui sistem care îți va servi casa pentru mulți ani de acum înainte.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
