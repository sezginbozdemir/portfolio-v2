import { Group, Stack, Title } from "@mantine/core";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Group mt={10} justify="space-between">
        <Link to="/">
          <Stack gap={0}>
            <Title className={styles.Title} order={3}>
              Sezgin
            </Title>
            <Title className={styles.Title} order={3}>
              Bozdemir
            </Title>
          </Stack>
        </Link>
        <Group justify="space-between">
          <Link to="/">
            <Title className={styles.Title} order={5}>
              About
            </Title>
          </Link>
          <Link to="/">
            <Title className={styles.Title} order={5}>
              Projects
            </Title>
          </Link>
          <Link to="/">
            <Title className={styles.Title} order={5}>
              Articles
            </Title>
          </Link>
          <Link to="/">
            <Title className={styles.Title} order={5}>
              Contacts
            </Title>
          </Link>
        </Group>
        <Stack gap={0}>
          <Title className={styles.Title} order={3}>
            En
          </Title>
          <Title className={styles.Title} order={3}>
            Ro
          </Title>
        </Stack>
      </Group>
    </>
  );
};

export default Header;
