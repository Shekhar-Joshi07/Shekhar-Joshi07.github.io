import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import App from "../App";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgColor="#22252c"
    >
      {loading && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 366 }}
          transition={{
            duration: 1,
            ease: "anticipate",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* Your S letter component */}
            <Box
              width="100px"
              height="100px"
              borderRadius="50%"
              bg="linear-gradient(#18C88B, #9198e5);"
            />
            <Text
              fontFamily="cursive"
              color="antiquewhite"
              textAlign="center"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize="5xl"
              
            >
              S
            </Text>
          </motion.div>
        </motion.div>
      )}
    </Box>
  );
};

export default Loader;
