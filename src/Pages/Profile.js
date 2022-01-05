import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px 0px;
  margin-top: 30px;
`;
const Column = styled.div`
  height: 70px;
  width: 330px;
  background-color: #ac9ee5;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  &:nth-child(5) {
    background-color: transparent;
  }
`;
const Content = styled.span`
  font-weight: bold;
  &:first-child {
    font-weight: bold;
    font-size: 24px;
  }
`;

const Button = styled(Link)`
  height: 70px;
  width: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4024b0;
  color: white;
  border-radius: 5px;
  &:hover {
    opacity: 0.7;
    transition: 0.4s;
  }
`;

const Input = styled.input`
  height: 70px;
  width: 330px;
  border: 1px solid #e2e5e8;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

const Profile = () => {
  const [check, setCheck] = useState(true);
  return (
    <Container>
      <Column>
        <Content>아이디</Content>
        <Content>아이디</Content>
      </Column>
      <Column>
        {!check ? (
          <>
            <Content>이름</Content>
            <Content>이름</Content>
          </>
        ) : (
          <Input placeholder='이름' />
        )}
      </Column>
      <Column>
        {!check ? (
          <>
            <Content>닉네임</Content>
            <Content>닉네임</Content>
          </>
        ) : (
          <Input placeholder='닉네임' />
        )}
      </Column>
      <Column>
        {!check ? (
          <>
            <Content>나이</Content>
            <Content>나이</Content>
          </>
        ) : (
          <Input placeholder='나이' />
        )}
      </Column>

      <Button to='/profile'>수정</Button>
      <Button to='/'>탈퇴</Button>
    </Container>
  );
};

export default Profile;
