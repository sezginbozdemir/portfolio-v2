import { Box, Group, Stack, Text, Title } from "@mantine/core";
import styles from "./Work.module.css";
import data from "./work.json";

const Work = () => {
  return (
    <>
      <Box className={styles.headerBox}>
        <Text className={styles.header}>Work</Text>
      </Box>

      <Box className={styles.workBox}>
        {data.experience.map((job, index) => (
          <Group key={index} className={styles.workGroup}>
            <Group className={styles.innerGroup}>
              <Stack className={styles.timeStack}>
                <Title order={4} className={styles.time}>
                  {job.start} - {job.end}
                </Title>
                <Title order={6} className={styles.range}>
                  {job.duration}
                </Title>
              </Stack>
              <Title order={4} className={styles.company}>
                {job.company}
              </Title>
            </Group>
            <Text className={styles.stack}>{job.role}</Text>
          </Group>
        ))}
      </Box>
      <Box className={styles.headerBox}>
        <Stack my={20} gap={0}>
          <Title className={styles.time} order={5}>
            Work experience
          </Title>
          <Title order={5} className={styles.total}>
            {data.total}
          </Title>
        </Stack>
      </Box>
    </>
  );
};

export default Work;
