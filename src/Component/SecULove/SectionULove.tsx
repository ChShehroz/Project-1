import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import styleCss from "./SectionULove.module.css";
import image1 from "../../assets/header-1.jpg";
import image2 from "../../assets/header-2.jpg";
import image3 from "../../assets/header-3.jpg";
import image4 from "../../assets/header-4.jpg";
import image5 from "../../assets/team-cards-social.jpg";
import image6 from "../../assets/bg-pricing-card.jpg";
import image7 from "../../assets/white-pricing-card.jpg";
import image8 from "../../assets/team-member-card.jpg";
import image9 from "../../assets/testimonials-1.jpg";
import image10 from "../../assets/blog-bg-cards.jpg";
import image11 from "../../assets/our-products.jpg";
import image12 from "../../assets/projects-cards.jpg";
import image13 from "../../assets/blogpost-cards.jpg";
import image14 from "../../assets/blogpost-2-cards2.jpg";
import image15 from "../../assets/coloured-picind-card.jpg";
import image16 from "../../assets/team-3.jpg";

const SectionULove = () => {
  return (
    <div className={styleCss.secContain}>
      <Box justifyContent="center" textAlign="center" mb="20px">
        <Heading fontSize="34px" fontWeight={200} mb={8}>
          Section you will love
        </Heading>
        <Text color="#9a9a9a" m={{ base: "10px", lg: "20px 220px" }}>
          Build pages in no time using pre-made sections! We have created
          multiple sections for you to put together and customise into pixel
          perfect example pages. From headers to footers, you will be able to
          choose the best combination for your project.
        </Text>
        <Button
          colorScheme="blackAlpha"
          borderRadius="25px"
          textTransform="uppercase"
        >
          View All Section
        </Button>
      </Box>
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap={5}
        p="0 20px"
      >
        <Flex flexDir={["column", "column", "row", "row"]} gap={5}>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image1}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image2}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image3}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image4}
              />
            </Link>
          </Flex>
        </Flex>
        <Flex flexDir={["column", "column", "row", "row"]} gap={5}>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image5}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image6}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image7}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image8}
              />
            </Link>
          </Flex>
        </Flex>
        <Flex flexDir={["column", "column", "row", "row"]} gap={5}>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image9}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image10}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image11}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image12}
              />
            </Link>
          </Flex>
        </Flex>
        <Flex flexDir={["column", "column", "row", "row"]} gap={5}>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image13}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image14}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image10}
              />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Link>
              <Image
                className={styleCss.pic}
                borderRadius="12px"
                src={image15}
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default SectionULove;
