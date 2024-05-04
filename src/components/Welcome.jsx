import { useState } from "react";
import styles from "../style";
import { photo } from "../assets/index"
import LearnMore from "./GetStarted";

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
      transition="transform 0.5s ease"
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Welcome To LENS</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We put our hearts, souls and sweat
          into designing and developing custom AI - powered
          solutions for your business so you don't have to.
        </p>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <LearnMore />
        </div>
      </div>

      <div className={`absolute right-0 top-0 bottom-0 w-2/5 bg-gray-800 transition-transform duration-300 ${isHovered ? 'transform scale-105' : ''}`}>
        <img
          src={photo}
          alt="CTA"
          className="w-full h-full object-cover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      <div className="flex justify-center mt-8">
        <LearnMore />
      </div>
    </section>
  );
};

export default CTA;