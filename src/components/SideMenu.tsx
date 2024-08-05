import {
  motion,
  MotionConfig,
  stagger,
  useAnimate,
  usePresence,
} from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

type MenuItemsProps = {
  onClick: () => void;
};

export const MenuItems = ({ onClick }: MenuItemsProps) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const handleScroll = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.currentTarget.className;
    const targetId = target.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
    onClick();
  };
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
  }, [animate, isPresent, safeToRemove]);

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
      <a href="https://github.com/ch-teng" target="_blank">
        <motion.div
          className="socials github"
          initial={{ opacity: 0, x: "-4rem" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-4rem" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src="/skillspng/github-mark-white.png"
            alt="github logo"
            height={40}
            width={40}
          />
        </motion.div>
      </a>
      <a href="https://www.linkedin.com/in/ch-teng" target="_blank">
        <motion.div
          className="socials linkedin"
          initial={{ opacity: 0, x: "-9rem" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-9rem" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src="/In-White-48.png"
            alt="LinkedIn logo"
            height={32}
            width={32}
          />
        </motion.div>
      </a>
      <a href="mailto:chris.r.teng@gmail.com" target="_blank">
        <motion.div
          className="socials email"
          initial={{ opacity: 0, x: "-14rem" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-14rem" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src="/email-01.png"
            alt="LinkedIn logo"
            height={50}
            width={50}
          />
        </motion.div>
      </a>
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
          <motion.li
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            className="#whoami"
            onMouseDown={handleScroll}
          >
            whoami
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            className="#about"
            onMouseDown={handleScroll}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            className="#experiences"
            onMouseDown={handleScroll}
          >
            Experiences
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            className="#skills"
            onMouseDown={handleScroll}
          >
            Skills
          </motion.li>
        </MotionConfig>
      </motion.ul>
    </>
  );
};
