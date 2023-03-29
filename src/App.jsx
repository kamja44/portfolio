import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  width: 80vw;
  height: 80vh;
`;
const Wrap = styled(motion.div)`
  border: 3px solid black;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor};
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <Wrap>
          <button onClick={toggleDark}>
            {isDark ? "다크모드" : "라이트모드"}
          </button>
        </Wrap>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
