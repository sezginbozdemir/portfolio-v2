import { Group, Stack, Text, Title } from "@mantine/core";
import styles from "./About.module.css";

const AboutTitle = () => {
  return (
    <Group className={styles.mainGroupTitle} mb={100}>
      <Text className={styles.about}>.../About me</Text>
      <Stack gap={0} className={styles.descriptionStack}>
        <Title order={4} className={styles.description}>
          Hello, I'm Sezgin, a {""}
          <span className={styles.italic}>full-stack developer</span> with
        </Title>
        <Title order={4} className={styles.description}>
          over {""}
          <span className={styles.italic}>5 years</span> of experience based in
          Romania.
        </Title>
      </Stack>
    </Group>
  );
};
export default AboutTitle;
