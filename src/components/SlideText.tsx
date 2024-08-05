import React, { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

type slideTextProps = {
  word: string;
  onLoadOnly?: boolean;
};

export const SlideText = ({ word, onLoadOnly }: slideTextProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: onLoadOnly });
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: [0, 1], y: ["20%", "0%"] },
        { delay: stagger(0.05), duration: 1, type: "spring" }
      );
    }
  }, [animate, isInView]);
  return (
    <motion.div ref={scope} className="slide-text">
      {word.split("").map((letter, index) => (
        <motion.span key={index}>{letter}</motion.span>
      ))}
    </motion.div>
  );
};
