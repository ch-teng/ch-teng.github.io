import { closestItem, removeItem } from "@/app/utils/array-utils";
import { AnimatePresence, Reorder } from "framer-motion";
import { useState } from "react";

interface Job {
  title: string;
  company: string;
  date: string;
  description: string;
}

const experience = [
  {
    title: "Full Stack Developer Coop",
    company: "Priceline",
    date: "Jan 2021 - June 2021",
    description: "blah blah blah",
  },
  {
    title: "Full Stack Developer Coop",
    company: "TriNetX",
    date: "May 2020 - Aug 2020",
    description: "blah blah blah",
  },
  {
    title: "Software Developer",
    company: "Hasbro",
    date: "Jan 2021 - June 2021",
    description: "blah blah blah",
  },
  {
    title: "Project Developer",
    company: "PrepareRI",
    date: "Jan 2021 - June 2021",
    description: "blah blah blah",
  },
  {
    title: "Cyber Security Analyst Intern",
    company: "Hasbro",
    date: "Jan 2021 - June 2021",
    description: "blah blah blah",
  },
];

export default function ExperienceScroller() {
  const [jobs, setJobs] = useState(experience);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const remove = (item: Job) => {
    if (item === selectedJob) {
      setSelectedJob(closestItem(jobs, item));
    }

    setJobs(removeItem(jobs, item));
  };
  return (
    <div className="page Experience">
      <Reorder.Group
        className="scroller"
        as="ul"
        axis="x"
        onReorder={setJobs}
        values={jobs}
      >
        <AnimatePresence initial={false}>
          {jobs.map((job) => (
            <Reorder.Item key={job.title} value={job}>
              <button
                className={`job ${job === selectedJob ? "selected" : ""}`}
                onClick={() => setSelectedJob(job)}
              >
                {job.title}
              </button>
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
}
