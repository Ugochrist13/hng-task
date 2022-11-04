import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import Contact from "./components/Contact";
import Home from "./components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [

    // ],
    
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router}>
    </RouterProvider>
  </ChakraProvider>
);
