/* eslint-disable react/no-unescaped-entities */

//CREDIT to FramerMotion docs for inspiration for the image carousel for this
//about page https://www.framer.com/motion/animate-presence/
import { motion } from "framer-motion";
import { SlideText } from "./SlideText";
import InfiniteCarousel from "./InfiniteCarousel";
import DraggableGallery from "./DraggableGallery";
import { useState, useEffect } from "react";

export default function About() {
  const posterList = [
    "/posters/arcane1.jpg",
    "/posters/EEAAO.jpg",
    "/posters/loki.jpg",
    "/posters/TedLasso.jpg",
    "/posters/spiderverse.jpg",
    "/posters/arcane2.jpg",
  ];
  const [isMobile, setIsMobile] = useState(false);
  const [mobileWidth, setMobileWidth] = useState(0);
  const handleResize = () => {
    if (window.innerWidth < 650) {
      setIsMobile(true);
      setMobileWidth(window.innerWidth);
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
    <div className="page about center-page" id="about">
      <div className="spacer"></div>
      <SlideText word="About" />
      <div className="frame-holder">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ stiffness: 200, duration: 0.5 }}
          viewport={isMobile ? { amount: 0.1 } : { amount: 0.25 }}
        >
          <DraggableGallery />
        </motion.div>
        <div className="frame-subsection card-layout">
          <div className="about-professional">
            <motion.div
              className="about-description"
              style={{ textAlign: "center" }}
              initial={{ x: 300, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{ stiffness: 200, duration: 0.5 }}
              viewport={isMobile ? { amount: 0.2 } : { amount: 0.5 }}
            >
              Hi! I'm Chris, a professional software engineer with a passion for
              full stack web development and design. I've had the pleasure of
              working at several industry standard institutions and have gained
              a wealth of experience in the field. I graduated from Northeastern
              University with degrees in Computer Science and Business
              Administration, concentrating in Marketing. I'm always looking for
              new opportunities to learn and grow, so feel free to reach out to
              me!
            </motion.div>
          </div>
          <div className="about-personal">
            <motion.div
              className="about-description"
              style={{ textAlign: "center" }}
              initial={{ x: 300, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{ stiffness: 200, duration: 0.5 }}
              viewport={isMobile ? { amount: 0.2 } : { amount: 0.5 }}
            >
              I have a passion for creating—making a few of my own designs like
              this website as well as a few minimalist posters of some of my
              favorite tv shows and movies. Some hobbies of mine include working
              out, playing video games, watching movies, and knitting! I love
              trying new things and am always looking for new experiences. Ask
              me about anything: I'll tell you all I know about it, and I'll
              hope you'll do the same!
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ stiffness: 200, duration: 0.5 }}
            viewport={isMobile ? { amount: 0.1 } : { amount: 0.5 }}
          >
            {isMobile ? (
              <InfiniteCarousel
                imgList={posterList}
                imgWidth={mobileWidth / 4}
                imgHeight={((mobileWidth / 4) * 17) / 11}
                carouselWidth={mobileWidth}
                imgGap={20}
              />
            ) : (
              <InfiniteCarousel
                imgList={posterList}
                imgWidth={165}
                imgHeight={255}
                carouselWidth={700}
                imgGap={20}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
