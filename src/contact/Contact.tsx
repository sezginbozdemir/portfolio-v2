import {
  Group,
  Text,
  Box,
  TextInput,
  Textarea,
  Button,
  Title,
} from "@mantine/core";
import { ScrollTop } from "../shared/hooks/ScrollTop";
import styles from "./Contact.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const Contact = () => {
  ScrollTop();
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_26y0va8",
        "template_seg40oc",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "bbUkLejFT4lzzGXLQ"
      )
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setStatusType("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err: any) => {
        console.error("Error sending email:", err);
        setStatusMessage("Failed to send message. Please try again.");
        setStatusType("error");
      });
  };
  return (
    <Group className={styles.container} mt={100}>
      <Text className={styles.title}>
        <span>.../Contact me</span>
      </Text>
      <Box className={styles.formBox}>
        <form onSubmit={handleSubmit}>
          <TextInput
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className={styles.inputField}
            classNames={{ input: styles.input }}
          />
          <TextInput
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Email"
            placeholder="Your email"
            required
            type="email"
            className={styles.inputField}
            classNames={{ input: styles.input }}
          />
          <TextInput
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            label="Subject"
            placeholder="Subject"
            required
            type="subject"
            className={styles.inputField}
            classNames={{ input: styles.input }}
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            label="Message"
            placeholder="Your message"
            required
            minRows={4}
            className={styles.inputField}
            classNames={{ input: styles.inputArea }}
          />
          <Button px={50} type="submit" className={styles.button}>
            <Title fw={400} order={5}>
              Submit
            </Title>
          </Button>
          {statusMessage && (
            <Text
              mt={30}
              size="sm"
              style={{
                color: statusType === "error" ? "red" : "var(--white)",
              }}
            >
              {statusMessage}
            </Text>
          )}
        </form>
      </Box>
    </Group>
  );
};

export default Contact;
