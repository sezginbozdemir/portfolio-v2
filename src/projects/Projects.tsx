import { Box, Container, Group, Stack, Text } from "@mantine/core";
import styles from "./Projects.module.css";
import Details from "./components/details/Details";
import ImageGallery from "./components/image-gallery/ImageGallery";
import { ScrollTop } from "../shared/hooks/ScrollTop";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const Projects = () => {
  ScrollTop();

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [projectsData, setProjectsData] = useState<any>(null);

  useEffect(() => {
    const loadWorkData = async () => {
      const lang = i18n.language;

      if (lang === "ro") {
        const projectsDataRo = await import("./projects-ro.json");
        setProjectsData(projectsDataRo.default);
      } else {
        const projectsDataEn = await import("./projects-en.json");
        setProjectsData(projectsDataEn.default);
      }
    };

    loadWorkData();
  }, [i18n.language]);

  if (!projectsData) return null;
  return (
    <Container size="xl" h="100%" w="100%">
      <Group mt={50}>
        <Box className={styles.first}></Box>
        <Text style={{ zIndex: 1000 }} className={styles.second}>
          <span>{t("projects.breadcrumb")}</span>
        </Text>
      </Group>
      <Stack mt={100} className={styles.projectStack} gap={150}>
        {projectsData.projects.map((project: any, index: number) => (
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
