import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 90vh;
  width: 300px;
  margin: 0 auto;
  flex-direction: column;
  padding-top: 100px;
`;
const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  all: unset;
  border-bottom: 1px solid black;
  padding: 10px 0;
  width: 100%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #4024b0;
  width: 100%;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  color: white;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const Slink = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 100%;
  cursor: pointer;
  &:nth-child(2) {
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: 0 10px;
  }
  &:hover {
    transition: 0.2s;
    opacity: 0.5;
  }
`;

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = async (e) => {
    e.preventDefault();
    const data = await axios.post("https://practice0105.herokuapp.com/user/login", {
      userId,
      password,
    });
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={postLogin}>
        <Logo src="logo.png" />
        <Input onChange={(e) => setUserId(e.target.value)} placeholder="아이디" />
        <Input onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
        <Button type="submit">로그인</Button>
      </Form>
      <Column>
        <Slink>아이디 찾기</Slink>
        <Slink>비밀번호 찾기</Slink>
        <Slink>회원가입</Slink>
      </Column>
    </Container>
  );
};

export default Login;
