import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className='bg-header pt-28 lg:pb-14 overflow-hidden'>
      <div className='container'>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-12 content-center'>
          <div className='lg:col-span-7 flex flex-col justify-center relative'>
            <Image
              src='/images/hero/star.svg'
              alt='star-image'
              width={95}
              height={97}
              className='absolute top-[-74px] right-[51px] opacity-10'
            />
            <Image
              src='/images/hero/lineone.svg'
              alt='line-image'
              width={190}
              height={148}
              className='absolute top-[-74px] right-[51px] opacity-5'
            />
            <Image
              src='/images/hero/linetwo.svg'
              alt='line-image'
              width={190}
              height={148}
              className='hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-5'
            />
            <div className='flex flex-col gap-5'>
              <h1 className='text-5xl max-w-2xl leading-16 text-midnight_text text-center lg:text-start mx-auto lg:mx-0 pt-5'>
                The Universe of Development and Design
              </h1>
              <h2 className='text-3xl max-w-2xl leading-14 text-midnight_text text-center lg:text-start mx-auto lg:mx-0'>
                Empowering the Next Digital Universe
              </h2>
              <h2 className='text-3xl max-w-2xl leading-14 text-midnight_text text-center lg:text-start mx-auto lg:mx-0'>
                Where Creativity Codes Reality
              </h2>
              <h2 className='text-3xl max-w-2xl leading-14 text-midnight_text text-center lg:text-start mx-auto lg:mx-0'>
                One Verse. Infinite Possibilities.
              </h2>
              <p className='text-black/75 text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0'>
                Devign Verse is a design-led, engineering-driven studio transforming bold ideas into market-ready digital products. From concept to code, the team blends UI brilliance and backend strength to accelerate innovation across industries.
              </p>
              <div className='mx-auto lg:mx-0 flex gap-4'>
                <Link href={'/#contact'}>
                  <button className='text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:cursor-pointer hover:text-primary'>
                    Get in Touch
                  </button>
                </Link>
                <Link href={'/#portfolio'}>
                  <button className='text-primary text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-transparent hover:bg-primary hover:cursor-pointer hover:text-white'>
                    Explore Our Work
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-10 lg:mt-0 lg:col-span-5'>
            <div>
              <Image
                src='/images/hero/banner.webp'
                alt='nothing'
                width={698}
                height={652}
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
