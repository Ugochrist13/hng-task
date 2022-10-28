import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import share from '../assets/img/share.svg'
import menu from '../assets/img/menu.svg'

function Profile() {
  return (
    <VStack className="profile" h="142px" w="100%" mt={10}>
    {/* <Flex><Image marginLeft="80rem" transform="translateY(10px)" {isLargeScreen? src={share}: src{menu}} /></Flex> */}
      <VStack h="88px" w="88px">
        <Image
          id="profile_img"
          h="100%"
          w="100"
          borderRadius="100%"
          src="https://pbs.twimg.com/profile_images/1570447747966181384/y00r_s7n_400x400.jpg"
        />
      </VStack>
      <VStack>
        <Text
          h="30px"
          fontFamily="Inter"
          fontSize="20px"
          lineHeight="30px"
          fontWeight="700"
          id="twitter"
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
