"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import animationVariants from "@/utils/animationVariants";

const People = () => {
  return (
    <section className="pt-32 sm:pb-20 pb-10" id="product">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex justify-center">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={animationVariants.SlideRight}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-Lightsuccess bg-[url('/images/people/bg-lines.png')] bg-no-repeat bg-contain bg-right-bottom w-full h-full flex flex-col gap-10 relative sm:py-11 py-14 sm:px-16 px-8 rounded-2xl after:absolute after:bg-[url('/images/people/quote.png')] after:w-48 after:h-40 after:-top-16 after:right-0"
            >
              <div className="flex items-center gap-10">
                <div>
                  <Image
                    src="/images/people/user.png"
                    alt="user"
                    width={86}
                    height={86}
                  />
                </div>
                <div className="">
                  <p className="text-2xl font-semibold">Anna Franklin</p>
                  <p className="text-lg text-black/55">Freelance Designer</p>
                </div>
              </div>
              <p className="font-medium text-2xl leading-9">
                “PaidIn makes managing bills and cards easy. The spending
                insights keep me on budget, and reminders help me pay on time.”
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={animationVariants.slideLeft}
            viewport={{ once: true, amount: 0.5 }}
            className="col-span-6 flex justify-center flex-col gap-4 lg:pl-24 mt-10 lg:mt-0 ">
            <h2 className="text-midnight_text text-center lg:text-start">
              Empowering the Next Digital Universe
            </h2>
            {/* <h2 className='text-midnight_text text-center lg:text-start'>
              Where Creativity Codes Reality
            </h2>
            <h2 className='text-midnight_text text-center lg:text-start'>
              One Verse. Infinite Possibilities.
            </h2> */}
            <p className="text-black/75 text-lg font-normal text-center lg:text-start max-w-md mx-auto lg:mx-0">
              Devign Verse is a design-led, engineering-driven studio
              transforming bold ideas into market-ready digital products. From
              concept to code, the team blends UI brilliance and backend
              strength to accelerate innovation across industries.
            </p>
            <div className="flex gap-4 mx-auto lg:mx-0">
              <Link href={"/#contact"}>
                <button className="text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2">
                  Get in Touch
                  <Icon icon="tabler:arrow-right" className="text-2xl" />
                </button>
              </Link>
              <Link href={"/#case-studies"}>
                <button className="text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2">
                  Explore Our Work
                  <Icon icon="tabler:arrow-right" className="text-2xl" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default People;
