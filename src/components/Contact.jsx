import React from "react";
import { Form, useNavigate, useSubmit } from "react-router-dom";
import Footer from "./Footer";

function Contact() {
  const submit = useSubmit();
  const navigate = useNavigate();

  return (
    <div>
    <h1>Contact Me</h1>
    <p>Hi dear, contact me to ask me anything you have in mind</p>
      <Form
        method="post"
        action="/"
        onChange={(event) => {
          submit(event.currentTarget);
        }}
      >
        <label for="name" >
          First Name
          <input
            type="text"
            id="first_name"
            name="First Name"
            placeholder="e.g Christian"
          />
        </label>
        <br />
        <label for="name">
        Last Name
          <input
            type="text"
            id="last_name"
            name="Last Name"
            placeholder="e.g Nwabiukwu"
          />
        </label>
        <br />
        <label for="email" >
        Email
          <input
            type="text"
            id="email"
            name="Email"
            placeholder="e.g Christian"
          />
        </label>
        <br />
        <label for="message">Message</label>
        <textarea id="message" name="Message"></textarea>
        <br />
        <button
          type="submit"
          id="btn__submit"
          onClick={() => {
            navigate("/");
          }}
        >
          Submit
        </button>
        <input type="checkbox"/>
        <p>You agree to providing your data to Christian Nwabiukwu who may contact you</p>
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
    </div>
  );
}

export default Contact;
