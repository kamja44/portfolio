import React, { useState } from "react";
import {
  Badge,
  Card,
  Details,
  Image,
  Duration,
  Title,
} from "../styles/projectCardStyle";
import Modal from "./Modal";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card onClick={handleCardClick}>
        <Image src={project.image} alt={project.title} />
        <Badge stack={project.stack}>{project.stack}</Badge>
        <Details>
          <Title>{project.title}</Title>
          <Duration>{project.duration}</Duration>
        </Details>
      </Card>
      {isModalOpen && (
        <Modal
          show={isModalOpen}
          onClose={handleCloseModal}
          project={project}
        />
      )}
    </>
  );
};

export default ProjectCard;
