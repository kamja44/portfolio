import React, { useEffect } from "react";
import {
  CloseButton,
  Image,
  ModalContent,
  ModalOverlay,
  TechStack,
  TechStackItem,
  StyledLink,
  Heading,
  FeatureList,
  FeatureListItem,
  TeamList,
} from "../styles/ModalStyle";
import { IProject } from "./ProjectCard";

interface IModalProps {
  show: boolean;
  onClose: () => void;
  project: IProject;
}

const Modal = ({ show, onClose, project }: IModalProps) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{project.title}</h2>
        {project.link === "" ? null : (
          <>
            <Heading>프로젝트 링크</Heading>
            <p>
              <StyledLink
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link}
              </StyledLink>
            </p>
          </>
        )}

        <Image src={project.image} alt={project.title} />
        <h3>기술 스택</h3>
        <TechStack>
          {project.techStack.map((tech, index) => (
            <TechStackItem key={index}>{tech}</TechStackItem>
          ))}
        </TechStack>
        <Heading>프로젝트 기간</Heading>
        <p>{project.duration}</p>
        <Heading>프로젝트 기여도</Heading>
        <p>{project.progressRate}</p>
        <Heading>기능 리스트</Heading>
        <FeatureList>
          {project.features.map((feature, index) => (
            <FeatureListItem key={index}>- {feature}</FeatureListItem>
          ))}
        </FeatureList>
        {project.team && project.team.length > 0 && (
          <>
            <Heading>팀원</Heading>
            <TeamList>
              {project.team.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </TeamList>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
