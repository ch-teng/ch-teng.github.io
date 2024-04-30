import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface BGProps {
  scrollProgress: MotionValue<number>;
}
const BG0 = ({ scrollProgress }: BGProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1921 246.33"
      className="hill-holder b0"
      initial={{ x: "100rem", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
      preserveAspectRatio={"xMaxYMin slice"}
      style={{ y: useTransform(scrollProgress, [0, 1], ["60%", "0%"]) }}
    >
      <title>0</title>
      <g id="e4d24abb-8e68-4087-b26e-7950942e77bc" data-name="Layer 2">
        <g id="ac0ed16e-52f1-4b31-9428-014ec565a351" data-name="Layer 1">
          <path
            d="M0.5,107.8v638h1920V7.8c0,0-478,93-630,65s-226-113-515-49s-614,17-614,17S108.5,27.8,0.5,107.8z"
            fill="#fff"
            className="bg b0"
            stroke="#000"
            strokeMiterlimit="10"
          />
        </g>
      </g>
    </motion.svg>
  );
};

const BG1 = ({ scrollProgress }: BGProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1921 391.5"
      className="hill-holder b1"
      initial={{ x: "-100rem", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      preserveAspectRatio={"xMaxYMin slice"}
      style={{ y: useTransform(scrollProgress, [0, 1], ["20%", "0%"]) }}
    >
      <title>1</title>
      <g id="b43d5a19-966f-4b32-a512-2f73a3c2c798" data-name="Layer 2">
        <g id="ae8e151e-41c5-413e-bbd9-59f94e354a3c" data-name="Layer 1">
          <motion.path
            className="bg b1"
            d="M1920.5,85s-217-68-358-67-273,13-357,25-351,56-503,71-148-94-344-112S.5,134,.5,134V391h1920Z"
            fill="#fff"
            stroke="#000"
            strokeMiterlimit="10"
          />
        </g>
      </g>
    </motion.svg>
  );
};
const BG2 = ({ scrollProgress }: BGProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1921 432.24"
      className="hill-holder b2"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      preserveAspectRatio={"xMaxYMin slice"}
      style={{ y: useTransform(scrollProgress, [0, 1], ["5%", "0%"]) }}
    >
      <title>2</title>
      <g id="bd8dbd6b-d287-4b68-a59e-dabe4fb41009" data-name="Layer 2">
        <g id="b3c25f49-1771-4bd3-aa7c-2c0b3dab9c23" data-name="Layer 1">
          <path
            className="bg b2"
            d="M.5,65.74S46.68,96.62,140.59,84.68,556.5,89.74,707.5,20.74s382,60,542,67,501-38,533-66,138,23,138,23v387H.5Z"
            fill="#fff"
            stroke="#000"
            strokeMiterlimit="10"
          />
        </g>
      </g>
    </motion.svg>
  );
};

const BG3 = ({ scrollProgress }: BGProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1921 557.76"
      className="hill-holder b3"
      initial={{ opacity: 0, x: "-100rem" }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      preserveAspectRatio={"xMaxYMin slice"}
      style={{ y: useTransform(scrollProgress, [0, 1], ["1%", "0%"]) }}
    >
      <title>3</title>
      <g id="e58d9129-a0c1-4f96-9b95-821975b35825" data-name="Layer 2">
        <g id="bae091bc-4237-4589-8fd2-3f2f17d7bb87" data-name="Layer 1">
          <path
            className="bg b3"
            d="M.5,54.26s461-114,754-10,399,132,551,82,458-102,615,0v431H.5Z"
            fill="#fff"
            stroke="#000"
            strokeMiterlimit="10"
          />
        </g>
      </g>
    </motion.svg>
  );
};

const BG4 = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1921 527.7"
      className="hill-holder b4"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      preserveAspectRatio={"xMaxYMin slice"}
    >
      <title>4</title>
      <g id="f5a11cc5-346f-43b7-92d2-9003f5ba0ecc" data-name="Layer 2">
        <g id="b9268a70-0d3f-4557-8710-f48d9c0f0401" data-name="Layer 1">
          <motion.path
            className="bg b4"
            d="M.5,85s356,39.17,533-47.83,568,8,568,8,650,101,819,11v471H.5Z"
            fill="#fff"
            stroke="#000"
            strokeMiterlimit="10"
          />
        </g>
      </g>
    </motion.svg>
  );
};

export default function BackgroundLand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  return (
    <div className="background-ground-container" ref={ref}>
      <BG4 />
      <BG3 scrollProgress={scrollYProgress} />
      <BG2 scrollProgress={scrollYProgress} />
      <BG1 scrollProgress={scrollYProgress} />
      <BG0 scrollProgress={scrollYProgress} />
    </div>
  );
}
