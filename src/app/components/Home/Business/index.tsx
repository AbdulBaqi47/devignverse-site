"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { motion } from 'framer-motion'
import animationVariants from '@/utils/animationVariants'

const Business = () => {
  return (
    <section className='py-10'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 content-center justify-items-center'>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants.slideLeft}
            className='lg:col-span-6 flex flex-col gap-5 justify-center'>
            <h2 className='text-midnight_text text-center lg:text-start'>
              From Vision to Deployment
            </h2>
            {/* <h2 className='text-midnight_text text-center lg:text-start'>
              Engineering Digital Excellence
            </h2> */}
            <p className='text-black/75 text-lg font-normal text-center lg:text-start sm:leading-140 max-w-2xl lg:max-w-lg mx-auto lg:mx-0'>
              Devign Verse delivers complete digital ecosystems - from strategy to launch. Each service module integrates seamlessly into a full-stack workflow built on React, Node.js, Python, and cloud-native infrastructure to ensure scalability and reliability.
            </p>
            <div className='flex gap-4 mx-auto lg:mx-0'>
              <Link href={'/#contact'}>
                <button className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2'>
                  Discuss a Project
                  <Icon icon='tabler:arrow-right' className='text-2xl' />
                </button>
              </Link>
              <Link href={'/#case-studies'}>
                <button className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2'>
                  View Case Studies
                  <Icon icon='tabler:arrow-right' className='text-2xl' />
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants.SlideRight}
            className='lg:col-span-6 flex sm:justify-center justify-start mt-10 lg:mt-0'>
            <Image
              src='/images/business/business.png'
              alt='business'
              width={636}
              height={805}
              className='w-full'
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Business
