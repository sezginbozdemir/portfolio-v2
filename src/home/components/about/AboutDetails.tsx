import { Box, Group, Image, Stack, Title } from "@mantine/core";
import styles from "./About.module.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import data from "./about.json";
import { iconMap } from "./Icons";
import LinkButton from "../../../shared/components/linkButton/LinkButton";
import sez from "../../../assets/images/sez.png";
import { useTranslation } from "react-i18next";

const AboutDetails = () => {
  const { t } = useTranslation();
  return (
    <Group className={styles.mainGroup} align="start">
      <Stack style={{ zIndex: "1000" }} className={styles.tabStack}>
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
        <Group justify="space-between">
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
              {t("about.line3_start")}
              <span className={styles.italic}>
                {""} {t("about.line3_italic")}
              </span>{" "}
              {t("about.line3_end")}
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
      <Box style={{ zIndex: "1000" }} className={styles.imgBox}>
        <Box className={styles.imgOuter}>
          <Image src={sez} alt="fullstack dev" className={styles.img} />
        </Box>
      </Box>
    </Group>
  );
};
export default AboutDetails;
