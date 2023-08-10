import {
  Box,
  Container,
  Icon,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import Laptop from "../../assets/laptop-basic.png";
import Table from "../../assets/table.jpg";
import Pin from "../../assets/pin-btn.png";
import Card from "../../assets/coloured-card.png";
import Card2 from "../../assets/coloured-card-with-btn.png";
import Bar from "../../assets/social-row.png";
import fb from "../../assets/share-btn.png";
import styles from "./SecThird.module.css";
const SecThird = () => {
  return (
    <>
      <div className={styles.thirdCont}>
        <Flex
          flexDir={["column", "column", "row", "row"]}
          maxWidth="1280px"
          marginLeft="auto"
          marginRight="auto"
        >
          <Box pos="relative" mb={"100px"}>
            <Image
              h={{ base: "280px", lg: "auto" }}
              ml={["-20px"]}
              mt="-40px"
              src={Laptop}
            />

            <Container display="flex" pos="absolute" top="0" p="0">
              <Image
                pos={"absolute"}
                top={["-10", "-20"]}
                left={["30px", "50px"]}
                h="25px"
                src={Pin}
                className={styles.floatingAnimation1}
              />
              <Image
                pos="absolute"
                top="-70px"
                left={["170px", "260px"]}
                w="172px"
                borderRadius="6px"
                src={Card2}
                className={styles.floatingAnimation2}
                zIndex={1}
              />
              <Image
                pos="absolute"
                top="50px"
                left={["320px", "450px"]}
                w="264px"
                borderRadius="6px"
                src={Table}
                className={styles.floatingAnimation3}
              />
              <Image
                pos="absolute"
                top="150px"
                left="20px"
                w="180px"
                borderRadius="6px"
                src={Card}
                className={styles.floatingAnimation4}
                zIndex={1}
              />
              <Image
                src={Bar}
                pos={"absolute"}
                top={"280"}
                className={styles.floatingAnimation4}
                zIndex={1}
                h={"40px"}
                display={["none", "none", "flex", "flex"]}
              />
              <Image
                h={"25px"}
                src={fb}
                pos={"absolute"}
                top={"260"}
                left={["430"]}
                className={styles.floatingAnimation2}
                display={["none", "none", "flex", "flex"]}
              />
            </Container>
          </Box>
          <Container w={["100%", "75", "50%"]}>
            <Box>
              <Heading color="#FFFFFFB2" as="h3" size="lg" fontWeight="200">
                Basic Components
              </Heading>
              <Heading color="#FFFFFFB2" as="h6" size="sm" mt={2}>
                The core elements of your website
              </Heading>
              <Text
                fontSize={["18px"]}
                fontWeight={["200"]}
                color="#FFFFFFB2"
                mt={[4, 6, 8, 10]}
                pr={[0, 2, 3, 6]}
              >
                We re-styled every Bootstrap 4 element to match the Paper Kit
                style. All the Bootstrap 4 components that you need in a
                development have been re-designed with the new look. Besides the
                numerous basic elements, we have also created additional
                classes. All these items will help you take your project to the
                next level.
              </Text>
            </Box>
          </Container>
        </Flex>
      </div>
    </>
  );
};

export default SecThird;
