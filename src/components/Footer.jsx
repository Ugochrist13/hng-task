import { Flex } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex gap="100px" pt="100px" justify="center" alignItems="center">
      <Text>
        Zuri<span>.</span>Internship
      </Text>
      <Text>HNG Internship 9 Frontend Task</Text>
      <Box
        bg="url('../assets/img/ifg.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
      />
    </Flex>
  );
}

export default Footer;
