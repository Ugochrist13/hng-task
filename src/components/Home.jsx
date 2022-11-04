import { VStack } from "@chakra-ui/react";
import Links from "./Links";
import Profile from "./Profile";
import Footer from "./Footer";

function Home() {
  return (
    <VStack id="App" w="100%" p="20px 100px">
      <Profile />
      <Links />
      <Footer />
    </VStack>
  );
}

export default Home;