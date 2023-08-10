import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiTwotoneStar } from "react-icons/ai";
import img1 from "../../assets/thumb_.png";
import img2 from "../../assets/thumb.jpeg";
import img3 from "../../assets/photo.png";
import img4 from "../../assets/vodafone.jpg";
import img5 from "../../assets/microsoft.jpg";
import img6 from "../../assets/harvard.jpg";
import img7 from "../../assets/stanford.jpg";
import styles from "./SliderCard.module.css";
import { Box, Container, Flex, Icon, Image } from "@chakra-ui/react";
import SliderFSec from "./SliderFSec";

const CarouselComponent = () => {
  const slides = [
    {
      id: 1,
      avatar: img3,
      quote:
        "I'm newer to the front-end... With my creative side lacking in experience this really put me in the right spot to speed through the fast lane. I love this Design kit so much!",
      name: "Chase Jackson",
      role: "Web Developer",
      rating: 4.5,
    },
    {
      id: 2,
      avatar: img1,
      quote:
        "Love the shapes and color palette on this one! Perfect for one of my pet projects!",
      name: "Robin Leysen",
      role: "Web Developer",
      rating: 5,
    },
    {
      id: 3,
      avatar: img2,
      quote: "Love it. Use it for prototypes and along with Paper Dashboard.",
      name: "Cristi Jora",
      role: "Web Developer",
      rating: 4,
    },
  ];

  return (
    <div className={styles.sliderContain}>
      <SliderFSec />
      <Container>
        <Carousel showStatus={false}>
          {slides.map((slide) => (
            <>
              <div key={slide.id} className={styles.carouselSlide}>
                <div className={styles.avatarContainer}>
                  <img
                    src={slide.avatar}
                    alt={`Avatar of ${slide.name}`}
                    className={styles.avatarImage}
                  />
                </div>
                <div className={styles.slideContent}>
                  <p className={styles.quote}>{slide.quote}</p>
                  <p className={styles.name}>{slide.name}</p>
                  <p className={styles.role}>{slide.role}</p>
                </div>
                <Flex justifyContent="center">
                  <Icon boxSize={6} color="#ECC94B" as={AiTwotoneStar} />
                  <Icon boxSize={6} color="#ECC94B" as={AiTwotoneStar} />
                  <Icon boxSize={6} color="#ECC94B" as={AiTwotoneStar} />
                  <Icon boxSize={6} color="#ECC94B" as={AiTwotoneStar} />
                  <Icon boxSize={6} color="#ECC94B" as={AiTwotoneStar} />
                </Flex>
              </div>
            </>
          ))}
        </Carousel>
      </Container>

      <Flex justifyContent="center">
        <Flex flexDir="row" justifyContent="center">
          <Flex flexDir={["row"]} alignItems="center">
            <Flex flexDir={["column", "column", "row", "row"]}>
              <Image p="0 15px" w="140px" src={img4} />
              <Image p="0 15px" w="140px" src={img5} />
            </Flex>
            <Flex flexDir={["column", "column", "row", "row"]}>
              <Image p="0 15px" w="140px" src={img6} />
              <Image p="0 15px" w="140px" src={img7} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default CarouselComponent;
