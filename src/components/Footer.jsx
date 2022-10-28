import { Flex, Text, Box, Image } from "@chakra-ui/react";
import React from "react";
import logo from '../assets/img/ifg.svg'
import './footer.css'



function Footer() {
  
  return (
    <Flex className="footer" w="100%" h="50px" pt="50px" mt="50px" gap="80px" justifyContent="center" alignItems="center">
      <Text>
        Zuri<span>.</span>Internship
      </Text>
      <Text>HNG Internship 9 Frontend Task</Text>
      <Box >
      <Image src={logo} />
      </Box>
    </Flex>
  );
}

export default Footer;
