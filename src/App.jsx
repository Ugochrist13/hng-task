
import { VStack } from "@chakra-ui/react";
import './App.css'
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {

  return (
    <VStack>
    <Home />
    <Contact />
    </VStack>
  );
}

export default App;
