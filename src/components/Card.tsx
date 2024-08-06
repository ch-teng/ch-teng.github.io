import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type CardProps = {
  imgSrc: string;
  imgDesc: string;
  cardTitle: string;
  description: string;
  sideInfo?: string;
};

export const Card = ({
  imgSrc,
  imgDesc,
  cardTitle,
  description,
  sideInfo,
}: CardProps) => {
  const [showSideInfo, setShowSideInfo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sideInfoSlide: Variants = {
    hidden: {
      x: "-110px",
    },
    hover: {
      x: "-70px",
    },
    visible: { x: 0 },
  };
  const mainInfoSlide: Variants = {
    initial: { x: 0 },
    hover: { x: "-10px" },
    showingSide: { x: "-30px" },
  };
  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    if (sideInfo) setShowSideInfo(!showSideInfo);
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
    <div className="card-layout">
      <motion.div
        className="card-deco"
        onClick={handleClick}
        variants={mainInfoSlide}
        initial={false}
        animate={
          isMobile
            ? { x: 0 }
            : showSideInfo
            ? "showingSide"
            : sideInfo && isHovered
            ? "hover"
            : "initial"
        }
        transition={{ type: "spring", stiffness: 100, ease: "easeOut" }}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <motion.div className="card-main">
          <div className="card-img-holder">
            <Image
              src={imgSrc}
              alt={imgDesc}
              className="card-img"
              fill={true}
              sizes="(max-width: 1200px) 80vw, 50vw"
            />
          </div>
          <div className="card-description text-box">
            <h3 style={{ textAlign: "center", margin: "0" }}>{cardTitle}</h3>
            {description.replaceAll("*", "\n")}
          </div>
        </motion.div>
      </motion.div>
      {sideInfo && (
        <motion.div
          className="card-description card-side-info text-box"
          variants={sideInfoSlide}
          initial={false}
          animate={
            isMobile
              ? { x: 0 }
              : showSideInfo
              ? "visible"
              : isHovered
              ? "hover"
              : "hidden"
          }
          transition={{ type: "spring", stiffness: 100, ease: "easeOut" }}
        >
          {sideInfo.replaceAll(",", "\n")}
        </motion.div>
      )}
    </div>
  );
};
