import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function DraggableGallery() {
  const photoList = [
    "/about-photos/1.JPG",
    "/about-photos/2.JPG",
    "/about-photos/3.JPG",
    "/about-photos/4.JPG",
    "/about-photos/5.JPG",
    "/about-photos/6.JPG",
    "/about-photos/7.jpg",
  ];
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 600 : -600,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 600 : -600,
        opacity: 0,
      };
    },
  };
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % photoList.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPage([page + 1, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);
  return (
    <div className="photo-gal-holder">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="about-photo-gal"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            src={photoList[imageIndex]}
            alt="about image"
            fill={true}
            sizes="(max-width: 1600px) 70vw, 30vw"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
