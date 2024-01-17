import { Box, Image, Text } from "@chakra-ui/react";
import OBB from "../assets/obbLOGO.png";

const Experience = () => {
  return (
    <Box id="Experience" backgroundColor="#22252C" p="40px"   >
      <Text
        textAlign="center"
        fontSize="4xl"
        fontWeight="bold"
        mb={{ base: 6 }}
        color="#0bf0c1"
        zIndex={1}
        position="relative"
  
      >
        Experience
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
          src={OBB}
          border="4px solid #0bf0c1"
          borderRadius="100%"
          backgroundColor="#ffffff"
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
            mr={{ base: "0rem", md: "1rem", lg: "3rem" }}
          >
           <b> Full Stack Developer</b> <br />
          <a href="https://onebigbit.com/" target="blank"> <b>One Big Bit Technologies Pvt.Ltd.</b></a>  <br />
           <i> 12 June 2024 - Present </i><br />
            Role: <b>software engineer</b> <br />
            Respnsibilites: <br />
            • Actively contribute as a Full Stack Developer in a
            dynamic software development company. <br />
            •Collaborate with a talented team of developers <br />
           •Assist in the design and implementation of
           front-end and back-end features
          </Text>
        </Box>
      </Box>
        
        <br />
        <br />
       
      <Box

        color="white"
        display="flex"
        gap="30px"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
   
        <Image
          src="https://pbs.twimg.com/profile_images/1516396239956623370/E4COoQHn_400x400.jpg"
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
           <b>Full Stack Web Development</b>  <br />
           <a href="https://masaischool.com/" target="blank"><b>Masai School</b></a>  <br />
            <i>16 April 2022 - June 2023</i><br />
             Masai School is an outcome-driven career school that serves as a military-style coding institute.<br />
             I embarked on a transformative journey in the realm of full-stack web development,<br />
             choosing to enroll in an intensive program that would not only equip <br />
             me with technical skills but also cultivate a holistic approach to problem-solving <br />
             My time at Masai School has been transformative, shaping me into a <br />
             well-rounded and skilled full-stack web developer. Armed with proficiency <br />
            in the MERN stack, DSA expertise, and a holistic approach to problem-solving, <br />
             I am poised to contribute meaningfully to the dynamic and ever-evolving landscape <br />
             of web development.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
