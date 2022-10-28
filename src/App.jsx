import Links from "./components/Links";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { VStack } from "@chakra-ui/react";
import './App.css'

function App() {

  return (
    <VStack id="App" w="100%" p="20px 100px">
      <Profile />
      <Links />
      <Footer />
    </VStack>
  );
}

export default App;
