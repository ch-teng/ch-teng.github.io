import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type WaveProps = {
  background: string;
};

//Use: use before component with below color, background set to that color
export default function Wave({ background }: WaveProps) {
  const waveRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: waveRef,
    offset: ["end end", "start start"],
  });
  const smooth = useSpring(scrollYProgress, {
    damping: 30,
  });
  const slideWave = useTransform(
    smooth,
    (scrollYProgress) => `translatex(-${scrollYProgress * 100}%)`
  );

  return (
    <motion.div
      className="wave"
      ref={waveRef}
      style={{ transform: slideWave, background }}
    />
  );
}
