import React from "react";
import { Form, useNavigate, useSubmit } from "react-router-dom";

function Contact() {
  const submit = useSubmit();
  const navigate = useNavigate();

  return (
    <div>
      <Form
        method="post"
        action="/"
        onChange={(event) => {
          submit(event.currentTarget);
        }}
      >
        <label for="name" name="First name">
          {" "}
          First Name
          <input
            type="text"
            id="first_name"
            name="First Name"
            placeholder="e.g Christian"
          />
        </label>
        <br />
        <label for="name" name="Last name">
          <input
            type="text"
            id="last_name"
            name="Last Name"
            placeholder="e.g Nwabiukwu"
          />
        </label>
        <br />
        <label for="" name="Email">
          <input
            type="text"
            id="email"
            name="Email"
            placeholder="e.g Christian"
          />
        </label>
        <br />
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
      </Form>
    </div>
  );
}

export default Contact;
