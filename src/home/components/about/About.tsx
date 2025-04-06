import AboutDetails from "./AboutDetails";
import AboutTitle from "./AboutTitle";
import styles from "./About.module.css";
import { Box } from "@mantine/core";
const About = () => {
  return (
    <Box style={{ position: "relative" }}>
      <AboutTitle />
      <AboutDetails />
      <Box className={styles.float} />
    </Box>
  );
};

export default About;
