import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import styleCSS from "./NavBar.module.css";
import { BsCart } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setIsNavBarVisible(false); // Scroll down, hide the navigation bar
      } else {
        setIsNavBarVisible(true); // Scroll up, show the navigation bar
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <HStack
      pos="fixed"
      top="0"
      left="0"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p={[
        "20px 20px 5px 20px",
        "20px 20px 5px 20px",
        "20px 80px 5px 80px",
        "20px 80px 5px 80px",
      ]}
      zIndex="10000"
      transition="0.6s"
      bgColor="rgba(0, 0, 0, 0.11)"
      className={`${styleCSS.navBar} `}
    >
      <div className={styleCSS.header}>
        <Flex>
          <Text className={styleCSS.logo}>Paper Kit 2 Pro</Text>
          {isSidebarOpen && (
            <IconButton
              aria-label="closeMenu"
              size="lg"
              mr="2"
              pos="absolute"
              top="12"
              left="160"
              color="white"
              icon={<AiOutlineClose />}
              display={["flex", "flex", "none", "none"]}
              onClick={handleSidebarToggle}
              variant="link"
              zIndex={1}
            />
          )}
        </Flex>

        <Flex
          className={`${styleCSS.navigationBar} ${
            isNavBarVisible ? styleCSS.visible : styleCSS.hidden
          }`}
          display={["none", "none", "flex", "flex"]}
        >
          <Menu>
            <MenuButton color="white" className={styleCSS.menuList}>
              Component <Icon as={AiFillCaretDown} ml="2" />
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="#">
                Link 1
              </MenuItem>
              <MenuItem as="a" href="#">
                Link 2
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton color="white" className={styleCSS.menuList}>
              Sections <Icon as={AiFillCaretDown} ml="2" />
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="#">
                Link 1
              </MenuItem>
              <MenuItem as="a" href="#">
                Link 2
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton color="white" className={styleCSS.menuList}>
              Examples <Icon as={AiFillCaretDown} ml="2" />
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="#">
                Link 1
              </MenuItem>
              <MenuItem as="a" href="#">
                Link 2
              </MenuItem>
            </MenuList>
          </Menu>
          <Link to={"/SignIn"}>
            <Button
              className={styleCSS.Buy1}
              borderRadius="25px"
              colorScheme="red"
              size="lg"
              fontSize="12px"
              mt={2}
            >
              {/* <Icon as={BsCart} mr="1" boxSize="16px" />*/} Sign In
            </Button>
          </Link>
        </Flex>
        <Flex
          bgColor={"white"}
          w="50vw"
          zIndex={20}
          h="100vh"
          top="0"
          left={isSidebarOpen ? "50vw" : "-60vw"}
          pos="fixed"
          boxShadow="0 0 20px 0 rgba(0,0,0,0.05)"
          overflow="auto"
          flexDir="column"
          transition="right 0.3s ease-in-out"
        >
          <Flex flexDir="column" p="25px 25px 0 25px">
            <Menu isLazy>
              <MenuButton className={styleCSS.menuList}>
                Component <Icon as={AiFillCaretDown} ml="2" />
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="#">
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#">
                  Link 2
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton className={styleCSS.menuList}>
                Sections <Icon as={AiFillCaretDown} ml="2" />
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="#">
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#">
                  Link 2
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton className={styleCSS.menuList}>
                Examples <Icon as={AiFillCaretDown} ml="2" />
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="#">
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#">
                  Link 2
                </MenuItem>
              </MenuList>
            </Menu>
            <Button
              className={styleCSS.Buy1}
              borderRadius="25px"
              colorScheme="red"
              size="lg"
              fontSize="12px"
            >
              <Icon as={BsCart} mr="1" boxSize="16px" /> Buy Now
            </Button>
          </Flex>
        </Flex>
      </div>

      {!isSidebarOpen && (
        <IconButton
          color="#ffffff"
          aria-label="openMenu"
          size="lg"
          mr="2"
          icon={<GiHamburgerMenu />}
          onClick={handleSidebarToggle}
          display={["flex", "flex", "none", "none"]}
          variant="link"
          pos="sticky"
          top="5"
          left="400"
        />
      )}
      <Outlet />
    </HStack>
  );
};

export default NavBar;
