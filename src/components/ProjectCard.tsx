import React, { useState } from "react";
import {
  Badge,
  Card,
  Details,
  Image,
  Duration,
  Title,
  Description,
} from "../styles/projectCardStyle";
import Modal from "./Modal";
export interface IProject {
  id: number;
  title: string;
  description: string;
  stack: string;
  image: string;
  techStack: string[];
  progressRate: string;
  duration: string;
  link: string;
  features: string[];
  team?: string[];
}
interface IProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: IProjectCardProps) => {
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
        {}
        <Image src={project.image} alt={project.title} />
        <Badge $stack={project.stack}>{project.stack}</Badge>
        <Details>
          <Title>{project.title}</Title>
          <Duration>{project.duration}</Duration>
          <Description>{project.description}</Description>
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
