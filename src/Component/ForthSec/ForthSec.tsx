import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { List, ListItem } from "@chakra-ui/react";
import pic1 from "../../assets/purple-card.png";
import pic2 from "../../assets/twitter-card.jpg";
import pic3 from "../../assets/facebook-card.jpg";
import pic4 from "../../assets/pricing-card.jpg";
import pic5 from "../../assets/blog-card.jpg";
import pic6 from "../../assets/capture.jpg";
import pic7 from "../../assets/team-card.jpg";
import pic8 from "../../assets/testimonal-card.jpg";
import pic9 from "../../assets/pricing-card-icon.jpg";
import stylesCSS from "./ForthSec.module.css";

const ForthSec = () => {
  return (
    <div className={stylesCSS.forthContain}>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        h="90%"
        maxWidth="1280px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Container>
          <Box pl={7}>
            <Heading color="#FFFFFFB2" as="h3" size="2xl" fontWeight="200">
              Beautiful Cards
            </Heading>
            <Heading color="#FFFFFFB2" as="h6" size="sm" mt={2}>
              One Card for Every Problem
            </Heading>
            <Text color="#FFFFFFB2" mt={10} mr={{ base: "120px", lg: "120px" }}>
              We have gone above and beyond with options for you to organise
              your information. From cards designed for blog posts, to product
              cards or user profiles, you will have many options to choose from.
              All the cards follow the Paper Kit style principles and have a
              design that stands out.
            </Text>
          </Box>
        </Container>
        <Container
          marginTop={"-150px"}
          className={stylesCSS.rotate}
          maxWidth="fit-content"
          h={{ base: "600px", lg: "650px" }}
        >
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={1}>
              <Box m={1}>
                <Link>
                  <Image
                    borderRadius="14px"
                    src={pic1}
                    maxW="auto"
                    h="min-content"
                  />
                </Link>
              </Box>
              <Box m={1}>
                <Link>
                  <Image
                    borderRadius="14px"
                    src={pic2}
                    maxW="auto"
                    h="min-content"
                  />
                </Link>
              </Box>
              <Box m={1}>
                <Link>
                  <Image
                    borderRadius="14px"
                    src={pic4}
                    maxW="auto"
                    h="min-content"
                  />
                </Link>
              </Box>
              <Box m={1}>
                <Link>
                  <Image
                    borderRadius="14px"
                    src={pic7}
                    maxW="auto"
                    h="min-content"
                  />
                </Link>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Box m={1}>
                <Link>
                  <Image
                    borderRadius="14px"
                    src={pic8}
                    maxW="auto"
                    h="min-content"
                  />
                </Link>
              </Box>
              <Box m={1}>
                <Link>
                  <Image
                    borderRadius="14px"
                    src={pic5}
                    maxW="auto"
                    h="min-content"
                  />
                </Link>
              </Box>
              <Box m={1}>
                <Link>
                  <Image
                    borderRadius="14px"
                    src={pic6}
                    maxW="auto"
                    h="min-content"
                  />
                </Link>
              </Box>
            </GridItem>
            <GridItem
              display={{ base: "none", lg: "block" }}
              rowSpan={1}
              colSpan={1}
            >
              <Box m={1}>
                <Link>
                  <Image
                    borderRadius="14px"
                    src={pic9}
                    maxW="auto"
                    h="min-content"
                  />
                </Link>
              </Box>
              <Box m={1}>
                <Link>
                  <Image
                    borderRadius="14px"
                    src={pic3}
                    maxW="auto"
                    h="min-content"
                  />
                </Link>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Flex>
    </div>
  );
};

export default ForthSec;
