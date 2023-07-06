import React, { useEffect } from "react";
import PDF from "../assets/Chandra-Shekhar-Joshi-Resume.pdf";
import animation from "../assets/soft_dev.json";
import Lottie from "lottie-react";
import { gsap } from "gsap";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";

const Hero = () => {
  useEffect(() => {

    gsap.to(".hero-container", { 
      duration: 2,
      backgroundImage:"linear-gradient(#18C88B, #9198e5)",
    });
    

    gsap.from(".hero-heading", {
      rotation:30,
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 0.5,
      skewX: "30deg",
      ease: "power2.out",
    });

    gsap.from(".hero-text", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });

    gsap.from(".hero-button", {
      duration: 2, 
      rotation: 270, 
      scale: 0.5, 
      transformOrigin: "50px 20px"
    });

    gsap.from(".hero-image", {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });
  }, []);

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1FWA-Z8HYEF-3y5rJrm-ai24JRgn0s-GK/view?usp=sharing",
      "_blank"
    );
  };

  const hand = (
    <Image
      mb={2}
      w={"60px"}
      h={"55px"}
      src="https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif"
    />
  );

  return (
    <Container
      
      maxW="100%"
      id="Home"
      zIndex={1}
      position="relative"
      className="hero-container"
    >
      <Stack
        maxW={"6xl"}
        m="auto"
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 13, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            className="hero-heading"
          >
            <Text
              display="flex"
              mb={{ base: -9, md: -10, lg: -12 }}
              justifyContent="start"
              alignItems="center"
              fontSize="4xl"
              as={"i"}
              color={"white"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              Hello there {hand}
            </Text>{" "}
            <br />
            <Text
              as={"span"}
              color={"white"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              I'm Chandra Shekhar Joshi
            </Text>
            <br />
            <Text
              as="em"
              color={"#22252c"}
              fontSize={{ base: "2xl", sm: "2xl", lg: "3xl" }}
              className="hero-text"
            >
              Full Stack Web Developer
            </Text>
          </Heading>
          <Text color={"white"} className="hero-text">
            Proficient in building user-friendly ready-to-use web applications
            with MERN Stack that come alive and work for you!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Link
              href={PDF}
              download={"fp06_303_Chandra-Shekhar-Joshi-Resume"}
            >
              <Button
                onClick={handleClick}
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                className="hero-button"
              >
                Download Resume
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"380px"}
            rounded={"2xl"}
            width={"390px"}
            overflow={"hidden"}
            className="hero-image"
          >
            <Lottie animationData={animation} />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
