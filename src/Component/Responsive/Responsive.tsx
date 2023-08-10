import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Respon from "../../assets/responsive.png";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { ImHtmlFive2 } from "react-icons/im";
import styleCSS from "./Responsive.module.css";
const Responsive = () => {
  return (
    <div className={styleCSS.contain}>
      <Flex
        display={["block", "block", "flex", "flex"]}
        maxWidth="1280px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Box w={{ lg: "50%" }} mb={7} pos="relative">
          <Image mt="-150px" src={Respon}></Image>
        </Box>
        <Flex w={{ lg: "30%" }} flexDir="column">
          <Flex p={{ lg: "30px  0" }}>
            <Icon
              ml={3}
              mr={{ base: 2, lg: 3 }}
              color="#f5593d"
              as={HiOutlineDeviceMobile}
              boxSize={10}
            />
            <Box>
              <Heading
                m={{ base: "10px 0" }}
                fontSize={["20px", "md", "lg", "2xl"]}
                fontWeight="200"
              >
                {" "}
                Fully Responsive Layout{" "}
              </Heading>
              <Text m="0 0 5px" color="#ffffffb2">
                The kit is designed to be mobile first. Every components looks
                great on any screen size.
              </Text>
            </Box>
          </Flex>
          <Flex mt={12} p={{ lg: "30px 0" }}>
            <Icon
              ml={3}
              mr={{ base: 2, lg: 3 }}
              color="#f5593d"
              as={ImHtmlFive2}
              boxSize={10}
            />
            <Box>
              <Heading
                m={{ base: "10px 0" }}
                fontSize={["20px", "md", "lg", "2xl"]}
                fontWeight="200"
              >
                HTML5 Powered by Bootstrap 4
              </Heading>
              <Text m="0 10px 5px 0" color="#ffffffb2">
                Paper Kit 2 Pro is built on top of Bootstrap 4. Get the benefits
                of the most powerful framework and the perks of amazing design.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Responsive;
