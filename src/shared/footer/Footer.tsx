import { Box, Container, Group, Stack, Text, Title } from "@mantine/core";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const links = [
    { name: "About", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Box style={{ position: "relative", overflow: "hidden" }} w="100%" h="100%">
      <Box className={styles.float} />
      <Container size="xl" h="100%" w="100%">
        <Group className={styles.mainGroup} mt={80} gap={50} w="100%">
          <Stack className={styles.stack} gap={30} mt={80}>
            <Text
              style={{ zIndex: 1000 }}
              ta="start"
              size="7rem"
              className={styles.Title}
            >
              Sezgin
            </Text>
            <Group style={{ zIndex: 1000 }} align="end" justify="space-between">
              <Title order={4} className={`${styles.Text} ${styles.full}`}>
                <Stack className={styles.hidden} gap={0}>
                  <span>Full-stack</span>
                  <span>Developer</span>
                </Stack>
              </Title>
              <Text
                ta="start"
                size="7rem"
                className={`${styles.Title} ${styles.lastname}`}
              >
                Bozdemir
              </Text>
            </Group>
          </Stack>
          <Stack style={{ zIndex: 1000 }} className={styles.contact}>
            <Text> .../Contact</Text>
            <Group justify="space-around">
              {links.map((link, index) => (
                <Link key={index} className={styles.Link} to={link.path}>
                  <Title order={5}></Title>
                  {link.name}
                </Link>
              ))}
            </Group>
            <Stack className={styles.roundedStack}>
              <Title order={3} className={styles.site}>
                Site
              </Title>
              <Stack>
                <Text>Styled with Mantine /</Text>
                <Text>Powered by Vite /</Text>
                <Text>Built with TypeScript /</Text>
              </Stack>
            </Stack>
          </Stack>
        </Group>
        <FooterLinks />
      </Container>
    </Box>
  );
};
export default Footer;
