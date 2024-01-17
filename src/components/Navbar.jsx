import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import "./navbar.css"
import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../assets/myLOGO.png";
import PDF from "../assets/Chandra-Shekhar-Joshi-Resume.pdf";

const Links = [
  { title: "Home", id: "Home" },
  { title: "About", id: "About" },
  { title: "Experience", id: "Experience" },
  { title: "Skills", id: "Skills" },
  { title: "Projects", id: "Projects" },
  { title: "Contact", id: "Contact" },
];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: "white",
//       color: "black"
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1FWA-Z8HYEF-3y5rJrm-ai24JRgn0s-GK/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <Box
        borderBottom="1px solid gray"
        zIndex={999}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={5}
        py={1}
        bgColor="#0C090A"
        color={"White"}
        fontWeight="600"
        pos={"sticky"}
        top={"0"}
       
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"center"}
          //   border={"1px solid red"}
        >
          <IconButton
            size={"sm"}
            icon={
              isOpen ? (
                <CloseIcon color="red.500" />
              ) : (
                <HamburgerIcon color="green.500" />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            position={"center"}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            // border={"1px solid blue"}
            width={"full"}
            display="flex"
            justifyContent={[
              "center",
              "center",
              "space-between",
              "space-between",
              "space-between",
              "space-between",
            ]}
          >
            <Box >
              <Image
                mr={{ base: "19px" }}
                src={Logo}
                alt="logo"
                width={{ base: "250px", md: "230px", lg: "250px" }}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: " flex" }}
              style={{ cursor: "pointer" }}
            >
              {Links.map((link, index) => (
                <Link
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  id="forCursor"
                  to={link.id}
                  key={index}
                  className="nav-link"
                >
                  {link.title}
                  <span
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0",
                    height: "5px",
                    backgroundColor: "#00FFFF",
                    transition: "width 0.5s ease",
                  }}
                ></span>
                </Link>
              ))}
              <a href={PDF} download={"fp06_303_Chandra-Shekhar-Joshi-Resume"}>
                <Button onClick={handleClick} variant="outline" _hover={{color:"#22252c", backgroundColor:"#ffff"}}>
                  {" "}
                  Resume
                </Button>
              </a>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={5}>
              {Links.map((link, index) => (
                <Link
                  spy={true}
                  smooth={true}
                  offset={-330}
                  duration={500}
                  to={link.id}
                  key={index}
                  onClick={onClose}
                >
                  {link.title}
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1FWA-Z8HYEF-3y5rJrm-ai24JRgn0s-GK/view?usp=sharing"
                target="_blank" rel="noreferrer" 
              >
                Resume
              </a>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
