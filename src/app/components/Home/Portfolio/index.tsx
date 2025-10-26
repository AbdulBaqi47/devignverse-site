"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import  animationVariants  from "@/utils/animationVariants";

const Portfolio = () => {
  const portfolioItems = [
    { name: "Cartlow", url: "www.cartlow.com" },
    {
      name: "Cartlow Android App",
      url: "play.google.com/store/apps/details?id=com.cartlow.android&hl=en&gl=US",
    },
    { name: "Tellotalk", url: "www.tellotalk.com" },
    { name: "MentorDY", url: "www.mentordy.com" },
    { name: "Major Dripathletics", url: "www.majordripathletics.com" },
    {
      name: "Super Asia Group Apps",
      url: "play.google.com/store/apps/dev?id=7234017972830944161",
    },
    { name: "Super Asia Group", url: "www.superasiagroup.com" },
    {
      name: "Khurram Shahzad UI/UX Behance",
      url: "www.behance.net/khurramshahzaduiux",
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container">
        <motion.div
          className="mainTitle"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2 variants={animationVariants.slideUp} className="text-4xl font-bold text-midnight_text mb-4">
              Our Portfolio
            </motion.h2>
            <motion.p variants={animationVariants.slideUpsec} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of projects and collaborations. From
              innovative apps to stunning designs, see the work that defines our
              universe.
            </motion.p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={animationVariants.slideUp}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.6 }}
            >
            <Link
              href={`https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 block"
            >
              <h3 className="text-xl font-semibold text-midnight_text mb-2 truncate">
                {item.name}
              </h3>
              <p className="text-primary hover:text-primary-dark transition-colors duration-300 truncate">
                {item.url}
              </p>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
