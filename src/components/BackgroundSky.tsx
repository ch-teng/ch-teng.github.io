import React from "react";
import { delay, easeOut, motion } from "framer-motion";

const Name = () => {
  const firstNameContainer = {
    hidden: { opacity: 0, y: "100%" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.1,
      },
    },
  };
  const lastNameContainer = {
    hidden: { opacity: 0, y: "100%" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 2.0,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: "200%" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, type: "tween", ease: easeOut },
    },
  };
  return (
    <div className="name">
      <motion.h1 variants={firstNameContainer} initial="hidden" animate="show">
        <motion.span variants={item}>C</motion.span>
        <motion.span variants={item}>h</motion.span>
        <motion.span variants={item}>r</motion.span>
        <motion.span variants={item}>i</motion.span>
        <motion.span variants={item}>s</motion.span>
      </motion.h1>
      <motion.h1 variants={lastNameContainer} initial="hidden" animate="show">
        <motion.span variants={item}>T</motion.span>
        <motion.span variants={item}>e</motion.span>
        <motion.span variants={item}>n</motion.span>
        <motion.span variants={item}>g</motion.span>
      </motion.h1>
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
