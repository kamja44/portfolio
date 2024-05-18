import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 60%;
  height: 23vh;
  margin: 20px;
  cursor: pointer;
`;

export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  ${({ stack }) => {
    if (stack === "Front-End") return "background: #3498db;";
    if (stack === "Back-End") return "background: #2ecc71;";
    if (stack === "Full-Stack") return "background: #9b59b6;";
  }}
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8em;
`;

export const Image = styled.img`
  width: 100%;
  height: 15vh;
  margin-bottom: 20px;
`;

export const Details = styled.div`
  padding: 20px;
  text-align: center;
  margin-top: -40px;
`;

export const Title = styled.h2`
  margin: 10px 0;
  font-size: 1.5em;
`;

export const Description = styled.p`
  color: #777;
  font-size: 1em;
  /* position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5); 
  color: white;
  text-align: center; */
`;
