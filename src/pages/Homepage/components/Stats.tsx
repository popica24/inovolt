import { BatteryMedium, BicepsFlexed, ChevronsLeftRightEllipsis, RefreshCw } from 'lucide-react';
import { ReactNode } from 'react';
import CountUp from 'react-countup';

const SVGClasses = 'size-[65px] md:size-[75px] lg:size-[105px]';

const Stats = () => {
  return (
    <div className='p-4'>
      <h2 className='section-bold-title' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
        Simplu, Putere!
      </h2>
      <div className='grid w-full grid-cols-2 flex-row items-center justify-around text-[var(--electric-green)] md:flex'>
        <Block
          title='Eficienta'
          countUpProps={{
            start: 0,
            end: 95,
            duration: 1.2,
            suffix: '%',
          }}
          svg={<BicepsFlexed className={SVGClasses} />}
          subtitle='Cycles'
        />
        <Block
          title='Timp de incarcare'
          countUpProps={{
            start: 0,
            end: 2,
            duration: 1.2,
            suffix: 'h',
          }}
          svg={<ChevronsLeftRightEllipsis className={SVGClasses} />}
          subtitle='efficiency'
        />
        <Block
          title='Profunzime de descărcare'
          countUpProps={{
            start: 0,
            end: 90,
            duration: 1.2,
            suffix: '%',
          }}
          svg={<BatteryMedium className={SVGClasses} />}
          subtitle='Cycles'
        />

        <Block
          title='Cicluri'
          countUpProps={{
            start: 7000,
            end: 8000,
            duration: 1.2,
            suffix: '+',
          }}
          svg={<RefreshCw className={SVGClasses} />}
          subtitle='Cycles'
        />
      </div>
    </div>
  );
};

export default Stats;

const Block = ({
  title,
  svg,
  countUpProps,
}: {
  title: string;
  subtitle: string;
  svg: ReactNode;
  countUpProps: any;
}) => {
  return (
    <div className='my-4 flex flex-col items-center justify-center text-center'>
      {svg}
      <span className='text-[13px] text-[#1a1a1a] sm:text-[24px] lg:text-[16px] lg:leading-[34px]'>{title}</span>
      <CountUp
        scrollSpyOnce={true}
        enableScrollSpy={true}
        className=' text-[35px] sm:text-[60px] md:text-[60px] lg:text-[86px] lg:leading-[85px]'
        {...countUpProps}
      />
    </div>
  );
};
