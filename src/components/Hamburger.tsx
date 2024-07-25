import { useAnimate, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MenuItems } from "./SideMenu";

export default function Hamburger() {
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
  );
}
