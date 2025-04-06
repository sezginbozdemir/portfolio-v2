import Intro from "./components/intro/Intro";
import Links from "./components/links/Links";
import About from "./components/about/About";
import Work from "./components/work/Work";
import { ScrollTop } from "../shared/hooks/ScrollTop";
import { Container } from "@mantine/core";

const Home = () => {
  ScrollTop();
  return (
    <Container size="xl" h="100%" w="100%">
      <Intro />
      <Links />
      <About />
      <Work />
    </Container>
  );
};

export default Home;
