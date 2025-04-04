import { Button, Group, Title } from "@mantine/core";
import styles from "./Footer.module.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const FooterLinks = () => {
  const linkData = [
    {
      name: "Github",
      icon: <TbBrandGithubFilled size={18} color="var(--white)" />,
      link: "https://github.com/sezginbozdemir",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={18} color="var(--white)" />,
      link: "https://linkedin.com/in/sezginbozdemir",
    },
    {
      name: "Email",
      icon: <MdAlternateEmail size={18} color="var(--white)" />,
      link: "mailto:bozdemirsezgin@proton.me",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={18} color="var(--white)" />,
      link: "#",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={18} color="var(--white)" />,
      link: "#",
    },
  ];

  return (
    <Group justify="center" mb={100} mt={50}>
      {linkData.map((link, index) => (
        <Button
          key={index}
          component="a"
          href={link.link}
          className={styles.Button}
          variant="outline"
          radius="xl"
        >
          <Title order={5} className={styles.LinkText}>
            {link.icon}
            {link.name}
          </Title>
        </Button>
      ))}
    </Group>
  );
};

export default FooterLinks;
