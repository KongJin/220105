import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding-top: 90px;
  display: flex;
  width: 70%;
  justify-content: center;
  flex-direction: column;
`;
const Input = styled.input`
  all: unset;
  border-bottom: 1px solid black;
  padding: 11px;
  margin-bottom: 20px;
`;
const Area = styled.textarea`
  &::placeholder {
    font-size: 15px;
  }
  font-size: 20px;
  all: unset;
  height: 500px;
  border: 1px solid #b2b0af;
  padding: 10px;
`;

const Button = styled(Link)``;
const Post = () => {
  return (
    <Container>
      <Input type='text' placeholder='제목을 입력하세요' />
      <Area placeholder='내용을 입력하세요' />
      <Button to='/'>등록</Button>
    </Container>
  );
};

export default Post;
