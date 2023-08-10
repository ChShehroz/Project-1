import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import img1 from "../../assets/twitter.png";
import img2 from "../../assets/422.png";
import img3 from "../../assets/discover.png";
import img4 from "../../assets/login-page.png";
import img5 from "../../assets/blog-post.png";
import img6 from "../../assets/settings.png";
import img7 from "../../assets/register.png";
import img8 from "../../assets/profile.png";
import img9 from "../../assets/product.png";
import img10 from "../../assets/contact-us.png";
import img11 from "../../assets/search.png";
import img12 from "../../assets/404.png";
import img13 from "../../assets/add-product.png";
import img14 from "../../assets/about-us.png";
import img15 from "../../assets/blog-posts.png";
import img16 from "../../assets/500.png";
import img17 from "../../assets/landing.png";
import img18 from "../../assets/ecommerce.png";
import img19 from "../../assets/more-brown.png";
import styleCSS from "./Pages.module.css";

const Pages = () => {
  return (
    <div className={styleCSS.pagesCont}>
      <Box maxWidth={["700px"]} marginRight={"auto"} marginLeft={"auto"}>
        <Flex>
          <Box marginBottom="60px">
            <Heading
              m="0 15px"
              color="#FFFFFF"
              as="h3"
              fontSize="30px"
              textAlign="center"
              fontWeight="200"
            >
              Ready to use Page Examples
            </Heading>

            <Text color="#FFFFFFB2" mt={4} textAlign="center">
              Paper Kit 2 Pro comes with a large number of example pages, that
              give you the option to quickly setup the basic flows for your
              website. From registering to building your profile or setting a
              blog, we've got you
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex
        gap={7}
        m={["10px 20px", "10px 30px", "10px 40px", "10px 60px"]}
        flexDir={["column", "column", "row", "row"]}
      >
        <Flex flexDir={["column"]} w={{ lg: "80%" }}>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading mb={4} color="#66615b" fontWeight="700" fontSize="13px">
                Twitter Redesign
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img1} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Error Page (422)
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img2} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Discover Page
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img3} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Login Page
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img4} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Blog Post
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img5} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                User Settings
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img6} />
            </Link>
          </Flex>
        </Flex>
        <Flex flexDir={["column"]} w={{ lg: "80%" }}>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading mb={4} color="#66615b" fontWeight="700" fontSize="13px">
                Register Page
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img7} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Public Profile
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img8} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Product Page
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img9} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Contact Us
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img10} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Search Page
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img11} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Error Page (400)
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img12} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Add Product Page
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img13} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                About Us
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img14} />
            </Link>
          </Flex>
        </Flex>
        <Flex flexDir={["column"]} w={{ lg: "80%" }}>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading mb={4} color="#66615b" fontWeight="700" fontSize="13px">
                Blog Posts
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img15} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Error Page (500)
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img16} />
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Landing Page
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img17} />
            </Link>
          </Flex>
          <Flex mb={10} flexDir="column" alignItems="center">
            <Box>
              <Heading
                mt={12}
                mb={4}
                color="#66615b"
                fontWeight="700"
                fontSize="13px"
              >
                Ecommerce Page
              </Heading>
            </Box>
            <Link>
              <Image borderRadius="12px" src={img18} />
            </Link>
          </Flex>
          <Flex mb={10} flexDir="column" alignItems="center">
            <Link>
              <Image borderRadius="12px" src={img19} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Pages;
