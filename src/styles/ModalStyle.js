import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh; /* 최대 높이 설정 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 가능 */
  position: relative;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 5%;
`;

export const TechStack = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TechStackItem = styled.li`
  display: inline;
  background: #eee;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
`;
export const StyledLink = styled.a`
  text-decoration: none;
  color: #3498db; /* 링크 색상 조정 가능 */
  &:hover {
    text-decoration: underline; /* 호버 시 밑줄 추가 (선택 사항) */
  }
  margin-bottom: -10px;
`;
export const Heading = styled.h3`
  margin-bottom: -10px; /* 원하는 margin-bottom 값으로 설정 */
`;
export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
`;
export const FeatureListItem = styled.li`
  text-align: start;
  margin-left: 20px;
  margin-top: 5px;
`;

export const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
