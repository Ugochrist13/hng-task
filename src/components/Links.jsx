import {
  Button,
  VStack,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import slack from '../assets/img/slack.svg'
import gHub from '../assets/img/gHub.svg'


function Links() {
  return (
    <>
      <VStack w="100%" pt="50px" gap="20px">
      <VStack
          h="76px"
          bg="gray.200"
          w="100%"
          p="24px 32px"
          borderRadius="10px"
        >
          <Button
            id="twitter_link"
            colorScheme="gray.900"
            fontSize="18px"
            h="28px"
            color="black"
          >
            <a href="https://twitter.com/Christianugoo06">Twitter Link</a>
          </Button>
        </VStack>
        <VStack
          h="76px"
          bg="gray.200"
          w="100%"
          p="24px 32px"
          borderRadius="10px"
        >
          <Button
            id="btn__zuri"
            colorScheme="gray.900"
            fontSize="18px"
            h="28px"
            color="black"
          >
            <a href="https://training.zuri.team/">Zuri Team</a>
          </Button>
        </VStack>
        <VStack
          h="76px"
          bg="gray.200"
          w="100%"
          p="24px 32px"
          borderRadius="10px"
        >
          <Button
            id="books"
            colorScheme="gray.900"
            fontSize="18px"
            h="28px"
            color="black"
          >
            <a href="http://books.zuri.team">Zuri Books</a>
          </Button>
        </VStack>
        <VStack
          h="76px"
          bg="gray.200"
          w="100%"
          p="24px 32px"
          borderRadius="10px"
        >
          <Button
            id="book__python"
            colorScheme="gray.900"
            fontSize="18px"
            h="28px"
            color="black"
          >
            <a href="https://books.zuri.team/python-for-beginners?ref_id=Nwabiukwu Christian Ugochukwu">
              Pyhton Books
            </a>
          </Button>
        </VStack>
        <VStack
          h="76px"
          bg="gray.200"
          w="100%"
          p="24px 32px"
          borderRadius="10px"
        >
          <Button
            id="pitch"
            colorScheme="gray.900"
            fontSize="18px"
            h="28px"
            color="black"
          >
            <a href="https://background.zuri.team,">
              Background Check for Coders
            </a>
          </Button>
        </VStack>
        <VStack
          h="76px"
          bg="gray.200"
          w="100%"
          p="24px 32px"
          borderRadius="10px"
        >
          <Button
            id="book__design"
            colorScheme="gray.900"
            fontSize="18px"
            h="28px"
            color="black"
          >
            <a href="https://books.zuri.team/design-rules">Design Books</a>
          </Button>
        </VStack>
        <HStack
          justify="center"
          gap="20px"
          h="76px"
          w="100%"
          mb={70}
          borderRadius="10px"
        >
          <button ><a href="https://slack.com"><img src={slack} /></a></button>
          <button ><a href="https://github.com"><img src={gHub} /></a></button>
        </HStack>
      </VStack>
    </>
  );
}

export default Links;
