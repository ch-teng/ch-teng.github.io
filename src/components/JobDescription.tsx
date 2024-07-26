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
      <div className="company-card">
        <Card
          imgSrc={companyImg}
          imgDesc={companyImg}
          description={companyDesc}
        />
      </div>
      <div className="job-card">
        <Card
          imgSrc={jobImg}
          imgDesc={jobImg}
          description={jobDesc}
          sideInfo={technologies}
        />
      </div>
    </div>
  );
};
