import { Box, Container, Icon, Heading, Text, Flex } from "@chakra-ui/react";
import { LuComponent } from "react-icons/Lu";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TbLayout } from "react-icons/tb";
import style from "./DarkSec.module.css";

const DarkSec = () => {
  return (
    <div className={style.contain}>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        w="80%"
        maxWidth="1280px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Container>
          <Box justifyContent="center" textAlign="center">
            <Box>
              <Icon as={TbLayout} w={12} h={12} color="#f5593d" mb="20px" />
              <Heading
                fontWeight="200"
                as="h4"
                size={["md", "md", "ld", "lg"]}
                color="#FFFFFF"
                mb="20px"
              >
                Huge Number of Components
              </Heading>
              <Text fontWeight="100" color="#FFFFFFB2" mb="50px">
                The kit comes with components designed to look perfect together.
                All components fit perfectly with each other.
              </Text>
            </Box>
          </Box>
        </Container>
        <Container>
          <Box justifyContent="center" textAlign="center">
            <Box>
              <Icon as={LuComponent} w={12} h={12} color="#f5593d" mb="20px" />
              <Heading
                fontWeight="200"
                as="h4"
                size={["md", "md", "ld", "lg"]}
                color="#FFFFFF"
                mb="20px"
              >
                Multi-Purpose Section
              </Heading>
              <Text fontWeight="100" color="#FFFFFFB2" mb="50px">
                The sections will help you generate pages in no time. From team
                presentation to pricing options, you can easily customise and
                built your examples.
              </Text>
            </Box>
          </Box>
        </Container>
        <Container>
          <Box justifyContent="center" textAlign="center">
            <Box>
              <Icon
                as={HiOutlineDocumentText}
                w={12}
                h={12}
                color="#f5593d"
                mb="20px"
              />
              <Heading
                fontWeight="200"
                as="h4"
                size={["md", "md", "ld", "lg"]}
                color="#FFFFFF"
                mb="20px"
              >
                Example Pages
              </Heading>
              <Text fontWeight="100" color="#FFFFFFB2" mb="20px">
                Speed up your development time or get inspired with the large
                number of example pages. You can jump start your development
                with our pre-built example pages.
              </Text>
            </Box>
          </Box>
        </Container>
      </Flex>
    </div>
  );
};

export default DarkSec;
