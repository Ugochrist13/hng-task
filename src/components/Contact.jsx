import { Form, useNavigate, useSubmit } from "react-router-dom";
import Footer from "./Footer";
import "./contact.css";
import { Box, Flex, Heading, Input, Textarea, VStack } from "@chakra-ui/react";

function Contact() {
  const submit = useSubmit();
  const navigate = useNavigate();

  return (
    <VStack id="formcont" p="5px 20px">
      <Form
        className="form"
        method="post"
        action="/"
        onChange={(event) => {
          submit(event.currentTarget);
        }}
      >
        <div mb="5px">
          <Heading
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="600"
            lineHeight="44px"
            letterSpacing="-2%"
            color="#101828"
          >
            Contact Me
          </Heading>
          <p
            id="hi"
            fontFamily="Inter"
            fontSize="20px"
            color="#475467"
            fontWeight="400"
            lineHeight="30px"
            letterSpacing="0em"
            textAlign="justify"
          >
            Hi dear, contact me to ask me anything you have in mind
          </p>
        </div>
        <Box
          className="name"
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignContent="center"
        >
          <Box id="firstname" w="45%">
            <label
              fontSize="14px"
              fontWeight="500"
              fontFamily="Inter"
              lineHeight="20px"
              letterSpacing="0em"
              color="#344054"
            >
              First Name{" "}
            </label>
            <br />
            <Input
              w="100%"
              h="44px"
              color="#667085"
              borderRadius="8px"
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
          <Box id="firstname" w="45%">
            <label
              fontSize="14px"
              fontWeight="500"
              fontFamily="Inter"
              lineHeight="20px"
              letterSpacing="0em"
              color="#344054"
            >
              Last Name{" "}
            </label>
            <br />
            <Input
              w="100%"
              h="44px"
              color="#667085"
              borderRadius="8px"
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
        <Box w="100%">
          <label
            fontSize="14px"
            color="#344054"
            fontWeight="500"
            fontFamily="Inter"
            lineHeight="20px"
            letterSpacing="0em"
          >
            Email{" "}
          </label>
          <br />
          <Input
            w="100%"
            h="44px"
            color="#667085"
            borderRadius="8px"
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
          <label
            fontSize="14px"
            color="#344054"
            fontWeight="500"
            fontFamily="Inter"
            lineHeight="20px"
            letterSpacing="0em"
          >
            Message
          </label>
          <br />
          <Textarea
            w="100%"
            h="132px"
            color="#667085"
            borderRadius="8px"
            p="12px 14px"
            id="message"
            placeholder="Send me a message, and I will reply as soon as possible"
            name="Message"
          />
        </Box>
        <Flex gap={5}>
          <input type="checkbox" />
          <p
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            letterSpacing="0em"
            color="#475467"
          >
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
      </Form>
      <Footer />
    </VStack>
  );
}

export default Contact;
