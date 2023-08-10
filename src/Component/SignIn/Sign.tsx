import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const SignIn = () => {
  return (
    <Container m={12}>
      <Container p={12}>
        <Stack spacing={1}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="email" />
          </FormControl>

          <Button size="sm">Sign In</Button>
        </Stack>
      </Container>
    </Container>
  );
};

export default SignIn;
