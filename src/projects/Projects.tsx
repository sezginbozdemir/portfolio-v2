import {
  Box,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import styles from "./Projects.module.css";
import Details from "./components/details/Details";
import ImageGallery from "./components/image-gallery/ImageGallery";
import { ScrollTop } from "../shared/hooks/ScrollTop";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ProjectCarousel from "./components/project-carousel/ProjectCarousel";

export interface Project {
  name: string;
  tiles: string[];
  descriptions: string[];
  url: string;
  images: string[];
  link: string;
  desktopImage: string;
  mobileImage: string;
}

export interface ProjectData {
  projects: Project[];
}

const Projects = () => {
  ScrollTop();

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [projectsData, setProjectsData] = useState<ProjectData | null>(null);

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
        {projectsData.projects.map((project: Project, index: number) => (
          <Stack>
            <Group className={styles.projectGroup} key={index} mt={50}>
              <Details project={project} index={index} />
              <ImageGallery index={index} project={project} />
            </Group>
            <Group align="center" justify="center">
              <ProjectCarousel images={project.images} />
            </Group>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};
export default Projects;
