import Image from "next/image";
import { SlideText } from "./SlideText";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
    imgsrc: "/javascript-logo-0.png",
    name: "JavaScript",
    description:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
  },
  {
    imgsrc: "/skillspng/javascript-logo-0.png",
    name: "JavaScript",
    description:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
  },
  {
    imgsrc: "/javascript-logo-0.png",
    name: "JavaScript",
    description:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
  },
  {
    imgsrc: "/skillspng/javascript-logo-0.png",
    name: "JavaScript",
    description:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
  },
  {
    imgsrc: "/javascript-logo-0.png",
    name: "JavaScript",
    description:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
  },
];

export default function Skills() {
  //List of skills that I can add or remove from
  //have the skill to the left and fly in, have the description on the right also fly in

  //Title card
  return (
    <div className="page center-page skills" id="skills">
      <SlideText word="Skills" onLoadOnly={true} />
      <div className="skills-container" style={{ paddingBottom: "50vh" }}>
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
        <Image src={skill.imgsrc} alt={skill.name} width={75} height={75} />
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
