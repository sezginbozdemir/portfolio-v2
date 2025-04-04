import { Box, Group } from "@mantine/core";
import styles from "./ImageGallery.module.css";
import { FiLink } from "react-icons/fi";
import LinkButton from "../../../shared/components/linkButton/LinkButton";

interface ImageGalleryProps {
  desktop: string;
  mobile: string;
  index: number;
  link: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  desktop,
  mobile,
  index,
  link,
}) => {
  return (
    <Group
      style={index % 2 === 0 ? { order: 2 } : { order: 1 }}
      className={styles.imgGroup}
    >
      {index % 2 === 0 && (
        <Box className={styles.mobileImgBox}>
          <img src={mobile} alt="Fullstack dev" className={styles.mobileImg} />
        </Box>
      )}
      <Box className={styles.desktopImgBox}>
        <img src={desktop} alt="Fullstack dev" className={styles.desktopImg} />
        {link && (
          <Box className={styles.floatBox}>
            <LinkButton url={link} icon={FiLink} />
          </Box>
        )}
        <Box className={styles.border} />
      </Box>
      {index % 2 !== 0 && (
        <Box className={styles.mobileImgBox}>
          <img src={mobile} alt="Fullstack dev" className={styles.mobileImg} />
        </Box>
      )}
    </Group>
  );
};
export default ImageGallery;
