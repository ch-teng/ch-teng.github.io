import React, { useEffect } from "react";
import {motion, stagger, useAnimate, useInView} from "framer-motion";

export default function ExperiencesText() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate("span", { opacity: [0,1], y: ["100%", "0%"]}, { delay: stagger(.05), duration: 1, type: "spring"})
    }
  }, [isInView]);
  return (
    <motion.div
      ref={scope}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      className="experiences-text"
      >
        <motion.span >E</motion.span>
        <motion.span > x</motion.span>
        <motion.span >p</motion.span>
        <motion.span >e</motion.span>
        <motion.span >r</motion.span>
        <motion.span >i</motion.span>
        <motion.span >e</motion.span>
        <motion.span >n</motion.span>
        <motion.span >c</motion.span>
        <motion.span >e</motion.span>
        <motion.span >s</motion.span>
      </motion.div>
  )
}