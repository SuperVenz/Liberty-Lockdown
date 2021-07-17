import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

const Wrapper = styled.div`
  height: 80vh;
  background: #000000;
  height: auto;
  padding-bottom: 5%;
`;
const H2 = styled.h2`
  background: #1c1f22;
  padding-bottom: 24px;
  @media (min-width: 1000px) {
    padding-top: 10%;
    padding-bottom: 5%;
  }
`;
const FormBox = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 20%;
  @media (min-width: 1000px) {
    margin-top: 5%;
  }
`;
const Label = styled.label`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 24px;
  border-radius: 10px;
`;
const StringInput = styled.input`
  width: 80%;
  font-size: 18px;
  padding: 20px 0px;
  border: solid 1px #facf03;
  border-radius: 10px;
  padding-left: 8px;
`;
const AreaText = styled.textarea`
  width: 80%;
  font-size: 18px;
  border: solid 1px #facf03;
  border-radius: 10px;
  padding-left: 8px;
  height: 200px;
`;
const Submit = styled.button`
  width: 152px;
  height: 48px;
  left: 111.26px;
  top: 2733px;
  font-family: Helvetica Neue LT Std;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  border: none;
  background: #facf03;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;
function Form({ title }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name,
        email: email,
        description: description,
      }),
    })
      .then(() => navigate("/thankyou"))
      .catch((error) => alert(error));
  };

  return (
    <Wrapper>
      <H2>{title}</H2>
      <FormBox
        autoComplete="on"
        netlify-honeypot="bot-field"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/"
        onSubmit={handleSubmit}
      >
        <input name="form-name" value="Netlify Rocks" type="hidden" />
        <input type="hidden" name="bot-field" />
        <Label htmlFor="name">
          <StringInput
            required
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></StringInput>
        </Label>
        <Label htmlFor="Email">
          <StringInput
            required
            type="text"
            name="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></StringInput>
        </Label>
        <Label htmlFor="description">
          <AreaText
            name="description"
            rows="4"
            cols="20"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Post Your Query...."
          />
        </Label>
        <Submit type="submit" onSubmit={handleSubmit}>
          Submit
        </Submit>
      </FormBox>
    </Wrapper>
  );
}

export default Form;
