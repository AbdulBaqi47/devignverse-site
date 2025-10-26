"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import animationVariants from "@/utils/animationVariants";

const Payment = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 content-center justify-items-center">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants.SlideRight}
            className="col-span-6"
          >
            <Image
              src="/images/payment/payment.png"
              alt="payment"
              width={600}
              height={500}
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants.slideLeft}
            className="col-span-6 flex flex-col gap-5 justify-center"
          >
            {/* <h2 className='text-midnight_text text-center lg:text-start sm:leading-14 leading-12'>
              From Prototype to Production
            </h2> */}
            <h2 className="text-midnight_text text-center lg:text-start sm:leading-14 leading-12">
              Fast, Secure, and Scalable
            </h2>
            <p className="text-black/75 text-lg font-normal text-center lg:text-start sm:leading-140 max-w-2xl lg:max-w-lg mx-auto lg:mx-0">
              Devign Verse engineers custom web applications optimized for
              performance and growth. Using React, Next.js, and Node.js, the
              team creates platforms that stay fast under pressure and flexible
              under change.
            </p>
            <div className="flex gap-4 mx-auto lg:mx-0">
              <Link href={"/#contact"}>
                <button className="text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2">
                  Start a Web Project
                  <Icon icon="tabler:arrow-right" className="text-2xl" />
                </button>
              </Link>
              <Link href={"/#case-studies"}>
                <button className="text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2">
                  Explore Recent Work
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

export default Payment;
