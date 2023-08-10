import { Flex, Heading, Box, Text, Button, Icon } from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmazonPay,
  FaGooglePlusG,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import styleCSS from "./LastSec.module.css";

const LastSec = () => {
  return (
    <div className={styleCSS.lastContain}>
      <Flex
        maxWidth={["1280px"]}
        marginRight={"auto"}
        marginLeft={"auto"}
        flexDir={["column"]}
        alignItems={["center"]}
      >
        <Box m="0 10px 60px 10px" w={{ lg: "50%" }}>
          <Heading
            fontWeight="200"
            color="#FFFFFFB2"
            as="h3"
            fontSize="30px"
            textAlign="center"
          >
            Ready to grab this Powerful UI Kit?
          </Heading>

          <Text fontWeight="100" color="#FFFFFFB2" mt={4} textAlign="center">
            You have <b>Free Unlimited Updates</b> and <b>Premium Support</b> on
            each package. You also have <b>30 days</b> to request a refund if
            you're not happy with your purchase.
          </Text>
        </Box>
      </Flex>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent={["center"]}
        alignItems={["center"]}
        gap={7}
        maxWidth="1280px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Flex
          m={["35px 15px 15px 15px", "0", "0", "0"]}
          bgColor="white"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          p="60px 11px 20px 10px"
          borderRadius="10px"
          boxShadow="md"
          w={{ lg: "25%" }}
        >
          <Box
            borderRadius="full"
            p={8}
            border="1px solid "
            color="#333"
            mt={5}
          >
            <CiUser size={40} />
          </Box>
          <Box mt={7} textAlign="center" marginLeft="5px">
            <Text color="#9a9a9a" fontSize="22px">
              $69
            </Text>
            <Text mt="15px" color="#9a9a9a">
              For business projects, multiple websites for clients or for
              creating themes where your users will be charged for using it.
              Create multiple websites/apps for multiple clients.
            </Text>
            <Button borderRadius="25px" colorScheme="red" mt={4}>
              Buy Now
            </Button>
          </Box>
        </Flex>
        <Flex
          m={["35px 15px 15px 15px", "0", "0", "0"]}
          bgColor="white"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          p="60px 11px 20px 10px"
          borderRadius="10px"
          boxShadow="md"
          w={{ lg: "25%" }}
        >
          <Box
            borderRadius="full"
            p={8}
            border="1px solid "
            color="#333"
            mt={5}
          >
            <BsBank size={40} />
          </Box>
          <Box mt={7} textAlign="center" marginLeft="5px">
            <Text color="#9a9a9a" fontSize="22px">
              $279
            </Text>
            <Text mt="15px" color="#9a9a9a">
              For business projects, multiple websites for clients or for
              creating themes where your users will be charged for using it.
              Create multiple websites/apps for multiple clients.
            </Text>
            <Button borderRadius="25px" colorScheme="red" mt={4}>
              Buy Now
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Box m={["20px 0"]} alignItems="center" textAlign="center">
        <Text fontSize={"xs"} color="#66615b">
          Pay one time with:
        </Text>
        <Flex justifyContent="center" mt={[2, 1, 0, 0]} gridColumnGap="3px">
          <Icon color="white" as={FaCcPaypal} boxSize={10}></Icon>
          <Icon color="white" as={FaCcVisa} boxSize={10}></Icon>
          <Icon color="white" as={FaCcMastercard} boxSize={10}></Icon>
          <Icon color="white" as={FaCcAmazonPay} boxSize={10}></Icon>
        </Flex>
      </Box>
      <Box m="50px 0" alignItems="center" textAlign="center">
        <Text fontSize={"xl"} color="white">
          Thank you for sharing!
        </Text>
        <Flex justifyContent="center" mt={6}></Flex>
        <Button colorScheme="twitter" borderRadius="25px">
          <Icon as={FaTwitter} mr="1" /> Twitter
        </Button>
        <Button colorScheme="facebook" m="0 5px 0 5px" borderRadius="25px">
          <Icon as={FaFacebook} mr="1" />
          Facebook
        </Button>
        <Button colorScheme="red" borderRadius="25px">
          <Icon as={FaGooglePlusG} mr="1" /> Google
        </Button>
      </Box>
    </div>
  );
};

export default LastSec;
