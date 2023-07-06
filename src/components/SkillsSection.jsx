import { Box, Text, Image, useColorModeValue } from "@chakra-ui/react";

function SkillsSection() {
  const bg = useColorModeValue("#22252c");
  const color = useColorModeValue("white");

  return (
    <Box backgroundColor="#22252c" pb="45px" id="Skills" >
      <Text
        zIndex={1}
        position="relative"
        textAlign="center"
        fontSize="4xl"
        fontWeight="bold"
        mb={-1}
        color="#0bf0c1"
      >
        Skills
      </Text>
      <Box
        zIndex={1}
        position="relative"
        m="auto"
        display="grid"
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
        ]}
        pt={9}
        px={{ base: 5, md: 7, lg: 7 }}
        maxW="5xl"
        margin={"auto"}
        rowGap={{ base: 10, md: 10, lg: 10 }}
        columnGap={{ base: 5, md: 10, lg: 10 }}
      >
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          mt={3}
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="html"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/color/512/html-5.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            HTML
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          marginTop={"12px"}
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="css"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/color/512/css3.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            CSS
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="js"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/fluency/512/javascript.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            JavaScript
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="react"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            b
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            React Js
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="redux"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/color/512/redux.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            bo
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            Redux
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="node"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/fluency/512/node-js.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            b
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            Node Js
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="ex"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://amansingh456.github.io/static/media/express.39a0f4c3d981885c64f8.png"
          />
          <Text
            letterSpacing="widest"
            bor
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            Express Js
          </Text>
        </Box>

        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="mongo"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/color/512/mongodb.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            b
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            MongoDb
          </Text>
        </Box>

        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="mongoose"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/color/512/mongoose.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            Mongoose
          </Text>
        </Box>

        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="ts"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/fluency/512/typescript--v2.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            TypeScript
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="chakra"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/color/512/chakra-ui.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            Chakra UI
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="mui"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/color/512/material-ui.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            Material UI
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="git"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://amansingh456.github.io/static/media/github.3b9e32903aa89111875d.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            GitHub
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="vs"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/fluency/512/visual-studio-code-2019.png"
          />
          <Text
            zIndex={1}
            position="relative"
            letterSpacing="widest"
           
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            VS Code
          </Text>
        </Box>
        <Box
          zIndex={1}
          position="relative"
          m="auto"
          w={{ base: "128px", md: "200px", lg: "250px" }}
          h={{ base: "110px", md: "140px", lg: "140px" }}
          className="npm"
          textAlign="center"
          rounded="lg"
          p={4}
          bg={bg}
          transition="all .5s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
        >
          <Image
            zIndex={1}
            position="relative"
            m={"auto"}
            w={{ base: "55px", md: "90px", lg: "90px" }}
            src="https://img.icons8.com/color/512/npm.png"
          />
          <Text
            zIndex={1}
            position="relative"
            
            letterSpacing="widest"
           
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            mt={{ base: 1, md: 0, lg: 0 }}
            
            color={color}
          >
            NPM
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default SkillsSection;
