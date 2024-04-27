import { closestItem, removeItem } from "@/utils/array-utils";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
];

export default function ExperienceScroller() {
  const [jobs, setJobs] = useState(experience);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    const temp = removeItem(jobs, job);
    setJobs([job, ...temp]);
  };
  return (
    <div className="page experience">
      <Reorder.Group
        className="scroller"
        as="ul"
        axis="x"
        onReorder={setJobs}
        values={jobs}
      >
        <AnimatePresence initial={false}>
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
      <AnimatePresence mode="wait">
        <motion.div
          className="selected-job-description"
          key={selectedJob ? selectedJob.title : "empty"}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
        >
          {selectedJob.description}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
