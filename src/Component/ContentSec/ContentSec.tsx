import { useEffect, useRef } from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import IMAGE1 from "../../assets/ipad-content-2.png";
import IMAGE2 from "../../assets/ipad-left-img.jpg";
import IMAGE3 from "../../assets/ipad-right-img.jpg";
import styleCSS from "./ContentSec.module.css";

const ContentSec = () => {
  const image2Ref = useRef<HTMLImageElement | null>(null);
  const image3Ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const image2Element = image2Ref.current;
    const image3Element = image3Ref.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust these values as needed to control when the animations trigger
      const image2Trigger = 100;
      const image3Trigger = 200;

      if (image2Element && scrollPosition > image2Trigger) {
        image2Element.classList.add(styleCSS.slideUp, "image2");
      }

      if (image3Element && scrollPosition > image3Trigger) {
        image3Element.classList.add(styleCSS.slideUp, "image3");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styleCSS.contentConatin}>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        w="95%"
        justifyContent="center"
        maxWidth="1280px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Flex w={{ lg: "60%" }} pb={12} pos="relative" flexShrink={1}>
          <Box>
            <Image src={IMAGE1} w={["75%", "70%", "65%", "60%"]} />
          </Box>
          <Flex>
            <Image
              ref={image3Ref}
              className={styleCSS.animatedImage}
              pos="absolute"
              borderRadius="8px"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
              top="40%"
              left={["-90px", "-120px", "-150px", "-150px"]}
              w={["180px", "200px", "220px", "250px"]}
              h={["250px", "290px", "320px", "350px"]}
              src={IMAGE3}
            />
            <Image
              ref={image2Ref}
              className={styleCSS.animatedImage}
              top="9%"
              borderRadius="8px"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
              pos="absolute"
              left={["200px", "200px", "200px", "300px"]}
              w={["180px", "200px", "220px", "250px"]}
              h={["250px", "290px", "320px", "350px"]}
              src={IMAGE2}
            />
          </Flex>
        </Flex>
        <Flex p={{ base: "20px" }} w={{ lg: "30%" }} mt={12} flexDir={"column"}>
          <Heading color="#333333" as="h3" size="lg" fontWeight="100">
            Content Area
          </Heading>
          <Heading color="#66615b" as="h6" size="sm" mt={2} fontWeight="600">
            For Areas that Need More Space
          </Heading>
          <Text fontWeight={100} color="#9a9a9a" mt={8}>
            We took into consideration multiple use cases and came up with some
            specific elements for you. If you need elements such as tables,
            comments, description areas, tabs and many others, we've got you
            covered. They're beautiful and easy to use for the end user
            navigating your website.
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default ContentSec;
