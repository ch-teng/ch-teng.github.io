import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

//https://codepen.io/tdoughty/pen/ZZqgQq inspiration
export default function BackgroundLand() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
    whileInView: {
      y: "0%",
      transition: { staggerChildren: 0.1, type: "spring", stiffness: 30 },
    },
  };

  const handleResize = () => {
    if (window.innerWidth < 650) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="background-ground" ref={ref}>
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
      <motion.div
        className="on-bg"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 30 }}
        viewport={{ root: ref, once: true }}
      >
        <>
          <motion.div
            className="shimmer-water"
            initial={{}}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <motion.div
              className="ray-motion"
              animate={
                isMobile ? { x: ["-10%", "40%"] } : { x: ["-25%", "25%"] }
              }
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
        </>
      </motion.div>
      <motion.div
        className="stagger-rock"
        variants={rockStagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ root: ref, once: true }}
      >
        <motion.div className="rock-center" />
        <motion.div className="rock-left" variants={rockStagger} />
        <motion.div className="rock-right" variants={rockStagger} />
        <motion.div className="rock-left-back" variants={rockStagger} />
        <motion.div className="rock-right-back" variants={rockStagger} />
      </motion.div>
    </div>
  );
}
