import React from "react";
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
  TeamList,
} from "../styles/ModalStyle";

const Modal = ({ show, onClose, project }) => {
  if (!show) return null;
  const handleOverlayClick = (e) => {
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
        <Heading>기능 리스트</Heading>
        <FeatureList>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </FeatureList>
        {project.team && (
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
