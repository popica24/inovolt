import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ValidateBattery = () => {
  const [batterySeries, setBatterySeries] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bill, setBill] = useState<File | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setBill(e.target.files[0]);
    }
  };

  const convertToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;

    if (!bill) {
      toast.error('Va rugam sa adaugati factura');
      return;
    }
    if (!submitBtn) {
      return;
    }
    setIsLoading(true);

    submitBtn.innerText = 'Se verifica seria bateriei...';

    try {
      // Convert file to base64
      const base64File = await convertToBase64(bill);

      const formData = new FormData();

      formData.append('battery_series', batterySeries);

      const batteryExistResponse = await axios({
        method: 'post',
        url: 'https://script.google.com/macros/s/AKfycbzvtzSde0BoY9CZpGkqz-3DDDVgLWyO8i01TqLfynXXz9HygvKYSygOBDex15lzQRmj/exec',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const batteryExistData = batteryExistResponse.data;

      if (batteryExistData && batteryExistData.result === 'error') {
        toast.error(batteryExistData.msg || 'Seria bateriei nu exista !');
        setIsLoading(false);
        submitBtn.innerText = 'Inregistreaza bateria !';
        return;
      }

      formData.append('name', firstName + ' ' + lastName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('bill', base64File);

      // If first call succeeds, proceed with second call
      if (batteryExistData && batteryExistData.result === 'succes') {
        submitBtn.innerText = 'Seria bateriei a fost gasita !';
        setTimeout(() => (submitBtn.innerText = 'Se finalizeaza validarea...'), 1000);
        const verifyBatteryResponse = await axios({
          method: 'post',
          url: 'https://script.google.com/macros/s/AKfycbyZFBXqM_2F_HDLdvfAklI7SanbmQ-0UDLxOYmpjQ7DQ02ykqdus6wpqnmhJ9VDFUnzEw/exec',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const verifyBatteryData = verifyBatteryResponse.data;
        if (verifyBatteryData && verifyBatteryData.result === 'success') {
          toast.success('Inregistrare cu succes ! Bucurati-va de garantia extinsa !');
        } else {
          toast.error('Nu s-a putut valida inregistrarea');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('A apărut o eroare la trimiterea formularului');
    } finally {
      setIsLoading(false);
      submitBtn.innerText = 'Inregistreaza bateria !';
      setBatterySeries('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <>
      {' '}
      <div>
        <Toaster />
      </div>
      <div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div
          className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
          aria-hidden='true'
        >
          <div className='aspect-1155/678 bg-linear-to-tr relative left-1/2 -z-10 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'></div>
        </div>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
            Inregistreaza seria bateriei
          </h2>
          <p className='mt-2 text-lg/8 text-gray-600'>
            Obtine o garantie extinsa de 3 ani GRATUIT prin completarea formularului de mai jos
          </p>
        </div>
        <form onSubmit={handleSubmit} className='mx-auto mt-16 max-w-xl sm:mt-20'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div className='sm:col-span-2'>
              <label htmlFor='message' className='block text-sm/6 font-semibold text-gray-900'>
                Serie Baterie
              </label>
              <div className='mt-2.5'>
                <input
                  required
                  value={batterySeries}
                  onChange={(e) => setBatterySeries(e.target.value)}
                  type='text'
                  name='phone-number'
                  id='phone-number'
                  placeholder='XXX-XXXX-XXX'
                  className='block w-full rounded-md border border-[var(--electric-green)] bg-white px-3.5 py-2 text-base'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='message' className='block text-sm/6 font-semibold text-gray-900'>
                Incarca Factura
              </label>
              <div className='mt-2.5'>
                <input
                  // required
                  accept='.pdf,image/*'
                  onChange={handleFileChange}
                  type='file'
                  name='phone-number'
                  id='phone-number'
                  placeholder='XXX-XXXX-XXX'
                  className='block w-full rounded-md border border-[var(--electric-green)] bg-white px-3.5 py-2 text-base'
                />
              </div>
            </div>
            <div>
              <label htmlFor='first-name' className='block text-sm/6 font-semibold text-gray-900'>
                Nume
              </label>
              <div className='mt-2.5'>
                <input
                  required
                  placeholder='Andrei'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type='text'
                  name='first-name'
                  id='first-name'
                  className='block w-full rounded-md border border-[var(--electric-green)] bg-white px-3.5 py-2 text-base'
                />
              </div>
            </div>
            <div>
              <label htmlFor='last-name' className='block text-sm/6 font-semibold text-gray-900'>
                Prenume
              </label>
              <div className='mt-2.5'>
                <input
                  required
                  placeholder='Popescu'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type='text'
                  name='last-name'
                  id='last-name'
                  className='block w-full rounded-md border border-[var(--electric-green)] bg-white px-3.5 py-2 text-base'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='email' className='block text-sm/6 font-semibold text-gray-900'>
                Email
              </label>
              <div className='mt-2.5'>
                <input
                  required
                  placeholder='exemplu@email.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  name='email'
                  id='email'
                  className='block w-full rounded-md border border-[var(--electric-green)] bg-white px-3.5 py-2 text-base'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='phone-number' className='block text-sm/6 font-semibold text-gray-900'>
                Telefon
              </label>
              <div className='mt-2.5'>
                <div className='flex rounded-md bg-white'>
                  <div className='grid shrink-0 grid-cols-1'></div>
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type='text'
                    name='phone-number'
                    id='phone-number'
                    className='block w-full rounded-md border border-[var(--electric-green)] bg-white px-3.5 py-2 text-base'
                    placeholder='07XXXXXXXX'
                  />
                </div>
              </div>
            </div>

            <div className='flex gap-x-4 sm:col-span-2'>
              <label className='text-sm/6 text-gray-600' id='switch-1-label'>
                Prin trimiterea acestui formular accepti{' '}
                <a className='text-[#07C]' target='_blank' href='https://magazin.inovolt.ro/termeni_si_conditii/'>
                  termenii si conditiile.
                </a>
              </label>
            </div>
          </div>
          <div className='mt-10'>
            <button
              id='submit-btn'
              disabled={isLoading}
              type='submit'
              className='shadow-xs block w-full rounded-md bg-[var(--electric-green)] px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#538d24] focus-visible:outline-2'
            >
              Inregistreaza bateria !
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ValidateBattery;
