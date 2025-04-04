import { Box, Group, Stack, Title, Text } from "@mantine/core";
import styles from "./About.module.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import data from "./about.json";
import { iconMap } from "./Icons";
import LinkButton from "../../../shared/components/linkButton/LinkButton";
import sez from "../../../assets/images/sez.png";

const AboutDetails = () => {
  return (
    <Group align="start">
      <Stack className={styles.tabStack}>
        <Stack className={styles.whiteTab}>
          <Title order={3} className={styles.firstTitle}>
            {data.frontend.title}
          </Title>
          <Group gap={10} className={styles.firstText}>
            {data.frontend.skills.map((skill, index) => (
              <span key={index} className={styles.skillItem}>
                {iconMap[skill.icon]} {skill.name}
              </span>
            ))}
          </Group>
        </Stack>
        <Group>
          <Stack className={styles.smallTab}>
            <Title order={3} className={styles.title}>
              {data.styles.title}
            </Title>
            <Group className={styles.text}>
              {data.styles.skills.map((skill, index) => (
                <span key={index} className={styles.skillItem}>
                  {iconMap[skill.icon]} {skill.name}
                </span>
              ))}
            </Group>
          </Stack>
          <LinkButton url={data.githubUrl} icon={TbBrandGithubFilled} />
        </Group>
        <Stack className={styles.tab}>
          <Title order={3} className={styles.title}>
            {data.backend.title}
          </Title>
          <Group className={styles.text}>
            {data.backend.skills.map((skill, index) => (
              <span key={index} className={styles.skillItem}>
                {iconMap[skill.icon]} {skill.name}
              </span>
            ))}
          </Group>
        </Stack>
        <Group>
          <Box className={styles.gitLink}>
            <Title order={5} className={styles.detailText}>
              Some of my{" "}
              <span className={styles.italic}>
                favourite technologies, topics or tools
              </span>{" "}
              that i worked with
            </Title>
          </Box>
          <Stack className={styles.smallTab}>
            <Title order={3} className={styles.title}>
              {data.devops.title}
            </Title>
            <Group className={styles.text}>
              {data.devops.skills.map((skill, index) => (
                <span key={index} className={styles.skillItem}>
                  {iconMap[skill.icon]} {skill.name}
                </span>
              ))}
            </Group>
          </Stack>
        </Group>
      </Stack>
      <Box className={styles.imgBox}>
        <Box className={styles.imgOuter}>
          <img src={sez} alt="fullstack dev" className={styles.img} />
        </Box>
      </Box>
    </Group>
  );
};
export default AboutDetails;
