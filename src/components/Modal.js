import React from "react";
import { CloseButton, ModalOverlay } from "../styles/ModalStyle";
const Modal = ({ show, onClose, project }) => {
  if (!show) return null;

  return (
    <ModalOverlay>
      <CloseButton onClick={onClose}></CloseButton>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </ModalOverlay>
  );
};
export default Modal;
