import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

type InfiniteCarouselProps = {
  imgList: string[];
  imgWidth: number;
  imgHeight: number;
  carouselWidth: number;
  imgGap: number;
};

export default function InfiniteCarousel({
  imgList,
  imgWidth,
  imgHeight,
  carouselWidth,
  imgGap,
}: InfiniteCarouselProps) {
  const xtrans = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -imgList.length * imgWidth - imgList.length * imgGap;
    controls = animate(xtrans, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [imgGap, imgList.length, imgWidth, xtrans]);
  return (
    <div
      className="carousel-holder"
      style={{ width: carouselWidth, gap: imgGap }}
    >
      {[...imgList, ...imgList].map((img, index) => (
        <motion.div className="carousel-card" key={index} style={{ x: xtrans }}>
          <Image
            src={img}
            alt={img}
            width={imgWidth}
            height={imgHeight}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      ))}
    </div>
  );
}
