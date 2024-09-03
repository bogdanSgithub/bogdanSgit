import { BsCodeSlash } from "react-icons/bs";
import ProjectItem from "./ProjectItem";
import jacHacksPic from "../Pictures/jachacks.png";
import marketPathPic from "../Pictures/marketPath.png";
import portfolioPic from "../Pictures/portfolio.png";

const projects = [
  {
    title: "MarketPath",
    description:
      "Project developed for AI Launch Lab's R&D program. MarketPath is an AI-powered machine learning model for investment analysis. It predicts which S&P 500 stocks will outperform the market, helping investors make data-driven decisions with greater confidence.",
    img: marketPathPic,
    tools: ["Streamlit", "Scikit Learn", "Python"],
    githubLink: "https://github.com/bogdanSgithub/MarketPath",
    websiteLink: "https://marketpath.streamlit.app/",
  },
  {
    title: "JACHacks Website",
    description:
      "The official JACHacks website, launched in March 2024, was created by John Abbott College students. Developed with GitHub for version control, it showcases the collaborative efforts and skills of the team.",
    img: jacHacksPic, // Replace with the actual path or URL to your image
    tools: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JACHacks/JACHacks-Website",
    websiteLink: "https://jachacks.pages.dev/",
  },
  {
    title: "Portfolio",
    description:
      "Created with React and TailwindCSS, this personal portfolio showcases my top projects, experiences, technical skills, and a brief introduction. It provides a polished and contemporary view of my work and abilities.",
    img: portfolioPic, // Replace with the actual path or URL to your image
    tools: ["React", "JavaScript", "TailwindCSS"],
    githubLink: "https://github.com/bogdanSgithub/bogdanSgit",
    websiteLink: "https://jachacks.pages.dev/",
  },
];

function Projects() {
  return (
    <section className="pt-8 mb-[20vh]">
      <div className="flex flex-row place-items-center mb-3 text-[clamp(20px,6vw,35px)]">
        <BsCodeSlash className="fill-primary" />
        <h1 className="p-2 ">Projects</h1>
      </div>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </section>
  );
}

export default Projects;
