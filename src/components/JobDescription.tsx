import { motion } from "framer-motion";
import { Card } from "./Card";

type JobDescriptionProps = {
  companyImg: string;
  companyDesc: string;
  jobDesc: string;
  jobImg: string;
  technologies?: string;
};

export const JobDescription = ({
  companyImg,
  companyDesc,
  jobDesc,
  jobImg,
  technologies,
}: JobDescriptionProps) => {
  return (
    <div className="job-description">
      <motion.div
        className="company-card"
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card
          imgSrc={companyImg}
          imgDesc={companyImg}
          description={companyDesc}
        />
      </motion.div>
      <motion.div
        className="job-card"
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      >
        <Card
          imgSrc={jobImg}
          imgDesc={jobImg}
          description={jobDesc}
          sideInfo={technologies}
        />
      </motion.div>
    </div>
  );
};
