import React from "react";
import { Box, Text,} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <Box color="white" bg="#22252c"   >
    <Text
      zIndex={1}
      position="relative"
     textAlign="center"
     fontSize="4xl"
     fontWeight="bold"
     mb={4}
     pt={"5%"}
     color="#0bf0c1"
    >
    GitHub Calendar & Stats
    </Text>
    
    <Box maxW={{ base: "2xl", md: "4xl", lg: "5xl" }} m="auto" mt={14} px="9"  color="white"   zIndex={1}
          position="relative">
      <GitHubCalendar
        style={{ margin: "auto",zIndex:"1", position:"relative" }}
        username="Shekhar-Joshi07"
        blockSize={20}
      ></GitHubCalendar>
      <br />
    
      <Box
        zIndex={1}
        position="relative"
        maxH={"300px"}
        pt="25px"
        style={{
          display: "flex",
    
          gap: "30px",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
    
        }}
      >
        <img
           zIndex={1}
           position="relative"
          width={{sm:"90%",md:"70%",lg:"50%"}}
          src="https://github-readme-stats.vercel.app/api?username=Shekhar-Joshi07&show_icons=true&hide_border=true"
          alt=""
        />
      </Box>
      <Box
       zIndex={1}
       position="relative"
      pt="25px"
      pb={{base:"25px",md:"30px",lg:"40px"}}
        maxH={"300px"}
        style={{
          display: "flex",
          gap: "30px",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
    
        }}
      >
        <img
           zIndex={1}
           position="relative"
          width={{sm:"90%",md:"70%",lg:"50%"}}
          src="https://github-readme-streak-stats.herokuapp.com/?user=Shekhar-Joshi07&hide_border=true"
          alt=""
        />
      </Box>
    </Box>
    </Box>
    );
    };
    

export default Stats;



