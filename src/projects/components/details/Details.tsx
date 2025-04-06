import { Box, Button, Group, Stack, Text, Title, Modal } from "@mantine/core";
import styles from "./Details.module.css";
import LinkButton from "../../../shared/components/linkButton/LinkButton";
import { TbBrandGithubFilled } from "react-icons/tb";
import { tileIcons } from "./Icons";
import { IoImages } from "react-icons/io5";
import { Image } from "@mantine/core";
import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { FiLink } from "react-icons/fi";

interface DetailsProps {
  name: string;
  tiles: string[];
  descriptions: string[];
  url: string;
  images: string[];
  index: number;
  link: string;
}
const Details: React.FC<DetailsProps> = ({
  name,
  tiles,
  descriptions,
  url,
  images,
  index,
  link,
}) => {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);
  return (
    <>
      <Stack
        style={{
          order: isMobile ? 2 : index % 2 === 0 ? 1 : 2,
        }}
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
          {link && (
            <Box className={styles.mobileLink}>
              <LinkButton url={link} icon={FiLink} />
              <Title className={styles.buttonTitle} order={4}>
                Visit site
              </Title>
            </Box>
          )}
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
          <Button
            className={styles.imagesButton}
            onClick={() => setOpened(true)}
          >
            <Title className={styles.buttonTitle} order={4}>
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
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={true}
        opened={opened}
        onClose={() => setOpened(false)}
        size="2xl"
        padding={0}
        classNames={{
          body: styles.modalContainer,
          inner: styles.modalContainer,
          content: styles.modalContent,
          header: styles.modalHeader,
          close: styles.modalClose,
        }}
        centered
      >
        <Carousel
          getEmblaApi={setEmbla}
          classNames={{
            root: styles.carouselRoot,
            slide: styles.carouselSlide,
            container: styles.carouselContainer,
            control: styles.carouselControl,
            controls: styles.carouselControls,
          }}
          nextControlIcon={<BsChevronRight size={46} />}
          previousControlIcon={<BsChevronLeft size={46} />}
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
                alt="Project image"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Modal>
    </>
  );
};
export default Details;
