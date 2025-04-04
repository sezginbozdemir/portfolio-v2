import { Group, Stack, Title } from "@mantine/core";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    { to: "/", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <>
      <Group mt={25} justify="space-between">
        <Link to="/">
          <Stack className={styles.stack} gap={0}>
            <Title className={styles.stackTitle} order={3}>
              Sezgin
            </Title>
            <Title className={styles.stackTitle} order={3}>
              Bozdemir
            </Title>
          </Stack>
        </Link>
        <Group justify="space-between">
          {links.map((link) => (
            <Link key={link.label} to={link.to}>
              <Title className={styles.Title} order={5}>
                {link.label}
              </Title>
            </Link>
          ))}
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
