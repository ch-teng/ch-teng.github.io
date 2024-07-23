import React from "react";
import { delay, easeIn, easeOut, motion } from "framer-motion";

const Name = () => {
  const firstNameContainer = {
    hidden: {
      opacity: 0,
      y: "20%",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 2, duration: 0.5, ease: easeOut },
    },
  };
  return (
    <div className="name-container">
      <div className="name">
        <motion.h1
          variants={firstNameContainer}
          initial="hidden"
          animate="show"
        >
          Chris
        </motion.h1>
        <motion.h1
          variants={firstNameContainer}
          initial="hidden"
          animate="show"
        >
          Teng
        </motion.h1>
      </div>
      <div className="self-info">
        <div className="picture">
          {/* <img
            src="https://avatars.githubusercontent.com/u/58990613?v=4"
            alt="Chris Teng"
          /> */}
        </div>
        <div className="elev-pitch">
          <p>
            I am a full-stack developer with a passion for creating beautiful
            and functional web applications. I am always looking for new
            challenges and opportunities to learn and grow.
          </p>
        </div>
      </div>
    </div>
  );
};
//https://codesandbox.io/p/sandbox/framer-motion-5-1-line-drawing-ph6ln?file=%2Fsrc%2FApp.js&from-embed=
//Think about this for a future design...maybe create a jumping line that adds name and a few stars
//Also add contact information
export default function BackgroundSky() {
  return (
    <div className="background-sky-container">
      <Name />
    </div>
  );
}
