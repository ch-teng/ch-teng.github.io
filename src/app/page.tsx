"use client";
import {
  motion,
  AnimatePresence,
  useAnimate,
  stagger,
  AnimationSequence,
  usePresence,
  MotionConfig,
} from "framer-motion";
import { useEffect, useState } from "react";

const MenuItems = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const startAni = async () =>
        await animate([
          [
            "li",
            {
              x: "75%",
            },
            {
              type: "spring",
              delay: stagger(0.2),
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
            { x: "-25%" },
            { delay: stagger(0.02, { from: "last" }), at: "<" },
          ],
        ]);
        safeToRemove();
      };
      endAni();
    }
  }, [isPresent]);

  return (
    <motion.ul
      key="menu"
      initial={{ left: "-40rem" }}
      animate={{ left: "-5rem" }}
      exit={{ left: "-40rem" }}
      ref={scope}
      className="menu"
    >
      <MotionConfig
        transition={{
          type: "spring",
          stiffness: 500,
        }}
      >
        <motion.li initial={{ x: "-5rem" }} whileHover={{ scale: 1.5 }}>
          whoami
        </motion.li>
        <motion.li whileHover={{ scale: 1.5 }}>Experiences</motion.li>
        <motion.li initial={{ x: "-20%" }} whileHover={{ scale: 1.5 }}>
          Personal Projects
        </motion.li>
        <motion.li whileHover={{ scale: 1.5 }}>Hobbies</motion.li>
      </MotionConfig>
    </motion.ul>
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
          {showMenu && (
            <motion.div
              key="menuCover"
              className="menuCover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "anticipate" }}
            ></motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>{showMenu && <MenuItems />}</AnimatePresence>
      </div>
    </body>
  );
}
