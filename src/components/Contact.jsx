import React from "react";
import { Form, useForm } from "react-router-dom";

function Contact() {

    const [form, setForm] = useForm({})
  return (
    <div>
      <Form onSubmit={submit}>
        <label for="name" name="First name">
          <input type="text" id="first_name" placeholder="e.g Christian" />
        </label>
        <br/>
        <label for="name" name="Last name">
          <input type="text" id="last_name" placeholder="e.g Nwabiukwu" />
        </label>
        <br/>
        <label for="" name="Email">
          <input type="text" id="email" placeholder="e.g Christian" />
        </label>
        <br/>
        <textarea id="message"></textarea>
        <br/>
        <button type="submit" id="btn__submit"></button>
      </Form>
    </div>
  );
}

export default Contact;
