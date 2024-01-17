import React from 'react'
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
  
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson,BsLinkedin } from 'react-icons/bs';
  import Lottie from "lottie-react";
  import connect from "../assets/Chatting_01.json"










  
const Contact = () => {
 

  return (
   <> 
   

    <Container  bg="#0C090A" maxW="full" mt={0} centerContent overflow="hidden " id="Contact" zIndex={1} pos={"relative"}>
         <Text textAlign="center" fontSize="4xl" fontWeight="bold" mb={1} color="#0bf0c1">
        Contact Me
        </Text>
      <Flex>
        <Box
          bg="#0C090A"
          color="white"
          border="1px solid #0bf0c1"
          borderRadius="xl"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact Details</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                  Connecting with new people is always exciting, let's connect!
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <a href={"tel: 8368297680"}>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #0bf0c1' }}
                        leftIcon={<MdPhone color="#0bf0c1" size="20px" />}>
                        +91-8368297680
                      </Button>
                      </a>
                      <a href={"mailto: shekharjoshi64320@gmail.com"}>
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #0bf0c1' }}
                        leftIcon={<MdEmail color="#0bf0c1" size="20px" />}>
                       shekharjoshi64320@gmail.com 
                      </Button>
                      </a>
                    <a href="https://goo.gl/maps/gJqH2odGAhxRZxeL7" target="_blank" > <Button
                      
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #0bf0c1' }}
                        leftIcon={<MdLocationOn color="#0bf0c1" size="20px" />}>
                        Dehradun, India
                      </Button></a> 
                    </VStack>
                  </Box>
                  <HStack
                    
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <a href="https://www.linkedin.com/in/shekharjoshi07/">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0bf0c1' }}
                      icon={<BsLinkedin size="28px" />}
                    /></a>

                    <a href="https://github.com/Shekhar-Joshi07">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0bf0c1' }}
                      icon={<BsGithub size="28px" />}
                    /></a>
              
                  </HStack>
                </Box>
              </WrapItem>

              {/* desktop view */}

              <WrapItem display={{base:"none", md:"none", lg:"block"}}>
                <Box  borderRadius="lg">
                  <Box   w={"250px"} color="#0B0E3F">
                    {/* <VStack spacing={5}> */}
                      <Lottie animationData={connect} style={{width:"250px"}} />
                  
                  </Box>
                </Box>
              </WrapItem>

              {/* medium view */}
              <WrapItem display={{base:"none", md:"block", lg:"none"}}>
                <Box  borderRadius="lg">
                  <Box  ml={{md:"130%"}} mt={{md:"-300px"}}  w={"250px"} color="#0B0E3F">
                    {/* <VStack spacing={5}> */}
                      <Lottie animationData={connect} style={{width:"250px"}} />
                  
                  </Box>
                </Box>
              </WrapItem>

              {/* mobile view */}

              <WrapItem display={{md:"none",lg:"none"}}>
                <Box  borderRadius="lg">
                  <Box  ml={{base:"16%"}} mt={{base:"-30px"}}  w="250px" color="#0B0E3F">
                    {/* <VStack spacing={5}> */}
                      <Lottie animationData={connect} style={{width:"250px"}} />
                  
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    
    </Container>
    </>
  )
}

export default Contact