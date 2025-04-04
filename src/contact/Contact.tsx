import {
  Group,
  Text,
  Box,
  TextInput,
  Textarea,
  Button,
  Title,
} from "@mantine/core";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Group className={styles.container} mt={100}>
      <Text className={styles.title}>.../Contact me</Text>
      <Box className={styles.formBox}>
        <form>
          <TextInput
            label="Name"
            placeholder="Your name"
            required
            className={styles.inputField}
            classNames={{ input: styles.input }}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            required
            type="email"
            className={styles.inputField}
            classNames={{ input: styles.input }}
          />
          <Textarea
            label="Message"
            placeholder="Your message"
            required
            minRows={4}
            className={styles.inputField}
            classNames={{ input: styles.input }}
          />
          <Button px={50} type="submit" className={styles.button}>
            <Title fw={400} order={5}>
              Submit
            </Title>
          </Button>
        </form>
      </Box>
    </Group>
  );
};

export default Contact;
