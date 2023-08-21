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

const SignIn = () => {
  const bgColor = "#171941";
  const textColor = useColorModeValue("gray.700", "gray.100");

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
        boxShadow="xl"
        bgColor="white"
        width="100%"
        maxWidth="400px"
      >
        <Heading as="h2" size="xl" mb={6} textAlign="center" color={textColor}>
          Sign In
        </Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" /> {/* Changed type to "password" */}
          </FormControl>

          <Button colorScheme="blue" size="md" width="100%">
            Sign In
          </Button>
        </Stack>
      </Box>
    </VStack>
  );
};

export default SignIn;
