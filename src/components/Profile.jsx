import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Profile() {
  return (
    <VStack className="profile" h="142px" w="100%" mt={10}>
      <VStack h="88px" w="88px">
        <Image
          id="profile_img"
          h="100%"
          w="100"
          borderRadius="100%"
          src="https://pbs.twimg.com/profile_images/1570447747966181384/y00r_s7n_400x400.jpg"
        />
      </VStack>
      <VStack h="76px" bg="gray.200" w="100%" p="24px 32px" borderRadius="10px">
        <Text
          h="28px"
          fontFamily="Inter"
          fontSize="18px"
          lineHeight="28px"
          fontWeight="500"
        >
          Christianugoo06
        </Text>
      </VStack>
      <VStack>
        <Text
          h="30px"
          fontFamily="Inter"
          fontSize="20px"
          lineHeight="30px"
          fontWeight="700"
          id="slack"
          display="none"
        >
          Nwabiukwu Christian Ugochukwu
        </Text>
      </VStack>
    </VStack>
  );
}

export default Profile;
