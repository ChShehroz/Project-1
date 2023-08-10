import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "./Wrapper.module.css";
import fog from "../../assets/fog-low.png";

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Box pos="relative" top="420">
        <Image
          pos="relative"
          bottom={["none", "none", "none", "60"]}
          left={["-10", "0", "0", "-10"]}
          maxWidth={["730px", "none", "none", "none"]}
          textAlign="center"
          src={fog}
          zIndex={1}
        />
      </Box>
      <Flex
        flexDir="column"
        maxWidth="1280px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Box pos={"relative"} top={["100", "0", "0", "5"]} alignItems="center">
          <Text
            className="textBg"
            fontSize={["100px", "100px", "100px", "8em"]}
            lineHeight={["1.2", "0", "0", "0"]}
            fontWeight="700"
            color="white"
            align="center"
            height={["270px", "0", "0", "100px"]}
          >
            Paper Kit 2
          </Text>
          <Text
            display="inline-block"
            bgColor="black"
            color="white"
            fontSize="20px"
            textAlign="center"
            borderRadius="4px"
            fontWeight="bold"
            padding="6px 10px"
            textTransform="uppercase"
            zIndex="3"
            pos="absolute"
            top={["0", "0", "0", "-20"]}
            right={["0", "0", "0", "270"]}
          >
            Pro
          </Text>
          <Text
            align="center"
            color="white"
            fontSize="2xl"
            fontWeight="100"
            height={["280px", "0", "0", "110"]}
          >
            Make your mark with a premium Bootstrap 4 UI Kit!
          </Text>
          <Text
            color="white"
            textTransform="uppercase"
            alignItems="end"
            justifyContent="center"
            display="flex"
          >
            DESIGNED AND CODED BY Shehroz
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Wrapper;
