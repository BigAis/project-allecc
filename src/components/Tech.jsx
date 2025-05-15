import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* Title Section */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Our expertise</p>
        <h2 className={styles.sectionHeadText}>Technologies We Use</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-10"
      >
        We offer development in various technologies and frameworks, leveraging our expertise to create immersive gaming experiences and robust applications.
      </motion.p>

      {/* Technology Balls Section */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology, index) => (
          <motion.div 
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="flex flex-col items-center w-28"
          >
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-white text-center mt-2 font-medium">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "technologies");