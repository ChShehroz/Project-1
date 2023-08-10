import { Heading, Text, Box } from "@chakra-ui/react";
import styles from "./SliderCard.module.css";

const SliderFSec = () => {
  return (
    <div className={styles.sliderContain2}>
      <Heading mb={5} fontSize="4xl" fontWeight="100" textAlign="center">
        Trusted by 232,000+ People
      </Heading>
      <Box
        fontWeight="100"
        textAlign="center"
        as="h5"
        className="description"
        fontSize={["md", "md", "lg", "lg"]}
        color="#9a9a9a"
        m={{ lg: "0 190px" }}
      >
        The UI Kits, Templates and Dashboards that we've created are used by{" "}
        <Text fontWeight="bold" as="b">
          232,000+ web developers
        </Text>{" "}
        in over{" "}
        <Text fontWeight="bold" as="b">
          400,000 Web Projects
        </Text>
        . This is what some of them think:
      </Box>
    </div>
  );
};

export default SliderFSec;
