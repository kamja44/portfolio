import React from "react";
import Portfolio from "./components/Portfolio";
import { projects } from "./data/projectData";
import { Container, Title } from "./styles/AppStyle.";

const App = () => {
  return (
    <Container>
      <Title>kamja44's Portfolio</Title>
      <Portfolio projects={projects} />
    </Container>
  );
};

export default App;
