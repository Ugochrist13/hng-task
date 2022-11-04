import React from "react";
import { Form, useForm } from "react-router-dom";

function Contact() {

    const [form, setForm] = useForm({})
  return (
    <div>
      <Form onSubmit={submit}>
        <label for="name" name="First name">
          <input type="text" id="" placeholder="e.g Christian" />
        </label>
        <br/>
        <label for="name" name="Last name">
          <input type="text" id="" placeholder="e.g Nwabiukwu" />
        </label>
        <br/>
        <label for="" name="First name">
          <input type="text" id="" placeholder="e.g Christian" />
        </label>
        <br/>
        <textarea id="message"></textarea>
      </Form>
    </div>
  );
}

export default Contact;
