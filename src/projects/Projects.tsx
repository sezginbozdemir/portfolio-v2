import { Box, Container, Group, Stack, Text } from "@mantine/core";
import styles from "./Projects.module.css";
import Details from "./components/details/Details";
import ImageGallery from "./components/image-gallery/ImageGallery";
import data from "./projects.json";
import { ScrollTop } from "../shared/hooks/ScrollTop";
const Projects = () => {
  ScrollTop();
  return (
    <Container size="xl" h="100%" w="100%">
      <Group mt={50}>
        <Box className={styles.first}></Box>
        <Text style={{ zIndex: 1000 }} className={styles.second}>
          <span>.../Projects</span>
        </Text>
      </Group>
      <Stack mt={100} className={styles.projectStack} gap={150}>
        {data.projects.map((project, index) => (
          <Group className={styles.projectGroup} key={index} mt={50}>
            <Details
              link={project.link}
              images={project.images}
              name={project.name}
              tiles={project.tiles}
              descriptions={project.descriptions}
              url={project.url}
              index={index}
            />
            <ImageGallery
              index={index}
              desktop={project.desktopImage}
              mobile={project.mobileImage}
              link={project.link}
            />
          </Group>
        ))}
      </Stack>
    </Container>
  );
};
export default Projects;
