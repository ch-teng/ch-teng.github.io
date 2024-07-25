import Image from "next/image";
import { SlideText } from "./SlideText";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

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
];

export default function Skills() {
  //List of skills that I can add or remove from
  //have the skill to the left and fly in, have the description on the right also fly in

  //Title card
  return (
    <div className="page center-page skills" id="skills">
      <SlideText word="Skills" onLoadOnly={true} />
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
      <motion.p style={{ transform: transformLeft, opacity: p }} ref={itemsRef}>
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
