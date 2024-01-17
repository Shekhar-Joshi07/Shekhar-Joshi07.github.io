import { Box, Image, Text } from "@chakra-ui/react";
import profile from "../assets/profileImageUpdated.png";

const About = () => {
  return (
    <Box id="About" backgroundColor="#22252C" p="40px"   >
      <Text
        textAlign="center"
        fontSize="4xl"
        fontWeight="bold"
        mb={{ base: 6 }}
        color="#0bf0c1"
        zIndex={1}
        position="relative"
  
      >
        About Me
      </Text>

      <Box
        color="white"
        display="flex"
        gap="30px"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Image
          src={profile}
          border="4px solid #0bf0c1"
          borderRadius="100%"
          w={{ base: "65%", md: "20%" }}
          h={{ base: "20%", md: "10%" }}
          mr={{ base: 0, md: 4 }}
          mb={{ base: 4, md: 0 }}
          zIndex={1}
          position="relative"
        />
        <Box>
          <Text
            zIndex={1}
            position="relative"
            textAlign={{ base: "start", md: "start", lg: "start" }}
            lineHeight={{ base: "talll", md: "taller", lg: "taller" }}
            fontSize="lg"
            mt={4}
          >
            A passionate Full Stack Developer skilled in MERN stack.
            Efficient in solving problems and developing websites using
            JavaScript, React, Node.js, Express.js, and MongoDB. Always eager to
            adapt and take on new challenges and learnings to leverage and hone
            skills. Always ready for an better opportunity to deploy skills and be a
            part of the success of an organization. Currently working full-time as a Full Stack Developer.

          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
