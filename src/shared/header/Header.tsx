import {
  Box,
  Container,
  Group,
  Stack,
  Title,
  Text,
  Transition,
  Overlay,
} from "@mantine/core";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const Header = () => {
  const links = [
    { to: "/", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const mobile = useMediaQuery("(max-width: 768px)");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <Container size="xl" h="100%" w="100%">
        <Group style={{ position: "relative" }} mt={25} justify="space-between">
          <Box className={styles.float} />
          <Link to="/">
            {!mobile && (
              <Stack className={styles.stack} gap={0}>
                <Title className={styles.stackTitle} order={3}>
                  Sezgin
                </Title>
                <Title className={styles.stackTitle} order={3}>
                  Bozdemir
                </Title>
              </Stack>
            )}
            {mobile && (
              <Text c="var(--white)" size="25px">
                sez.dev
              </Text>
            )}
          </Link>
          {!mobile && (
            <Group style={{ zIndex: 1000 }} justify="space-between">
              {links.map((link) => (
                <Link key={link.label} to={link.to}>
                  <Title className={styles.Title} order={5}>
                    {link.label}
                  </Title>
                </Link>
              ))}
            </Group>
          )}
          {!mobile && (
            <Stack style={{ zIndex: "1000" }} gap={0}>
              <Title className={styles.Title} order={3}>
                En
              </Title>
              <Title className={styles.Title} order={3}>
                Ro
              </Title>
            </Stack>
          )}
          {mobile && (
            <div
              onClick={toggleMenu}
              style={{ cursor: "pointer", zIndex: 2000 }}
            >
              {menuOpen ? (
                <FiX color="var(--white)" size={28} />
              ) : (
                <FiMenu color="var(--white)" size={28} />
              )}
            </div>
          )}
        </Group>
      </Container>
      <Transition
        mounted={Boolean(menuOpen && mobile)}
        transition="slide-down"
        duration={300}
        timingFunction="ease"
      >
        {(style) => (
          <Stack
            className={styles.mobileMenu}
            style={{ ...style }}
            align="center"
            justify="center"
          >
            {links.map((link) => (
              <Link key={link.label} to={link.to} onClick={closeMenu}>
                <Title className={styles.Title} order={3}>
                  {link.label}
                </Title>
              </Link>
            ))}
            <Group mt={20}>
              <Title className={styles.Title} order={3}>
                En
              </Title>
              <Title className={styles.Title} order={3}>
                Ro
              </Title>
            </Group>
          </Stack>
        )}
      </Transition>
      {menuOpen && mobile && (
        <Overlay opacity={0.5} color="#000" zIndex={1400} onClick={closeMenu} />
      )}
    </>
  );
};

export default Header;
