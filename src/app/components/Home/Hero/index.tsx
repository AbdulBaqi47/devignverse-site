"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = ({
  text,
  className,
  speed = 100,
}: {
  text: string;
  className: string;
  speed?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <h1 className={className}>
      {displayText}
      <span className="fast-pulse">|</span>
    </h1>
  );
};

const Banner = () => {
  return (
    <section className="bg-header pt-28 lg:pb-14 overflow-hidden">
      <div className="container">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-12 content-center">
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            <Image
              src="/images/hero/star.svg"
              alt="star-image"
              width={95}
              height={97}
              className="absolute top-[-74px] right-[51px] opacity-10"
            />
            <Image
              src="/images/hero/lineone.svg"
              alt="line-image"
              width={190}
              height={148}
              className="absolute top-[-74px] right-[51px] opacity-5"
            />
            <Image
              src="/images/hero/linetwo.svg"
              alt="line-image"
              width={190}
              height={148}
              className="hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-5"
            />
            <div className="flex flex-col gap-5">
              <Typewriter
                text="The Universe of Development and Design"
                className="text-5xl max-w-2xl leading-16 text-midnight_text text-center lg:text-start mx-auto lg:mx-0 pt-5"
                speed={100}
              />
              {/* <h2 className='text-3xl max-w-2xl leading-14 text-midnight_text text-center lg:text-start mx-auto lg:mx-0'>
                Empowering the Next Digital Universe
              </h2>
              <h2 className='text-3xl max-w-2xl leading-14 text-midnight_text text-center lg:text-start mx-auto lg:mx-0'>
                Where Creativity Codes Reality
              </h2>
              <h2 className='text-3xl max-w-2xl leading-14 text-midnight_text text-center lg:text-start mx-auto lg:mx-0'>
                One Verse. Infinite Possibilities.
              </h2> */}
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                style={{ textAlign: "left" }}
                className="text-black/75 text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0"
              >
                Devign Verse is a design-led, engineering-driven studio
                transforming bold ideas into market-ready digital products. From
                concept to code, the team blends UI brilliance and backend
                strength to accelerate innovation across industries.
              </motion.p>
              <div className="mx-auto lg:mx-0 flex gap-4">
                <Link href={"/#contact"}>
                  <button className="text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:cursor-pointer hover:text-primary">
                    Get in Touch
                  </button>
                </Link>
                <Link href={"/#portfolio"}>
                  <button className="text-primary text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-transparent hover:bg-primary hover:cursor-pointer hover:text-white">
                    Explore Our Work
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="mainTitle"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Image
                src="/images/hero/banner.webp"
                alt="nothing"
                width={698}
                height={652}
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
