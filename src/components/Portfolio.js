import React from "react";
import ProjectCard from "./ProjectCard";
import { Wrapper } from "../styles/PortfolioStyle";

const Portfolio = ({ projects }) => {
  return (
    <Wrapper>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Wrapper>
  );
};

export default Portfolio;
