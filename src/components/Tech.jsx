import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills
        </h2>
      </motion.div>
    {/* <div className='flex flex-row flex-wrap justify-center gap-4'>
      {technologies.map((technology) => (
        <div style={{height: '5rem', width: "5rem"}} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div> */}
  <div className='flex flex-wrap justify-center gap-6'>
  {technologies.map((technology) => (
<div
  key={technology.name}
  className="flex flex-col items-center justify-center w-28 h-32"
>
  <div className="w-20 h-20 flex justify-center items-center">
    <BallCanvas icon={technology.icon} />
  </div>
  <p className="mt-2 text-sm w-full text-center">{technology.name}</p>
</div>
  ))}
</div>


    </>
  );
};

export default SectionWrapper(Tech, "");