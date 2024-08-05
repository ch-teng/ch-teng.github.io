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
      "During my tenure at Priceline, I spearheaded the creation of new and innovative designs for post-booking and user profiles utilizing NextJS and GraphQL. I significantly enhanced our continuous integration and continuous deployment (CI/CD) practices across all repositories, resulting in faster and cleaner deployments. Additionally, I transitioned our repository structure from a monolithic design to microservices, which greatly facilitated development processes. Through several A/B tests, I was able to clarify and improve user experience, leading to a 50% improvement in design decisions.",
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
      "At TriNetX, I led the full-stack development of a new feature on the web app, enhancing administrators' access to protected information across various healthcare networks. I initiated and fostered the creation of a peer-programming system, which was deployed company-wide in December 2022, to institutionalize crucial knowledge for both new hires and experts. Additionally, I resolved inconsistencies in repositories regarding the handling of time zones and dates, presenting my findings and fixing misrepresented data for all users. This resulted in a 10% increase in customer satisfaction.",
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
      "At Hasbro, I renovated the website https://apps.hasbro.com using the NextJS framework and translation modules. I coordinated project development through sprint structures such as Agile and SCRUM, utilizing Jira for efficient project management. Additionally, I developed a custom NodeJS script to migrate content information to the new CMS, ensuring a smooth and effective transition.",
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
      "At PrepareRI, I designed a system to connect a local daycare with families during socially-distanced times. I developed the brand's presence by effectively communicating company ideas online and managing social media engagement. Additionally, I presented the brand, designs, and an advertisement campaign to company leads, laying the groundwork for future development initiatives. I also conducted user feedback sessions to refine our approach and collaborated with cross-functional teams to ensure alignment with the company's goals. My efforts contributed to a significant increase in user engagement and positive feedback from the community.",
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
      "During my cyber security internship at Hasbro, I managed permissions for the company's active global IP addresses using self-built Python scripts. I automated daily tasks for the Cyber Security team, freeing up valuable time for full-time developers. I also connected with team members to understand when to seek help and how to operate effectively in a workplace setting. Additionally, I conducted security audits to identify vulnerabilities and collaborated on the development of improved security protocols. My contributions not only streamlined operations but also enhanced the overall security posture of the organization.",
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
