import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  padding: 20px;
  width: 70vw;
  margin: 0 auto;
  @media (max-width: 1800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;
