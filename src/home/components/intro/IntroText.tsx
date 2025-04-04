import styles from "./Intro.module.css";
import { Title } from "@mantine/core";
interface Props {
  hidden?: boolean;
}

const IntroText: React.FC<Props> = ({ hidden }) => {
  return (
    <Title
      className={`${styles.Text} ${hidden ? styles.hidden : ""}`}
      order={4}
    >
      My focus is on{" "}
      <span className={styles.TextSpan}>writing clean, maintainable,</span> and{" "}
      <span className={styles.TextSpan}>readable code</span> that enhances the
      development experience. I aim to create efficient, scalable solutions that
      not only meet the project’s needs but also ensure a smooth and enjoyable
      development journey.{" "}
    </Title>
  );
};
export default IntroText;
