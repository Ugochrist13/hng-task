import { VStack } from "@chakra-ui/react";
import Links from "./Links";
import Profile from "./Profile";
import Footer from "./Footer";
import "./home.css";

function Home() {
  return (
    <VStack id="App" w="100%" p="20px 20px">
      <Profile />
      <Links />
      <Footer />
    </VStack>
  );
}

export default Home;
