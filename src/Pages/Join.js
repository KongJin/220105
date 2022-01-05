import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding: 30px 0;
  font-size: 26px;
  font-weight: bold;
`;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 40px;
  grid-template-areas:
    "id idInput idInput idButton"
    "nickName nickNameInput nickNameInput nickNameButton"
    "password passwordInput checkPass checkPassInput"
    "name nameInput nameInput nameInput"
    "birth birthInput birthInput birthInput"
    "blank blank blank join";
  align-items: center;
  gap: 30px 0px;
  span,
  button {
    font-size: 20px;
    font-weight: bold;
    color: #777776;
  }
  input {
    height: 100%;
    border: 1px solid #777776;
    padding: 0px 10px;
    font-size: 18px;
  }
  button {
    width: 80%;
    margin: 0 auto;
    background-color: #5b5b57;
    border-radius: 0;
    color: white;
    height: 100%;
    text-align: center;
  }
`;

const Id = styled.span`
  grid-area: id;
`;
const IdInput = styled.input`
  grid-area: idInput;
`;
const IdButton = styled.button`
  grid-area: idButton;
`;

const NickName = styled.span`
  grid-area: nickName;
`;
const NickNameInput = styled.input`
  grid-area: nickNameInput;
`;
const NickNameButton = styled.button`
  grid-area: nickNameButton;
`;

const Password = styled.span`
  grid-area: password;
`;
const PasswordInput = styled.input`
  grid-area: passwordInput;
`;
const CheckPass = styled.span`
  grid-area: checkPass;
  text-align: center;
`;
const CheckPassInput = styled.input`
  grid-area: checkPassInput;
`;

const Name = styled.span`
  grid-area: name;
`;
const NameInput = styled.input`
  grid-area: nameInput;
`;

const Birth = styled.span`
  grid-area: birth;
`;
const BirthInput = styled.input`
  grid-area: birthInput;
`;
const Blank = styled.div`
  grid-area: blank;
`;
const JoinButton = styled.button`
  grid-area: join;
`;

const Join = () => {
  const [userId, setUserId] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nav = useNavigate();

  const postJoin = async (e) => {
    e.preventDefault();
    const user = await axios.post("https://practice0105.herokuapp.com/user/join", {
      userId,
      password,
    });
    console.log(user);
    // nav("/");
    // window.location.reload();
  };
  return (
    <Form onSubmit={postJoin}>
      <Title>회원가입</Title>
      <Container>
        <Id>아이디</Id>
        <IdInput
          plaaceholder="아이디를 입력해주세요 (6~20자 영문, 숫자)"
          onChange={(e) => setUserId(e.target.value)}
        />
        <IdButton>중복확인</IdButton>
        {/* <NickName>닉네임</NickName> */}
        {/* <NickNameInput placeholder='2~10자' /> */}
        <NickNameButton>중복확인</NickNameButton>
        <Password>비밀번호</Password>
        <PasswordInput
          onChange={(e) => {
            console.log(password);
            return setPassword(e.target.value);
          }}
        />
        <CheckPass>비밀번호 확인</CheckPass>
        <CheckPassInput />
        <Name>이름</Name>
        <NameInput onChange={(e) => setName(e.target.value)} />
        <Birth>생년월일</Birth>
        <BirthInput
          type="date"
          onChange={(e) => {
            console.log(age);
            return setAge(e.target.value);
          }}
        />
        <Blank></Blank>
        <JoinButton>회원가입</JoinButton>
      </Container>
    </Form>
  );
};

export default Join;
