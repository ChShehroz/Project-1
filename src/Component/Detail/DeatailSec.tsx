import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { FaCoins } from "react-icons/fa";
import { BsSmartwatch, BsGrid1X2 } from "react-icons/bs";
import { BiAlignMiddle } from "react-icons/bi";
import style from "./Detail.module.css";
const DeatailSec = () => {
  return (
    <div className={style.contain}>
      <Flex alignItems="center" flexDir="column">
        <Text fontSize="4xl" textAlign="center" fontWeight="100">
          Want more details?
        </Text>
        <Flex
          w={{ lg: "85%" }}
          flexDir={["column", "column", "row", "row"]}
          gap={{ lg: "8" }}
          maxWidth="1280px"
          marginLeft="auto"
          marginRight="auto"
        >
          <Flex
            m={["35px 15px 25px 15px", "0px", "0px", "0px"]}
            bgColor="#9AE6B4"
            alignItems="center"
            justifyContent="center"
            flexDir={"column"}
            padding="60px 18px 40px 18px"
            borderRadius="10px"
            boxShadow="md"
          >
            <Box borderRadius="full" p={8} color="#ffffff" mt={5}>
              <FaCoins size={40} />
            </Box>
            <Box mt={5} textAlign="center" marginLeft="5px">
              <Text color="#ffffff" fontSize="22px">
                Save Money
              </Text>
              <Text mt="15px" color="#ffffff" textAlign="center">
                Creating your design from scratch with dedicated designers can
                be very expensive. Using a kit is the best option to start your
                development.
              </Text>
            </Box>
          </Flex>

          <Flex
            m={["25px 15px 0px 15px", "0px", "0px", "0px"]}
            bgColor="#71d9e3"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            padding="60px 18px 40px 18px"
            borderRadius="10px"
            boxShadow="md"
          >
            <Box borderRadius="full" p={8} color="#ffffff" mt={5}>
              <BsSmartwatch size={40} />
            </Box>
            <Box mt={5} textAlign="center" marginLeft="5px">
              <Text color="#ffffff" fontSize="22px">
                Save Time
              </Text>
              <Text mt="15px" color="#ffffff" textAlign="center">
                Using the kit will save you large amount of time. You don't have
                to worry about customising the basic Bootstrap 4 design or its
                components.
              </Text>
            </Box>
          </Flex>
          <Flex
            m={["25px 15px 0px 15px", "0px", "0px", "0px"]}
            bgColor="#ad6aba"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            padding="60px 18px 40px 18px"
            borderRadius="10px"
            boxShadow="md"
          >
            <Box borderRadius="full" p={8} color="#ffffff" mt={5}>
              <BsGrid1X2 size={40} />
            </Box>
            <Box mt={5} textAlign="center" marginLeft="5px">
              <Text color="#ffffff" fontSize="22px">
                Bootstrap 4 Grid
              </Text>
              <Text mt="15px" color="#ffffff" textAlign="center">
                Enjoy the fluid grid system based on 12 columns. Paper Kit 2 PRO
                is built over Bootstrap 4 and has all the benefits that the
                framework comes with.
              </Text>
            </Box>
          </Flex>
          <Flex
            m={["25px 15px 0px 15px", "0px", "0px", "0px"]}
            bgColor="#dec28e"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            padding="60px 18px 40px 18px"
            borderRadius="10px"
            boxShadow="md"
          >
            <Box borderRadius="full" p={8} color="#ffffff" mt={5}>
              <BiAlignMiddle size={40} />
            </Box>
            <Box mt={5} textAlign="center" marginLeft="5px">
              <Text color="#ffffff" fontSize="22px">
                Built with Flexbox
              </Text>
              <Text mt="15px" color="#ffffff" textAlign="center">
                Paper Kit 2 PRO primarily uses the flexbox for the layout, grid
                system, cards and components. This is a huge advantage for
                working with columns.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default DeatailSec;
