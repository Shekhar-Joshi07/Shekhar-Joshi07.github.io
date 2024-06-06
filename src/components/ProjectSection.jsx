import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import thehindu from "../assets/Hindu.png";
import medicinestore from "../assets/medicine.png";
import shopease from "../assets/shopease.png";
import youtube from "../assets/youtube.png";

// new projects
import getintouch from "../assets/GetInTouch Gif.gif";
import flopkart from "../assets/FLopkart.png";
import thinkmania from "../assets/Thinkmania.png";
import takeatrip from "../assets/takeatrip.png";
import weatherapp from "../assets/weatherapp.png";
import pca from "../assets/pca.png";
import gms from "../assets/gms.png";
import { BsGithub, BsGlobe } from "react-icons/bs";

//tech stacks icons
import { FaHtml5, FaReact, FaNodeJs, FaSass, FaBootstrap } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiChakraui,
  SiAuth0,
  SiRedux,
  SiMui,
  SiFramer,
  SiElectron,
  SiTauri,
} from "react-icons/si";

const ProjectSection = () => {
  return (
    <Box p="25px" bg="#22252c" color="white" id="Projects">
      <Text
        zIndex={1}
        position="relative"
        textAlign="center"
        fontSize="4xl"
        fontWeight="bold"
        mb={7}
        mt={5}
        color="#0bf0c1"
      >
        Projects
      </Text>

      <Grid
        zIndex={1}
        position="relative"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={{ base: 14, md: 10, lg: 10 }}
        maxW={{ md: "5xl", lg: "5xl" }}
        m="auto"
      >
        <GridItem
          zIndex={1}
          position="relative"
          transition="all .4s ease-in-out"
          _hover={{ transform: "scale(.94)" }}
        >
          <Box zIndex={1} position="relative">
            <Image src={pca} alt="Project 1" zIndex={1} position="relative" />
            <Heading
              color="#0bf0c1"
              as="h3"
              size="md"
              mt={2}
              zIndex={1}
              position="relative"
            >
              PCA Toolkit (IUCN)
            </Heading>
            <br />
            <Text fontSize="sm" zIndex={1} position="relative">
              Developed offline and online applications for the International
              Union for Conservation of Nature (IUCN), providing tools and case
              studies for managing protected areas. Protected areas are crucial
              for conservation, supporting endangered species, genetic
              diversity, and ecosystem services. This project helps enhance
              governance and management of these areas. Converted a PDF toolkit
              into an offline React app with advanced search functionality and
              delivered a website and desktop apps for Windows and macOS. <br />
              <a style={{color:"yellow"}} hyeref="http://https://downloadpcatoolkit.onebigbit.com/">Download apps 🔗</a>
            </Text>
            <Heading
              color="#0bf0c1"
              as="h3"
              size="md"
              mt={2}
              zIndex={1}
              position="relative"
            >
              Tech Stack
            </Heading>
            <HStack
              mt={3}
              h="fit-content"
              spacing={7}
              zIndex={1}
              position="relative"
            >
              <FaReact size={30} color="rgb(0, 215, 254)" /> |{" "}
              <SiTauri size={30}/> | <FaBootstrap size={30} color="white"/> | <SiFramer size={30}/> |  <SiChakraui size={30} color="rgb(77, 181, 171)" />|
            </HStack>
            {/* <Text  as="code">
              <FaReact  color="red"/> | TypeScript | Chakra Ui | Node.js | Express.js | MongoDB
            </Text> */}
            <Box d="flex" justifyContent="space-between" mt={4}>
              <Button
                as="a"
                color="black"
                href="#"
                // target=""
                variantColor="teal"
                mr={6}
              >
                <BsGithub style={{ marginRight: "8px" }} size={25} /> GitHub
              </Button>
              <Button
                as="a"
                color="black"
                href="https://pcatoolkit.onebigbit.com/"
                target="_blank"
                variantColor="teal"
              >
                <BsGlobe style={{ marginRight: "8px" }} size={25} /> See Live
              </Button>
              
            </Box>
          </Box>
        </GridItem>

        <GridItem
          zIndex={1}
          position="relative"
          transition="all .4s ease-in-out"
          _hover={{ transform: "scale(.94)" }}
        >
          <Box zIndex={1} position="relative">
            <Image src={gms} alt="Project 1" zIndex={1} position="relative" />
            <Heading
              color="#0bf0c1"
              as="h3"
              size="md"
              mt={2}
              zIndex={1}
              position="relative"
            >
              Rendezvous
            </Heading>
            <br />
            <Text fontSize="sm" zIndex={1} position="relative">
              A Complete Software Implementation for a Qatar based company. A
              game parlor project that encompasses end-to-end solutions from
              employee management and inventory management to seamless game bookings.
            </Text>
            <Heading
              color="#0bf0c1"
              as="h3"
              size="md"
              mt={2}
              zIndex={1}
              position="relative"
            >
              Tech Stack
            </Heading>
            <HStack
              mt={3}
              h="fit-content"
              spacing={7}
              zIndex={1}
              position="relative"
            >
              <FaReact size={30} color="rgb(0, 215, 254)" /> |{" "}
              <SiRedux size={30} color="rgb(118, 74, 187)" /> |{" "}
              <FaSass size={30} color="rgb(199,100,148)" /> |
              <FaNodeJs size={30} color=" rgb(139, 199, 75)" />|
              <SiExpress size={30} color="rgb(129, 129, 129)" />|
              <SiMongodb size={30} color=" rgb(73, 156, 74)" />
            </HStack>
            {/* <Text  as="code">
              <FaReact  color="red"/> | TypeScript | Chakra Ui | Node.js | Express.js | MongoDB
            </Text> */}
            <Box d="flex" justifyContent="space-between" mt={4}>
              <Button
                as="a"
                color="black"
                href="#"
                // target=""
                variantColor="teal"
                mr={6}
              >
                <BsGithub style={{ marginRight: "8px" }} size={25} /> GitHub
              </Button>
              <Button
                as="a"
                color="black"
                href="https://rendezvous-uat.mhsinfotech.qa/"
                target="_blank"
                variantColor="teal"
              >
                <BsGlobe style={{ marginRight: "8px" }} size={25} /> See Live
              </Button>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          zIndex={1}
          position="relative"
          transition="all .4s ease-in-out"
          _hover={{ transform: "scale(.94)" }}
        >
          <Box zIndex={1} position="relative">
            <Image
              src={thinkmania}
              alt="Project 1"
              zIndex={1}
              position="relative"
            />
            <Heading
              color="#0bf0c1"
              as="h3"
              size="md"
              mt={2}
              zIndex={1}
              position="relative"
            >
              Think-Mania
            </Heading>
            <br />
            <Text fontSize="sm" zIndex={1} position="relative">
              Think Mania is a TypeScript React web application game. It is a
              movie guessing game where players must identify movies based on a
              series of emojis.
            </Text>
            <Heading
              color="#0bf0c1"
              as="h3"
              size="md"
              mt={2}
              zIndex={1}
              position="relative"
            >
              Tech Stack
            </Heading>
            <HStack
              mt={3}
              h="fit-content"
              spacing={7}
              zIndex={1}
              position="relative"
            >
              <FaReact size={30} color="rgb(0, 215, 254)" />|
              <SiTypescript size={28} color="rgb(0, 122, 203)" />|
              <SiChakraui size={30} color="rgb(77, 181, 171)" />|
              <FaNodeJs size={30} color=" rgb(139, 199, 75)" />|
              <SiExpress size={30} color="rgb(129, 129, 129)" />|
              <SiMongodb size={30} color=" rgb(73, 156, 74)" />
            </HStack>
            {/* <Text  as="code">
              <FaReact  color="red"/> | TypeScript | Chakra Ui | Node.js | Express.js | MongoDB
            </Text> */}
            <Box d="flex" justifyContent="space-between" mt={4}>
              <Button
                as="a"
                color="black"
                href="https://github.com/G-Dharani-raj/think-mania"
                target="_blank"
                variantColor="teal"
                mr={6}
              >
                <BsGithub style={{ marginRight: "8px" }} size={25} /> GitHub
              </Button>
              <Button
                as="a"
                color="black"
                href="https://think-mania.vercel.app/"
                target="_blank"
                variantColor="teal"
              >
                <BsGlobe style={{ marginRight: "8px" }} size={25} /> See Live
              </Button>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          zIndex={1}
          position="relative"
          transition="all .4s ease-in-out"
          _hover={{ transform: "scale(.94)" }}
        >
          <Box zIndex={1} position="relative">
            <Image
              src={getintouch}
              alt="Project 1"
              zIndex={1}
              position="relative"
            />
            <Heading
              color="#0bf0c1"
              as="h3"
              size="md"
              mt={2}
              zIndex={1}
              position="relative"
            >
              GetInTouch
            </Heading>
            <br />
            <Text fontSize="sm" zIndex={1} position="relative">
              GetInTouch is a social media web application built with the MERN
              stack, which enhances the user experience with a seamless user
              interface
            </Text>
            <Heading
              color="#0bf0c1"
              as="h3"
              size="md"
              mt={2}
              zIndex={1}
              position="relative"
            >
              Tech Stack
            </Heading>
            <HStack
              mt={3}
              h="fit-content"
              spacing={7}
              zIndex={1}
              position="relative"
            >
              <FaReact size={30} color="rgb(0, 215, 254)" /> |{" "}
              <SiRedux size={30} color="rgb(118, 74, 187)" /> |{" "}
              <SiMui size={30} color="rgb(41, 181, 245)" />|
              <FaNodeJs size={30} color=" rgb(139, 199, 75)" />|
              <SiExpress size={30} color="rgb(129, 129, 129)" />|
              <SiMongodb size={30} color=" rgb(73, 156, 74)" />
            </HStack>
            {/* <Text  as="code">
              <FaReact  color="red"/> | TypeScript | Chakra Ui | Node.js | Express.js | MongoDB
            </Text> */}
            <Box d="flex" justifyContent="space-between" mt={4}>
              <Button
                as="a"
                color="black"
                href="https://github.com/Shekhar-Joshi07/Get-In-Touch"
                target="_blank"
                variantColor="teal"
                mr={6}
              >
                <BsGithub style={{ marginRight: "8px" }} size={25} /> GitHub
              </Button>
              <Button
                as="a"
                color="black"
                href="https://geti-in-touch.vercel.app/"
                target="_blank"
                variantColor="teal"
              >
                <BsGlobe style={{ marginRight: "8px" }} size={25} /> See Live
              </Button>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          transition="all .4s ease-in-out"
          _hover={{ transform: "scale(.94)" }}
        >
          <Box>
            <Image src={flopkart} alt="Project 2" />
            <Heading color="#0bf0c1" as="h3" size="md" mt={2}>
              Flopkart
            </Heading>
            <br />
            <Text fontSize="sm">
              A Flopkart website is an e-commerce platform that replicates the
              functionalities and features of the popular Indian online
              marketplace, Flipkart.
            </Text>
            <Heading color="#0bf0c1" as="h3" size="md" mt={2}>
              Tech Stack
            </Heading>
            <HStack mt={3} h="fit-content" spacing={7}>
              <FaReact size={30} color="rgb(0, 215, 254)" />|
              <SiRedux size={30} color="rgb(118, 74, 187)" />|
              <SiChakraui size={30} color="rgb(77, 181, 171)" />|
              <FaNodeJs size={30} color="rgb(139, 199, 75)" />|
              <SiExpress size={30} color="rgb(129, 129, 129)" />|
              <SiMongodb size={30} color="rgb(73, 156, 74)" />
            </HStack>
            {/* <Text as="code">
              
              React | Redux | Chakra Ui | Node.js | Express.js | MongoDB
            </Text> */}
            <Box d="flex" justifyContent="space-between" mt={4}>
              <Button
                as="a"
                color="black"
                href="https://github.com/dhiraj19999/Flopkart"
                target="_blank"
                variantColor="teal"
                mr={6}
              >
                <BsGithub style={{ marginRight: "8px" }} size={25} /> GitHub
              </Button>
              <Button
                as="a"
                color="black"
                href="https://flopcart-nine.vercel.app/"
                target="_blank"
                variantColor="teal"
              >
                <BsGlobe style={{ marginRight: "8px" }} size={25} /> See Live
              </Button>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          transition="all .4s ease-in-out"
          _hover={{ transform: "scale(.94)" }}
        >
          <Box>
            <Image src={takeatrip} alt="Project 1" />
            <Heading color="#0bf0c1" as="h3" size="md" mt={2}>
              Take A Trip
            </Heading>
            <br />
            <Text fontSize="sm">
              Take a trip is hotel or trip booking website. It's a modern and
              user-friendly platform that offers a seamless way to search and
              book hotels, flights, car rentals, and activities.
            </Text>
            <Heading color="#0bf0c1" as="h3" size="md" mt={2}>
              Tech Stack
            </Heading>
            <HStack mt={3} h="fit-content" spacing={7}>
              <FaReact size={30} color="rgb(0, 215, 254)" />|
              <SiChakraui size={30} color="rgb(77, 181, 171)" />|
              <SiJavascript size={30} color="rgb(254, 213, 0)" />|
              <SiAuth0 size={30} color="#ffff" />
            </HStack>
            {/* <Text as="code">React | Chakra Ui | JavaScript | Auth0</Text> */}
            <Box d="flex" justifyContent="space-between" mt={4}>
              <Button
                as="a"
                color="black"
                href="https://github.com/Shekhar-Joshi07/Take-A-Trip"
                target="_blank"
                variantColor="teal"
                mr={6}
              >
                <BsGithub style={{ marginRight: "8px" }} size={25} /> GitHub
              </Button>
              <Button
                as="a"
                color="black"
                href="https://take-a-trip-now.netlify.app/"
                target="_blank"
                variantColor="teal"
              >
                <BsGlobe style={{ marginRight: "8px" }} size={25} /> See Live
              </Button>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          transition="all .4s ease-in-out"
          _hover={{ transform: "scale(.94)" }}
        >
          <Box>
            <Image src={shopease} alt="Project 3" />
            <Heading color="#0bf0c1" as="h3" size="md" mt={2}>
              Shopease
            </Heading>
            <br />
            <Text fontSize="sm">
              Shopease is an ecommerce online website for the best products of
              all categories for the consumer. User can buy products at best
              deals and offers.
            </Text>
            <Heading color="#0bf0c1" as="h3" size="md" mt={2}>
              Tech Stack
            </Heading>
            <HStack mt={3} h="fit-content" spacing={7}>
              <FaReact size={30} color="rgb(0, 215, 254)" />|
              <SiChakraui size={30} color="rgb(77, 181, 171)" />|
              <DiCss3 size={37} color=" rgb(2, 119, 188)" />|
              <SiJavascript size={30} color="rgb(254, 213, 0)" />
            </HStack>
            {/* <Text as="code"> React | Chakra Ui | CSS | JavaScript</Text> */}
            <Box d="flex" justifyContent="space-between" mt={4}>
              <Button
                as="a"
                color="black"
                href="https://github.com/Shekhar-Joshi07/Shopease"
                target="_blank"
                variantColor="teal"
                mr={6}
              >
                <BsGithub style={{ marginRight: "8px" }} size={25} /> GitHub
              </Button>
              <Button
                as="a"
                color="black"
                href="https://shopease-net.netlify.app/"
                target="_blank"
                variantColor="teal"
              >
                <BsGlobe style={{ marginRight: "8px" }} size={25} /> See Live
              </Button>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          transition="all .4s ease-in-out"
          _hover={{ transform: "scale(.94)" }}
        >
          <Box>
            <Image src={weatherapp} alt="Project 3" />
            <Heading color="#0bf0c1" as="h3" size="md" mt={2}>
              Weather App
            </Heading>
            <br />
            <Text fontSize="sm">
              A weather app made with HTML, CSS, and JavaScript, and with the
              help of the OpenWeather API, is a web-based application that
              provides real-time weather information for a specific location.
            </Text>
            <Heading color="#0bf0c1" as="h3" size="md" mt={2}>
              Tech Stack
            </Heading>
            <HStack mt={3} h="fit-content" spacing={7}>
              <FaHtml5 size={35} color="rgb(227, 77, 38)" />|
              <DiCss3 size={37} color="rgb(2, 119, 188)" />|
              <SiJavascript size={30} color="rgb(254, 213, 0)" />
            </HStack>
            {/* <Text as="code"> HTML | CSS | JavaScript</Text>  */}
            <Box d="flex" justifyContent="space-between" mt={4}>
              <Button
                as="a"
                color="black"
                href="https://github.com/Shekhar-Joshi07/weather_app"
                target="_blank"
                variantColor="teal"
                mr={6}
              >
                <BsGithub style={{ marginRight: "8px" }} size={25} /> GitHub
              </Button>
              <Button
                as="a"
                color="black"
                href="https://weatherapp-shekhar.netlify.app/"
                target="_blank"
                variantColor="teal"
              >
                <BsGlobe style={{ marginRight: "8px" }} size={25} /> See Live
              </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProjectSection;
