import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 80vw;
  height: 80vh;
`;
const Wrap = styled(motion.div)`
  border: 3px solid black;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Wrap>
        <button></button>
      </Wrap>
    </Wrapper>
  );
}

export default App;
