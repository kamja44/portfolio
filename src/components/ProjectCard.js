import React, { useState } from "react";
import {
  Badge,
  Card,
  Details,
  Image,
  Description,
  Title,
} from "../styles/projectCardStyle";
import Modal from "./Modal";

const ProjectCard = ({ project }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleCardClick = (project) => {
    setSelectedProject(project);
  };
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Card onClick={handleCardClick}>
        <Image src={project.image} alt={project.title} />
        <Badge stack={project.stack}>{project.stack}</Badge>
        <Details>
          <Title>{project.title}</Title>
          <Description>{project.description}</Description>
        </Details>
      </Card>
      {selectedProject && (
        <Modal
          show={selectedProject !== null}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </>
  );
};

export default ProjectCard;
