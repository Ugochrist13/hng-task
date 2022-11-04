import { Form, useNavigate, useSubmit } from "react-router-dom";
import Footer from "./Footer";
import "./contact.css";
import { Box, Flex, Heading, Input, Textarea, VStack } from "@chakra-ui/react";

function Contact() {
  const submit = useSubmit();
  const navigate = useNavigate();

  return (
    <VStack spacing={10}>
      <Form 
        className="form"
        method="post"
        action="/"
        onChange={(event) => {
          submit(event.currentTarget);
        }}
      >
        <div>
          <Heading>Contact Me</Heading>
          <p>Hi dear, contact me to ask me anything you have in mind</p>
        </div>
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignContent="center"
        >
          <Box w="45%">
            <label>First Name </label>
            <br/>
            <Input
            w="100%" h="44px" borderRadius="8px"
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              letterSpacing="0em"
              textAlign="left"
              type="text"
              id="first_name"
              name="First Name"
              placeholder="Enter your first name"
            />
          </Box>
          <Box w="45%">
            <label>Last Name </label>
            <br/>
            <Input
            w="100%" h="44px" borderRadius="8px"
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              letterSpacing="0em"
              textAlign="left"
              type="text"
              id="last_name"
              name="Last Name"
              placeholder="Enter your last name"
            />
          </Box>
        </Box>
        <Box w="100%" >
          <label>Email </label>
          <br />
          <Input
          w="100%" h="44px" borderRadius="8px"
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            letterSpacing="0em"
            textAlign="left"
            type="email"
            id="email"
            name="Email"
            placeholder="e.g yourname@email.com"
          />
        </Box>
        <Box w="100%">
          <label>Message</label>
          <br />
          <Textarea w="100%" h="132px" borderRadius="8px" p="12px 14px"
            id="message"
            placeholder="Send me a message, and I will reply as soon as possible"
            name="Message"
          />
        </Box>
        <Flex gap={5}>
          <input type="checkbox" />
          <p>
            You agree to providing your data to Christian Nwabiukwu who may
            contact you
          </p>
        </Flex>
        <button 
          type="submit"
          id="btn__submit"
          onClick={() => {
            navigate("/");
          }}
        >
          Send message
        </button>
        <Box w="100%" b="1px solid gray.700" h="0" />
      </Form>
      <Footer />
    </VStack>
  );
}

export default Contact;
