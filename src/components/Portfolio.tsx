import React from "react";
import ProjectCard, { IProject } from "./ProjectCard";
import { Wrapper } from "../styles/PortfolioStyle";

interface IProjectsPorps {
  projects: IProject[];
}
const Portfolio = ({ projects }: IProjectsPorps) => {
  return (
    <Wrapper>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Wrapper>
  );
};

export default Portfolio;
