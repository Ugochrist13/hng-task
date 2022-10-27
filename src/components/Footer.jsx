import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import '../assets/img/ifg.png'



function Footer() {
  return (
    <Flex gap="100px" pt="100px" justify="center" alignItems="center">
      <Text>
        Zuri<span>.</span>Internship
      </Text>
      <Text>HNG Internship 9 Frontend Task</Text>
      <Box h="32px" w="132px"
        bg="url('../assets/img/ifg.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      />
    </Flex>
  );
}

export default Footer;
