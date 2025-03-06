import { Download } from 'lucide-react';

const Blog = () => {
  return (
    <section className='relative py-12 lg:py-24'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap items-center justify-center'>
          <div className='w-full px-4 sm:mb-0'>
            <h1 className='section-bold-title'>Read it on your own !</h1>
          </div>
        </div>
        <div className='-mx-4 flex flex-wrap'>
          <div className='mb-8 w-full px-4 lg:mb-0 lg:w-1/2 xl:w-7/12' data-aos='fade-right' data-aos-delay='100'>
            <div>
              <img className='mb-8 block w-full rounded-2xl' src='quantum-assets/blog/big-picture.jpg' alt='' />
              <div className='mb-6'>
                <a
                  className='mr-2 inline-block rounded-full border-2 pe-3 ps-2 text-sm font-medium text-[#07C] hover:bg-gray-50'
                  href='#'
                >
                  <span className='inline-flex items-center'>
                    Technical Data Sheet <Download className='ms-1.5 mt-0.5' size={15} />
                  </span>
                </a>
              </div>
              <a className='group block max-w-2xl' href='#'>
                <h3 className='mb-4 text-3xl font-medium transition duration-200 group-hover:text-teal-600'>
                  A Better Way to Power the Future: Smart Solar Energy Storage with InoVolt{' '}
                </h3>
                <p className='mb-6 text-lg text-gray-700'>
                  <b>Solar energy is changing the game for homeowners and businesses alike.</b> In this blog post, we’ll
                  explore how cutting-edge battery storage, like <b>InoVolt</b>, maximizes efficiency, reduces costs,
                  and gives you true energy independence...{' '}
                </p>
                <div className='flex items-center'>
                  <img className='h-10 w-10 rounded-full' src='quantum-assets/blog/avatar-1.png' alt='' />
                  <div className='ml-4 flex items-center'>
                    <span className='text-sm font-medium'>Leslie Alexander</span>{' '}
                    <span className='mx-2 sm:mx-4'>
                      <svg width='4' height='4' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='2' cy='2' r='2' fill='#929C9A'></circle>
                      </svg>
                    </span>{' '}
                    <span className='text-sm font-medium'>9 min read</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2 xl:w-5/12'>
            <div className='max-w-lg'>
              <a
                className='group mb-8 flex flex-wrap items-center sm:flex-nowrap'
                href='#'
                data-aos='fade-down-left'
                data-aos-delay='200'
              >
                <img className='block' src='quantum-assets/blog/image-sm-1.png' alt='' />
                <div className='mt-6 sm:ml-8 sm:mt-0'>
                  <h3 className='mb-6 text-2xl font-medium transition duration-200 group-hover:text-teal-600'>
                    Choosing the Right Solar Battery: A Comprehensive Guide{' '}
                  </h3>
                  <div className='flex items-center'>
                    <img className='h-8 w-8 rounded-full' src='quantum-assets/blog/circle-avatar-1.png' alt='' />
                    <div className='ml-4 flex items-center'>
                      <span className='text-sm font-medium'>Wade Warren</span>{' '}
                      <span className='mx-2 sm:mx-4'>
                        <svg width='4' height='4' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <circle cx='2' cy='2' r='2' fill='#929C9A'></circle>
                        </svg>
                      </span>{' '}
                      <span className='text-sm font-medium'>7 min read</span>
                    </div>
                  </div>
                </div>
              </a>{' '}
              <a
                className='group mb-8 flex flex-wrap items-center sm:flex-nowrap'
                href='#'
                data-aos='fade-left'
                data-aos-delay='300'
              >
                <img
                  className='block aspect-square max-w-[177px] rounded-2xl'
                  src='quantum-assets/blog/3x2.jpg'
                  alt=''
                />
                <div className='mt-6 sm:ml-8 sm:mt-0'>
                  <h3 className='mb-6 text-2xl font-medium transition duration-200 group-hover:text-teal-600'>
                    How InoVolt Batteries Are Changing the Solar Energy Landscape{' '}
                  </h3>
                  <div className='flex items-center'>
                    <img className='h-8 w-8 rounded-full' src='quantum-assets/blog/circle-avatar-2.png' alt='' />
                    <div className='ml-4 flex items-center'>
                      <span className='text-sm font-medium'>Jenny Wilson</span>{' '}
                      <span className='mx-2 sm:mx-4'>
                        <svg width='4' height='4' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <circle cx='2' cy='2' r='2' fill='#929C9A'></circle>
                        </svg>
                      </span>{' '}
                      <span className='text-sm font-medium'>7 min read</span>
                    </div>
                  </div>
                </div>
              </a>{' '}
              <a
                className='group flex flex-wrap items-center sm:flex-nowrap'
                href='#'
                data-aos='fade-up-left'
                data-aos-delay='200'
              >
                <img className='block' src='quantum-assets/blog/image-sm-3.png' alt='' />
                <div className='mt-6 sm:ml-8 sm:mt-0'>
                  <h3 className='mb-6 text-2xl font-medium transition duration-200 group-hover:text-teal-600'>
                    The Future of Home Energy: Smart Batteries and Mobile Control
                  </h3>
                  <div className='flex items-center'>
                    <img className='h-8 w-8 rounded-full' src='quantum-assets/blog/circle-avatar-3.png' alt='' />
                    <div className='ml-4 flex items-center'>
                      <span className='text-sm font-medium'>Leslie Alexander</span>{' '}
                      <span className='mx-2 sm:mx-4'>
                        <svg width='4' height='4' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <circle cx='2' cy='2' r='2' fill='#929C9A'></circle>
                        </svg>
                      </span>{' '}
                      <span className='text-sm font-medium'>5 min read</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
