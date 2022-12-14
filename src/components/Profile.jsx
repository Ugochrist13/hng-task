import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import share from '../assets/img/share.svg'
import menu from '../assets/img/menu.svg'
import './profile.css'

function Profile() {

  return (
    <Flex className="profile" h="142px" w="100%" flexDirection="column" alignItems="center" justifyContent="center" mt={10}>
    <Flex w="100%" flexDirection="row" alignItems="center" justifyContent="flex-end" ><Image id="share"  transform="translateY(10px)" src ={share}/><Image id="menu" display="none" marginLeft="20rem" transform="translateY(15px)" src ={menu}/></Flex>
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
          ugochukwu christian
        </Text>
      </VStack>
    </Flex>
  );
}

export default Profile;
