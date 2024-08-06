import { AnimatePresence, motion } from "framer-motion";
import { Card } from "./Card";

type JobDescriptionProps = {
  companyImg: string;
  companyTitle: string;
  companyDesc: string;
  jobTitle: string;
  jobDesc: string;
  jobImg: string;
  technologies?: string;
};

export const JobDescription = ({
  companyImg,
  companyTitle,
  companyDesc,
  jobDesc,
  jobTitle,
  jobImg,
  technologies,
}: JobDescriptionProps) => {
  return (
    <div className="frame-holder">
      <AnimatePresence mode="wait">
        <motion.div
          key={companyImg}
          className="company-card"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.2, delay: 0.2, ease: "easeOut" },
          }}
        >
          <Card
            imgSrc={companyImg}
            imgDesc={companyImg}
            cardTitle={companyTitle}
            description={companyDesc}
          />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          className="job-card"
          key={jobImg}
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.2, delay: 0.4, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            x: -20,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          <Card
            imgSrc={jobImg}
            imgDesc={jobImg}
            cardTitle={jobTitle}
            description={jobDesc}
            sideInfo={technologies}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
