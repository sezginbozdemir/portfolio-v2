import Intro from "./components/intro/Intro";
import Links from "./components/links/Links";
import About from "./components/about/About";
import Work from "./components/work/Work";
import { ScrollTop } from "../shared/hooks/ScrollTop";

const Home = () => {
  ScrollTop();
  return (
    <>
      <Intro />
      <Links />
      <About />
      <Work />
    </>
  );
};

export default Home;
