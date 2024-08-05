import { removeItem } from "@/utils/array-utils";
import { Reorder, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { SlideText } from "./SlideText";
import Wave from "./Wave";
import { JobDescription } from "./JobDescription";
interface Job {
  title: string;
  company: string;
  date: string;
  logoImgSrc: string;
  logoImgDesc: string;
  technologies?: string;
  companyDescription: string;
  companyImgSrc: string;
  jobDescription: string;
  jobImgSrc: string;
}

const experiences: Array<Job> = [
  {
    title: "Full Stack Developer Co-op",
    company: "Priceline",
    date: "June 2023 - Jan 2024",
    companyDescription:
      "Priceline is a travel agency that offers discount rates for travel-related purchases such as airline tickets and hotel stays. Priceline is headquartered in Norwalk, Connecticut, United States and is wholly owned by Booking Holdings, which also owns Kayak.com, Booking.com and other sites.",
    companyImgSrc: "/priceline/Priceline-office.jpg",
    jobDescription:
      "Created new and innovative designs for post-booking and user profiles with NextJS and GraphQL" +
      "* Further developed CI/CD practices in all repositories to help create faster, cleaner deployments" +
      "* Converted and shifted repository structure from monolithic design to microservices to aid development" +
      "* Clarified user experience through several A/B tests that improved design decisions by 50%",
    jobImgSrc: "/priceline/Priceline-website.png",
    technologies:
      "TypeScript, React, NextJS, NodeJS, GraphQL, SQL, Java, Jest, Mabl",
    logoImgSrc: "/priceline/priceline-logo.png",
    logoImgDesc: "Priceline Logo",
  },
  {
    title: "Software Developer Co-op",
    company: "TriNetX",
    date: "June 2022 - Dec 2022",
    logoImgSrc: "/trinetx/TriNetX-Logo-PR.jpeg",
    logoImgDesc: "TriNetX Logo",
    companyDescription:
      "TriNetX is a global network of healthcare organizations and life sciences companies driving real-world research to accelerate the development of new therapies. Through its self-service, HIPAA, GDPR, and LGPD-compliant platform of federated EHR, datasets, and consulting partnerships, TriNetX puts the power of real-world data into the hands of its worldwide community to improve protocol design, streamline trial operations, refine safety signals, and enrich real-world evidence generation.",
    companyImgSrc: "/trinetx/office.jpg",
    jobDescription:
      "Led the full-stack development of a new feature on the web app allowing the administrators better access to the protected information of different healthcare networks * Fostered the creation of a peer-programming system to help institutionalize crucial knowledge for newhires and experts alike deployed in December 2022 to be used company-wide * Resolved inconsistencies in repositories about the handling of time zones and dates and presented findings, fixing misrepresented data across all users and increasing customer satisfaction by 10%",
    jobImgSrc: "/trinetx/job.jpeg",
    technologies:
      "TypeScript, React, Javascript, Maven, NextJS, NodeJS, Cypress, SQL, Java, Spring Boot",
  },
  {
    title: "Software Developer Co-op",
    company: "Hasbro",
    date: "May 2021 - Aug 2021",
    logoImgSrc: "/hasbro/Hasbro_logo_symbol.png",
    logoImgDesc: "Hasbro Logo",
    companyDescription:
      "Hasbro is a leading toy and game company whose mission is to entertain and connect generations of fans through the wonder of storytelling and exhilaration of play. Hasbro delivers engaging brand experiences for global audiences through toys, consumer products, gaming and entertainment, with a portfolio of iconic brands including MAGIC: THE GATHERING, DUNGEONS & DRAGONS, Hasbro Gaming, NERF, TRANSFORMERS, PLAY-DOH and PEPPA PIG, as well as premier partner brands.",
    companyImgSrc: "/hasbro/office.jpg",
    jobDescription:
      "Renovated https://apps.hasbro.com utilizing the NextJS framework and translation modules" +
      "* Coordinated project development utilizing sprint structures like Agile and SCRUM through Jira" +
      "* Developed a custom NodeJS script to migrate content information for website to new CMS",
    jobImgSrc: "/hasbro/website-01.jpg",
    technologies:
      "TypeScript, Javascript, React, NextJS, NodeJS, Java, Jest, HTML, CSS",
  },
  {
    title: "Project Developer",
    company: "PrepareRI",
    date: "June 2020 - Aug 2020",
    logoImgSrc: "/PrepareRI_logo.png",
    logoImgDesc: "PrepareRI Logo",
    companyDescription:
      "Prepare RI is an interagency program that prepares youth for college and careers by bridging K-12, postsecondary and industry forces to introduce, develop and prepare youth for the skills and learning they need after they finish high school.",
    companyImgSrc: "/prepareRI/office.jpg",
    jobDescription:
      "Designed a system to connect a local daycare to families during socially-distanced times" +
      "* Developed a brand to consumers by communicating company ideas through online presence" +
      "* Presented brand, designs, and advertisement campaign to company leads for future developmen",
    jobImgSrc: "/prepareRI/website.jpg",
  },
  {
    title: "Cyber Security Analyst Intern",
    company: "Hasbro",
    date: "June 2019 - Aug 2019",
    logoImgSrc: "/hasbro/Hasbro_logo_symbol.png",
    logoImgDesc: "Hasbro Logo",
    companyDescription:
      "Hasbro is a leading toy and game company whose mission is to entertain and connect generations of fans through the wonder of storytelling and exhilaration of play. Hasbro delivers engaging brand experiences for global audiences through toys, consumer products, gaming and entertainment, with a portfolio of iconic brands including MAGIC: THE GATHERING, DUNGEONS & DRAGONS, Hasbro Gaming, NERF, TRANSFORMERS, PLAY-DOH and PEPPA PIG, as well as premier partner brands.",
    companyImgSrc: "/hasbro/office.jpg",
    jobDescription:
      "Managed permissions of Hasbro’s active, global IP addresses utilizing self-built Python scripts" +
      "* Automated daily tasks of the Cyber Security team, freeing time for full time developers" +
      "* Connected with team members to help understand when to seek help and how to operate in a workplace",
    jobImgSrc: "/hasbro/brands.jpg",
  },
];

/*




  */

export default function Experiences() {
  const [jobs, setJobs] = useState(experiences);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    const temp = removeItem(jobs, job);
    setJobs([job, ...temp]);
  };

  const handleOrderChron = () => {
    setJobs(experiences);
    setSelectedJob(experiences[0]);
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
      <div className="exp-options">
        <motion.div
          onClick={handleOrderChron}
          className="exp-option-button job"
          whileHover={{ scale: 1.1 }}
        >
          Order from most recent
        </motion.div>
        <motion.div
          className="exp-option-button job"
          whileHover={{ scale: 1.1 }}
        >
          <a href="/ChrisTengResume.pdf" download="ChrisTengResume">
            Download My Resume!
          </a>
        </motion.div>
      </div>

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
          {jobs.map((job) => (
            <Reorder.Item
              key={job.date}
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
                  src={job.logoImgSrc}
                  alt={job.logoImgDesc}
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>{job.title}</div>
              </motion.button>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
      <JobDescription
        companyImg={selectedJob.companyImgSrc}
        companyTitle={selectedJob.company}
        companyDesc={selectedJob.companyDescription}
        jobTitle={selectedJob.title + " ~ " + selectedJob.date}
        jobDesc={selectedJob.jobDescription}
        jobImg={selectedJob.jobImgSrc}
        technologies={selectedJob.technologies}
      />
    </div>
  );
}
