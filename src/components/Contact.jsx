import { Form, useNavigate, useSubmit } from "react-router-dom";
import Footer from "./Footer";
import "./contact.css";
import { Box, Flex, Heading, Input, Textarea, VStack } from "@chakra-ui/react";

function Contact() {
  const submit = useSubmit();
  const navigate = useNavigate();

  return (
    <VStack>
      <Heading>Contact Me</Heading>
      <p>Hi dear, contact me to ask me anything you have in mind</p>
      <Form
        method="post"
        action="/"
        onChange={(event) => {
          submit(event.currentTarget);
        }}
      >
        <Box>
          <label>First Name </label>
          <br />
          <Input
            type="text"
            id="first_name"
            name="First Name"
            placeholder="Enter your first name"
          />
          <br />
          <br />
          <label>Last Name </label>
          <br />
          <Input
            type="text"
            id="last_name"
            name="Last Name"
            placeholder="Enter your last name"
          />
        </Box>
        <br />
        <label>Email </label>
        <br />
        <Input
          type="email"
          id="email"
          name="Email"
          placeholder="e.g yourname@email.com"
        />
        <br />
        <br />
        <label>Message</label>
        <br />
        <Textarea
          id="message"
          placeholder="Send me a message, and I will reply as soon as possible"
          name="Message"
        />
        <br />
        <Flex>
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
          Submit
        </button>
      </Form>
      <Footer />
    </VStack>
  );
}

export default Contact;
