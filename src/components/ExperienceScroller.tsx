import { removeItem } from "@/utils/array-utils";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { SlideText } from "./SlideText";
import Wave from "./Wave";
interface Job {
  title: string;
  company: string;
  date: string;
  description: string;
  imgSrc: string;
  imgDesc: string;
}

const experience = [
  {
    title: "Full Stack Developer Coop",
    company: "Priceline",
    date: "Jan 2021 - June 2021",
    description: "Priceline Job",
    imgSrc: "/priceline-logo.png",
    imgDesc: "Priceline Logo",
  },
  {
    title: "Web Developer Coop",
    company: "TriNetX",
    date: "May 2020 - Aug 2020",
    description: "TriNetX Job",
    imgSrc: "/TriNetX-Logo-PR.jpeg",
    imgDesc: "TriNetX Logo",
  },
  {
    title: "Software Developer",
    company: "Hasbro",
    date: "Jan 2021 - June 2021",
    description: "Hasbro Software Developer Job",
    imgSrc: "/Hasbro_logo_symbol.png",
    imgDesc: "Hasbro Logo",
  },
  {
    title: "Project Developer",
    company: "PrepareRI",
    date: "Jan 2021 - June 2021",
    description: "Project Developer",
    imgSrc: "/PrepareRI_logo.png",
    imgDesc: "PrepareRI Logo",
  },
  {
    title: "Cyber Security Analyst Intern",
    company: "Hasbro",
    date: "Jan 2021 - June 2021",
    description: "Hasbro Cyber Security Analyst Intern Job",
    imgSrc: "/Hasbro_logo_symbol.png",
    imgDesc: "Hasbro Logo",
  },
  {
    title: "Anothob",
    company: "Hasbro",
    date: "Jan 2021 - Juns1",
    description: "lorem",
    imgSrc: "/Hasbro_logo_symbol.png",
    imgDesc: "Hasbro Logo",
  },
  {
    title: "Another Job",
    company: "Hasbro",
    date: "Jan 2021 a 2021",
    description: "lorem",
    imgSrc: "/Hasbro_logo_symbol.png",
    imgDesc: "Hasbro Logo",
  },
  {
    title: "blah blah blah",
    company: "blah",
    date: "Jan 202s",
    description: "lorem",
    imgSrc: "/Hasbro_logo_symbol.png",
    imgDesc: "Hasbro Logo",
  },
];

export default function ExperienceScroller() {
  const [jobs, setJobs] = useState(experience);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    const temp = removeItem(jobs, job);
    setJobs([job, ...temp]);
  };

  const handleOrderChron = () => {
    setJobs(experience);
    setSelectedJob(experience[0]);
  };
  const scrollerRef = useRef<HTMLDivElement>(null);
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const ele = scrollerRef.current;
    if (!ele) {
      return;
    }
    const startPos = {
      left: ele.scrollLeft,
      x: e.clientX,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startPos.x;
      ele.scrollLeft = startPos.left - dx;
      updateCursor(ele);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      resetCursor(ele);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const ele = scrollerRef.current;
    if (!ele) {
      return;
    }
    const touch = e.touches[0];
    const startPos = {
      left: ele.scrollLeft,
      x: touch.clientX,
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const dx = touch.clientX - startPos.x;
      ele.scrollLeft = startPos.left - dx;
      updateCursor(ele);
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      resetCursor(ele);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  }, []);

  const updateCursor = (ele: HTMLDivElement | null) => {
    if (!ele) return;
    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";
  };

  const resetCursor = (ele: HTMLDivElement | null) => {
    if (!ele) return;
    ele.style.cursor = "grab";
    ele.style.removeProperty("user-select");
  };

  return (
    <div className="page center-page experiences" id="experiences">
      <Wave belowColor="#25455F" aboveColor="#0A132B" />
      <SlideText word="Experiences" />
      <motion.div
        onClick={handleOrderChron}
        className="orderButton"
        whileHover={{ scale: 1.1 }}
      >
        Order from Most Recent
      </motion.div>
      <div className="center-scroller">
        <Reorder.Group
          className="scroller"
          id="scroller"
          as="ul"
          axis="x"
          onReorder={setJobs}
          values={jobs}
          ref={scrollerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{ cursor: "grab" }}
        >
          <AnimatePresence>
            {jobs.map((job) => (
              <Reorder.Item
                key={job.title}
                value={job}
                id={job.date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                dragListener={false}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 40 }}
                  whileTap={{ scale: 0.9 }}
                  className={`job ${job === selectedJob ? "selected" : ""}`}
                  onClick={() => {
                    handleJobClick(job);
                  }}
                >
                  <Image
                    draggable={false}
                    src={job.imgSrc}
                    alt="hasbro"
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div>{job.title}</div>
                </motion.button>
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="selected-job-description"
          key={selectedJob ? selectedJob.title : "empty"}
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.15 }}
        >
          {selectedJob.description}
        </motion.div>
      </AnimatePresence>
      <motion.div>
        <a
          href="../downloads/ChrisTengResumeFINAL.pdf"
          download
          className="socials"
        >
          Download My Resume!
        </a>
      </motion.div>
    </div>
  );
}
