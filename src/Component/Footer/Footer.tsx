import { Text, Box, Button, Container, Flex, Icon } from "@chakra-ui/react";
import { TiHeart } from "react-icons/ti";
import { PiCopyrightThin } from "react-icons/pi";
import styleCSS from "./Foot.module.css";
const Footer = () => {
  return (
    <div className={styleCSS.bgColor}>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent={{ lg: "space-between" }}
        m={{ lg: "0 130px" }}
        p={{ lg: " 40px 0" }}
        maxWidth={"auto"}
        marginLeft="auto"
        marginRight="auto"
      >
        <Flex
          p={["40px 0 60px 0", "0", "none", "none"]}
          flexDir={["row"]}
          justifyContent={["space-evenly"]}
          gap={{ lg: "12" }}
        >
          <Button
            color="#777777"
            as={"button"}
            variant="link"
            textTransform="uppercase"
          >
            Creative Tim
          </Button>
          <Button
            color="#777777"
            as={"button"}
            variant="link"
            textTransform="uppercase"
          >
            Blog
          </Button>
          <Button
            color="#777777"
            as={"button"}
            variant="link"
            textTransform="uppercase"
          >
            Lisense
          </Button>
        </Flex>
        <Box pb={["40px", "40px", "0", "0"]}>
          <Text color="#a49e9e" align="center" mb={{ lg: "0" }} fontSize="14px">
            <Icon as={PiCopyrightThin} boxSize={5} mr={1} color="#a49e9e" />
            2023 made with{" "}
            <Icon
              as={TiHeart}
              color="orange"
              className={styleCSS.heartbeatAnimation}
            />{" "}
            by Shehroz
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Footer;
