import React, { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

type slideTextProps = {
  word: string;
};

const SlideText = ({ word }: slideTextProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: [0, 1], y: ["100%", "0%"] },
        { delay: stagger(0.05), duration: 1, type: "spring" }
      );
    }
  }, [isInView]);
  return (
    <motion.div ref={scope} className="experiences-text">
      {word.split("").map((letter, index) => (
        <motion.span key={index}>{letter}</motion.span>
      ))}
    </motion.div>
  );
};

export default function ExperiencesText() {
  return <SlideText word="Experiences" />;
}
