import { Button, Group, Stack, Text, Title } from "@mantine/core";
import styles from "./Intro.module.css";
import { FiDownload } from "react-icons/fi";

const Intro = () => {
  return (
    <Stack gap={30} mt={80}>
      <Group align="end">
        <Text ta="start" size="7rem" className={styles.Title}>
          Full-stack
        </Text>
        <Group className={styles.InnerGroup} justify="center">
          <Button
            component="a"
            href="/cv.pdf"
            download="Sezgin_CV.pdf"
            className={styles.Button}
            w={250}
            h={50}
            variant="filled"
            radius="xl"
          >
            <Title className={styles.Link} order={4}>
              Resume
            </Title>
          </Button>
          <Button
            component="a"
            href="/cv.pdf"
            download="Sezgin_CV.pdf"
            className={styles.Button}
            h={55}
            variant="filled"
            radius="xl"
          >
            <FiDownload color="var(--black)" size={20} />
          </Button>
        </Group>
      </Group>
      <Group align="end" justify="space-between">
        <Title order={4} w="45%" className={styles.Text}>
          My focus is on{" "}
          <span className={styles.TextSpan}>writing clean, maintainable,</span>{" "}
          and <span className={styles.TextSpan}>readable code</span> that
          enhances the development experience. I aim to create efficient,
          scalable solutions that not only meet the project’s needs but also
          ensure a smooth and enjoyable development journey.{" "}
        </Title>

        <Text ta="start" size="7rem" className={styles.Title}>
          Developer
        </Text>
      </Group>
    </Stack>
  );
};

export default Intro;
