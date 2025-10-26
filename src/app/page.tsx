import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Portfolio from '@/app/components/Home/Portfolio'
import People from '@/app/components/Home/People'
import Features from '@/app/components/Home/Features'
import Business from '@/app/components/Home/Business'
import Payment from '@/app/components/Home/Payment'
import Pricing from '@/app/components/Home/Pricing'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
export const metadata: Metadata = {
  title: 'Devign Verse | Full-Stack Web & Mobile App Development',
  description: 'Devign Verse builds scalable web apps, mobile apps, and digital experiences that fuse design thinking with development power.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <People />
      <Features />
      <Business />
      <Payment />
      {/* <Pricing /> */}
      <ContactForm />
    </main>
  )
}
