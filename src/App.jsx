import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atom";

const Wrapper = styled(motion.div)`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrap = styled(motion.div)`
  border: 3px solid black;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
const DarkLightButton = styled(motion.div)`
  cursor: pointer;
`;
const Content = styled(motion.div)`
  border: 1px soild black;
`;
function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <Wrap>
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </Wrap>
        {/* 추후 DarkLightButton은 footer로 빼기 */}
        <DarkLightButton onClick={toggleDarkAtom}>
          {isDark ? (
            <FontAwesomeIcon icon={faSun} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faMoon} size="2x" />
          )}
        </DarkLightButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
