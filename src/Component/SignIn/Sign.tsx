import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";
import bgdot from "../../assets/dotsBg.png";
import { Link, Outlet } from "react-router-dom";

const SignIn = () => {
  const bgColor = "#171941";

  const containerStyles = {
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${bgdot})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  return (
    <VStack
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      bg={bgColor}
      style={containerStyles}
    >
      <Box
        p={8}
        rounded="xl"
        border={"1px solid #9a9a9a"}
        bgColor={"transparent"}
        width="100%"
        maxWidth="400px"
      >
        <Heading
          as="h2"
          size="xl"
          mb={6}
          textAlign="center"
          color={"#ffffffb2"}
        >
          Sign In
        </Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel color={"#9a9a9a"}>Email address</FormLabel>
            <Input color={"#9a9a9a"} type="email" />
          </FormControl>

          <FormControl>
            <FormLabel color={"#9a9a9a"}>Password</FormLabel>
            <Input color={"#9a9a9a"} type="password" />{" "}
            {/* Changed type to "password" */}
          </FormControl>
          <Link to={"/"}>
            <Button colorScheme="pink" size="md" width="100%">
              Sign In
            </Button>
          </Link>
        </Stack>
      </Box>
    </VStack>
  );
};

export default SignIn;
