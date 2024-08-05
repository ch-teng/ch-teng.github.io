import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Wave from "./Wave";

//https://codepen.io/tdoughty/pen/ZZqgQq inspiration
export default function BackgroundLand() {
  const ref = useRef(null);
  const firstNameContainer = {
    hidden: {
      opacity: 1,
      x: "100%",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };
  const name = () => {
    <div className="name">
      <motion.h1 variants={firstNameContainer} initial="hidden" animate="show">
        Chris
      </motion.h1>
      <motion.h1 variants={firstNameContainer} initial="hidden" animate="show">
        Teng
      </motion.h1>
    </div>;
  };

  let rays = [];
  for (let i = 0; i < 10; i++) {
    rays.push(
      <motion.div
        animate={{ opacity: [0.8, 0.2, 0.8] }}
        transition={{
          repeat: Infinity,
          duration: Math.random() * 3 + 2,
        }}
        className={`ray ray${i}`}
        key={i}
      ></motion.div>
    );
  }

  return (
    <div className="background-ground" ref={ref}>
      <motion.div
        className="shimmer-water"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <div className="ray-motion">
          <motion.div className="ray-holder" initial={{ x: "-10%", y: "-30%" }}>
            {rays.map((ray) => ray)}
          </motion.div>
          <motion.div
            className="ray-holder r-ray-holder"
            initial={{ x: "-10%", y: "-30%" }}
          >
            {rays.map((ray) => ray)}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
