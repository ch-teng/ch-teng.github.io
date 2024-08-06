import Image from "next/image";
import { SlideText } from "./SlideText";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Wave from "./Wave";

type Skill = {
  imgsrc: string;
  name: string;
  description: string;
};

const skillsList: Skill[] = [
  {
    imgsrc: "/skillspng/javascript-logo-0.png",
    name: "JavaScript",
    description:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
  },
  {
    imgsrc: "/skillspng/ts-logo-256.png",
    name: "TypeScript",
    description:
      "JavaScript...but with types! TypeScript is a superset of JavaScript that adds static types to the language.",
  },
  {
    imgsrc: "/skillspng/jsIconGreen.svg",
    name: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used for building server-side applications.",
  },
  {
    imgsrc: "/skillspng/next-js-logo.png",
    name: "Next.js",
    description:
      "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React applications.",
  },
  {
    imgsrc: "/skillspng/GraphQLLogoWhite.png",
    name: "GraphQL",
    description:
      "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data.",
  },
  {
    imgsrc: "/skillspng/SpringBoot-01.png",
    name: "Spring Boot and MVC",
    description:
      "Spring Boot is an open-source Java-based framework used to create microservices. Spring MVC is a model-view-controller framework for Java.",
  },
  {
    imgsrc: "/skillspng/HTML5.png",
    name: "HTML5",
    description:
      "HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages.",
  },
  {
    imgsrc: "/skillspng/CSS3.png",
    name: "CSS3",
    description:
      "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.",
  },
  {
    imgsrc: "/skillspng/jest-logo-png.png",
    name: "Jest",
    description:
      "Jest is a delightful JavaScript Testing Framework with a focus on simplicity. Side note: did you know this was the Jest logo?",
  },
  {
    imgsrc: "/skillspng/Cypress_Logomark_White.png",
    name: "Cypress",
    description:
      "Cyress is a front-end testing tool created for the modern web. It is fast, easy and reliable for anything that runs in a browser.",
  },
  {
    imgsrc: "/skillspng/Git.png",
    name: "Git",
    description:
      "Git is a distributed version control system that is used to track changes in source code during software development.",
  },
  {
    imgsrc: "/skillspng/github-mark-white.png",
    name: "GitHub",
    description:
      "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.",
  },
  {
    imgsrc: "/skillspng/python.png",
    name: "Python",
    description:
      "Python is an interpreted, high-level, general-purpose programming language. It is known for its readability and its design philosophy that emphasizes code readability.",
  },
  {
    imgsrc: "/skillspng/MongoDB.png",
    name: "MongoDB",
    description:
      "MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas. It is used for high volume data storage.",
  },
  {
    imgsrc: "/skillspng/docker.png",
    name: "Docker",
    description:
      "Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers.",
  },
  {
    imgsrc: "/skillspng/Postman.png",
    name: "Postman",
    description:
      "Postman is a collaboration platform for API development. Postman simplifies each step of building an API and streamlines collaboration so you can create better APIs faster.",
  },
  {
    imgsrc: "/skillspng/gradle.png",
    name: "Gradle",
    description:
      "Gradle is an open-source build automation tool that is designed to be flexible, fast, and efficient.",
  },
  {
    imgsrc: "/skillspng/Figma.png",
    name: "Figma",
    description:
      "Figma is a cloud-based design tool that is similar to Sketch in functionality and features, but with big differences that make Figma better for team collaboration.",
  },
];

export default function Skills() {
  return (
    <div className="page center-page skills" id="skills">
      <Wave aboveColor="#25455F" belowColor="#0A132B" />
      <SlideText word="Skills" />
      <div className="skills-container" style={{ paddingBottom: "25vh" }}>
        {skillsList.map((skill, index) => (
          <div className="skill" key={index}>
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  const itemsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: itemsRef,
    offset: ["end end", "center center"],
  });
  const smooth = useSpring(p, {
    mass: 0.35,
  });
  const transformLeft = useTransform(
    smooth,
    (p) => `translatex(-${(1 - p) * 100}%)`
  );
  const transformRight = useTransform(
    smooth,
    (p) => `translatex(${(1 - p) * 100}%)`
  );

  return (
    <>
      <motion.p
        style={{ transform: transformLeft, opacity: p, position: "relative" }}
        ref={itemsRef}
      >
        <Image src={skill.imgsrc} alt={skill.name} width={60} height={60} />
      </motion.p>
      <motion.span
        className="skill-card"
        style={{ transform: transformRight, opacity: p }}
        ref={itemsRef}
      >
        <p className="skill-name">{skill.name}</p>
        <p className="skill-desc">{skill.description}</p>
      </motion.span>
    </>
  );
};
