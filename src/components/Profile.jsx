import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

function Profile() {
  return (
    <div>
      <Flex justify="center" align="center" direction="column">
        <Box bgImage="url('https://pbs.twimg.com/profile_images/1570447747966181384/y00r_s7n_400x400.jpg')" bgPosition="center" bgRepeat="no-repeat" />
        <Text>Christianugoo06</Text>
        <Text>Nwabiukwu Christian Ugochukwu</Text>
      </Flex>
    </div>
  )
}

export default Profile
