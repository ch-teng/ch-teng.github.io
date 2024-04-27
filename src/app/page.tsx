"use client";
import ExperienceScroller from "@/components/ExperienceScroller";
import {
  motion,
  AnimatePresence,
  useAnimate,
  stagger,
  usePresence,
  MotionConfig,
} from "framer-motion";
import { useEffect, useState } from "react";

type MenuItemsProps = {
  onClick: () => void;
};

const MenuItems = ({ onClick }: MenuItemsProps) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const startAni = async () =>
        await animate([
          [
            "li",
            {
              x: ["25rem"],
            },
            {
              type: "spring",
              delay: stagger(0.3),
              at: "-.1",
            },
          ],
        ]);
      startAni();
    } else {
      const endAni = async () => {
        await animate([
          [
            "li",
            { x: "-20rem" },
            { delay: stagger(0.2, { from: "last" }), at: "<" },
          ],
        ]);
        safeToRemove();
      };
      endAni();
    }
  }, [isPresent]);

  return (
    <>
      <motion.div
        key="menuCover"
        className="menuCover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        ref={scope}
        transition={{ duration: isPresent ? 0.3 : 0.7, ease: "easeInOut" }}
        onClick={onClick}
      ></motion.div>
      <motion.ul
        key="menu"
        initial={{ left: "-50rem" }}
        animate={{ left: "-15rem" }}
        exit={{ left: "-50rem" }}
        transition={{
          duration: 0.5,
          ease: "backInOut",
          type: "spring",
          delay: isPresent ? 0 : 0.7,
        }}
        ref={scope}
        className="menu"
      >
        <MotionConfig
          transition={{
            type: "spring",
            stiffness: 700,
          }}
        >
          <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            whoami
          </motion.li>
          <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            Experiences
          </motion.li>
          <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            Personal Projects
          </motion.li>
          <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            Hobbies
          </motion.li>
        </MotionConfig>
      </motion.ul>
    </>
  );
};

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [scope, animate] = useAnimate();
  const handleClick = () => {
    setShowMenu(!showMenu);
    animate("#top", {
      rotate: showMenu ? "0deg" : "135deg",
      y: showMenu ? "0rem" : ".35rem",
    });
    animate("#bot", {
      rotate: showMenu ? "0deg" : "-135deg",
      y: showMenu ? "0rem" : "-.35rem",
    });
  };

  return (
    <body>
      <div ref={scope}>
        <button className="hamburger" onClick={handleClick}>
          <motion.div
            className="hamburg 1"
            id="top"
            initial={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            layout
          />
          <AnimatePresence initial={false}>
            {!showMenu && (
              <motion.div
                className="hamburg 2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.1, ease: "backInOut" }}
              />
            )}
          </AnimatePresence>

          <motion.div
            className="hamburg 3"
            id="bot"
            initial={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            layout
          />
        </button>

        <AnimatePresence>
          {showMenu && <MenuItems onClick={() => handleClick()} />}
        </AnimatePresence>
      </div>
      <div className="page whoami"></div>
      <ExperienceScroller />
      <div className="page PersonalProjects"></div>
      <div className="page Hobbies"></div>
    </body>
  );
}
