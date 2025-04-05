import { Box, Group } from "@mantine/core";
import styles from "./ImageGallery.module.css";
import { FiLink } from "react-icons/fi";
import LinkButton from "../../../shared/components/linkButton/LinkButton";
import { useMediaQuery } from "@mantine/hooks";

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
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Group
      className={styles.imgGroup}
      style={{
        order: isMobile ? "unset" : index % 2 === 0 ? 2 : 1,
      }}
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
