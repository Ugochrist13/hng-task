import Links from "./components/Links";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { VStack } from "@chakra-ui/react";

function App() {

  return (
    <VStack w="100%" p="20px 50px">
      <Profile />
      <Links />
      <Footer />
    </VStack>
  );
}

export default App;
