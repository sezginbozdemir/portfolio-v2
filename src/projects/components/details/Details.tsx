import {
  Box,
  Button,
  Group,
  Stack,
  Text,
  Title,
  Modal,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import styles from "./Details.module.css";
import LinkButton from "../../../shared/components/linkButton/LinkButton";
import { TbBrandGithubFilled } from "react-icons/tb";
import { tileIcons } from "./Icons";
import { IoImages } from "react-icons/io5";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface DetailsProps {
  name: string;
  tiles: string[];
  descriptions: string[];
  url: string;
  images: string[];
  index: number;
}
const Details: React.FC<DetailsProps> = ({
  name,
  tiles,
  descriptions,
  url,
  images,
  index,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Stack
        style={index % 2 === 0 ? { order: 1 } : { order: 2 }}
        className={styles.detailStack}
      >
        <Stack gap={30}>
          <Title order={3} className={styles.name}>
            {name}
          </Title>
          <Group>
            {tiles.map((tile, index) => {
              const Icon = tileIcons[tile];
              return (
                <Text key={index} className={styles.tile}>
                  {Icon && <Icon />} {tile}
                </Text>
              );
            })}
          </Group>
        </Stack>
        <Stack gap={30}>
          {descriptions.map((description, index) => (
            <Title key={index} order={5} className={styles.description}>
              {description}
            </Title>
          ))}
        </Stack>
        <Group w="100%">
          <Box className={styles.box}>
            <LinkButton url={url} icon={TbBrandGithubFilled} />
          </Box>
          <Button className={styles.imagesButton} onClick={open}>
            <Title className={styles.buttonTitle} order={5}>
              +{images.length}
            </Title>

            <IoImages size={25} />
            <Title className={styles.buttonTitle} order={5}>
              More visuals
            </Title>
          </Button>
        </Group>
      </Stack>
      <Modal
        opened={opened}
        onClose={close}
        size="2xl"
        padding={0}
        classNames={{
          body: styles.modalContainer,
          inner: styles.modalContainer,
          content: styles.modalContent,
          header: styles.modalHeader,
        }}
        centered
      >
        <Carousel
          classNames={{
            root: styles.carouselRoot,
            slide: styles.carouselSlide,
            container: styles.carouselContainer,
            control: styles.carouselControl,
            controls: styles.carouselControls,
          }}
          nextControlIcon={<BsChevronRight size={36} />}
          previousControlIcon={<BsChevronLeft size={36} />}
          height="100%"
          slideSize="100%"
          loop
          align="center"
        >
          {images.map((image, index) => (
            <Carousel.Slide key={index}>
              <Image
                src={image}
                height="100%"
                width="100%"
                fit="contain"
                alt={`${name} project image ${index + 1}`}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Modal>
    </>
  );
};
export default Details;
