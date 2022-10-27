import { Box, Button, Flex, VStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import '../assets/img/ifg.svg'

function Links() {
  return (
    <>
    <VStack w="100%" pt="50px" gap="20px">
      <VStack h="76px" bg="gray.200" w="100%" p="24px 32px" borderRadius="10px">
        <Button id="btn__zuri" colorScheme="gray.900" fontSize="18px" h="28px" color="black">
          <a href="https://training.zuri.team/">Zuri Team</a>
        </Button>
      </VStack>
      <VStack h="76px" bg="gray.200" w="100%" p="24px 32px" borderRadius="10px">
        <Button id="books" colorScheme="gray.900" fontSize="18px" h="28px" color="black">
          <a href="http://books.zuri.team">Zuri Books</a>
        </Button>
      </VStack>
      <VStack h="76px" bg="gray.200" w="100%" p="24px 32px" borderRadius="10px">
        <Button id="book__python" colorScheme="gray.900" fontSize="18px" h="28px" color="black">
          <a href="https://books.zuri.team/python-for-beginners?ref_id=Nwabiukwu Christian Ugochukwu">Pyhton Books</a>
        </Button>
      </VStack>
      <VStack h="76px" bg="gray.200" w="100%" p="24px 32px" borderRadius="10px">
        <Button id="pitch" colorScheme="gray.900" fontSize="18px" h="28px" color="black">
          <a href="https://background.zuri.team,">Background Check for Coders</a>
        </Button>
      </VStack>
      <VStack h="76px" bg="gray.200" w="100%" p="24px 32px" borderRadius="10px">
        <Button id="book__design" colorScheme="gray.900" fontSize="18px" h="28px" color="black">
          <a href="https://books.zuri.team/design-rules">Design Books</a>
        </Button>
      </VStack>
    </VStack>
    <Flex gap="100px" pt="100px" justify="center" alignItems="center" >
      <Text>Zuri<span>.</span>Internship</Text>
      <Text>HNG Internship 9 Frontend Task</Text>
      <Box bg="url('../assets/img/ifg.svg')"   bgPosition="center"
  bgRepeat="no-repeat" />
    </Flex>
    </>
  );
}

export default Links;
