import { Box, Container, Group, Stack, Title } from "@mantine/core";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    { to: "/", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <Container size="xl" h="100%" w="100%">
      <Group style={{ position: "relative" }} mt={25} justify="space-between">
        <Box className={styles.float} />
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
        <Stack style={{ zIndex: "1000" }} gap={0}>
          <Title className={styles.Title} order={3}>
            En
          </Title>
          <Title className={styles.Title} order={3}>
            Ro
          </Title>
        </Stack>
      </Group>
    </Container>
  );
};

export default Header;
