import Wave from "./Wave";
import { motion } from "framer-motion";

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.currentTarget.id;
    const targetId = target.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="background-above-footer">
      <Wave background="#BCF8EC" />
      <footer className="footer">
        <ul className="section list">
          <motion.li
            className="section list-item"
            id="#whoami"
            onClick={handleScroll}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", damping: 10 }}
          >
            Whoami
          </motion.li>
          <motion.li
            className="section list-item"
            id="#experiences"
            onClick={handleScroll}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", damping: 10 }}
          >
            Experiences
          </motion.li>
          <motion.li
            className="section list-item"
            id="#personal-projects"
            onClick={handleScroll}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", damping: 10 }}
          >
            Projects
          </motion.li>
          <motion.li
            className="section list-item"
            id="#skills"
            onClick={handleScroll}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", damping: 10 }}
          >
            Skills
          </motion.li>
        </ul>
        <ul className="social list">
          <motion.li
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            className="social list-item"
          >
            <a href="mailto:chris.r.teng@gmail.com" target="_blank">
              Email
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            className="social list-item"
          >
            <a href="https://github.com/ch-teng" target="_blank">
              Github
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            className="social list-item"
          >
            <a href="https://www.linkedin.com/in/ch-teng" target="_blank">
              LinkedIn
            </a>
          </motion.li>
        </ul>
        <div className="line" />
        <p className="footer-text">
          Designed lovingly by Chris Teng | &copy; 2024
        </p>
      </footer>
    </div>
  );
}
