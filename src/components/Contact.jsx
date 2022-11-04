import React, { useState } from "react";
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
        <div>
          <label>First Name </label>
          <br />
          <input
            type="text"
            id="first_name"
            name="First Name"
            placeholder="Enter your first name"
          />

          <br />
          <label>Last Name </label>
          <br />
          <input
            type="text"
            id="last_name"
            name="Last Name"
            placeholder="Enter your last name"
          />
        </div>
        <br />
        <label>Email </label>
        <br />
        <input
          type="email"
          id="email"
          name="Email"
          placeholder="e.g yourname@email.com"
        />

        <br />
        <label>Message</label>
        <br />
        <textarea
          id="message"
          placeholder="Send me a message, and I will reply as soon as possible"
          name="Message"
        />
        <br />
        <div>
          <input type="checkbox" />
          <p>
            You agree to providing your data to Christian Nwabiukwu who may
            contact you
          </p>
        </div>
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
