import {
  MotionValue,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

//https://codepen.io/tdoughty/pen/ZZqgQq inspiration
export default function BackgroundLand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const nameContainer = {
    hidden: {
      opacity: 1,
      y: "100%",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.5 },
    },
  };
  const greetingContainer = {
    hidden: {
      opacity: 1,
      y: "-100%",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.4, duration: 0.5 },
    },
  };

  let rays = [];
  for (let i = 0; i < 13; i++) {
    rays.push(
      <motion.div
        animate={{ opacity: [0.8, 0.2, 0.8] }}
        transition={{
          repeat: Infinity,
          duration: Math.random() + 2,
        }}
        className={`ray ray${i}`}
        key={i}
      ></motion.div>
    );
  }

  const rockStagger = {
    initial: { y: "100%" },
    animate: isInView
      ? {
          y: "0%",
          transition: { staggerChildren: 0.1, type: "spring", stiffness: 30 },
        }
      : {},
  };

  return (
    <div className="background-ground" ref={ref}>
      <motion.div
        className="on-load-bg"
        initial={{ y: "100%" }}
        animate={isInView ? { y: "0%" } : {}}
        transition={{ duration: 0.5, type: "spring", stiffness: 30 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="shimmer-water"
          initial={{}}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <motion.div
            className="ray-motion"
            animate={{ x: ["0%", "50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="ray-holder"
              initial={{ x: "-20%", y: "-20%" }}
            >
              {rays.map((ray) => ray)}
            </motion.div>
            <motion.div
              className="ray-holder r-ray-holder"
              initial={{ x: "-14%", y: "-10%" }}
            >
              {rays.map((ray) => ray)}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="stagger-rock"
        variants={rockStagger}
        initial="initial"
        animate="animate"
      >
        <motion.div className="rock-center" />
        <motion.div className="rock-left" variants={rockStagger} />
        <motion.div className="rock-right" variants={rockStagger} />
        <motion.div className="rock-left-back" variants={rockStagger} />
        <motion.div className="rock-right-back" variants={rockStagger} />
      </motion.div>
      <div className="name">
        <motion.h1 variants={nameContainer} initial="hidden" animate="show">
          Chris Teng
        </motion.h1>
      </div>
      <div className="greeting">
        <motion.h3 variants={greetingContainer} initial="hidden" animate="show">
          Hi! 👋
        </motion.h3>
      </div>
    </div>
  );
}
