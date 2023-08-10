import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";

const CostomSec = () => {
  return (
    <div>
      <Box
        maxWidth="1280px"
        marginLeft="auto"
        marginRight="auto"
        padding="180px 0"
        textAlign="center"
      >
        <Text fontSize="34px" mb={6} color="#9a9a9a">
          Costom Icons
        </Text>
        <Text
          p={["0 70px", "0 90px", "0 110px", "0 400px"]}
          color="#9a9a9a"
          fontSize={["sm", "md", "lg", "xl"]}
          fontWeight="300"
        >
          Paper Kit 2 PRO comes with 100 custom demo icons made by our friends
          from{" "}
          <Link
            href="https://nucleoapp.com/?ref=1712"
            target="_blank"
            rel="noopener noreferrer"
            color="teal"
          >
            NucleoApp
          </Link>
          . The official package contains over 20,729 icons which are looking
          great in combination with Paper Kit 2 PRO. Make sure you check all of
          them and use those that you like the most.
        </Text>
        <Flex
          direction={["column", "column", "row", "row"]}
          justifyContent={{ lg: "center" }}
          gap={{ lg: "3" }}
          alignItems="center"
          mt={6}
        >
          <Button
            borderRadius="25px"
            colorScheme="teal"
            as={Button}
            variant="solid"
          >
            View Demo Icons
          </Button>

          <Button
            mt={["1", "1", "0", "0"]}
            borderRadius="25px"
            colorScheme="teal"
            as={Button}
            variant="outline"
          >
            View All Icons
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default CostomSec;
