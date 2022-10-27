import { useState } from "react";
import Links from "./components/Links";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { VStack } from "@chakra-ui/react";
// import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <VStack w="100%" h="100vh" p="20px 50px">
      <Profile />
      <Links />
      <Footer />
    </VStack>
  );
}

export default App;
