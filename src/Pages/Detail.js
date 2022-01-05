import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  border: 1px solid #ebecef;
  padding: 10px;
`;
const Header = styled.div``;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const Name = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;
const Date = styled.span`
  font-size: 13px;
  color: #979797;
`;
const Contents = styled.p`
  white-space: pre;
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled(Link)`
  background-color: #4024b0;
  padding: 10px 20px;
  margin-left: 10px;
  color: white;
`;

const Detail = () => {
  return (
    <Container>
      <Header>
        <Title>제목</Title>
        <Column>
          <Name>작성자</Name>
          <Date>날짜</Date>
        </Column>
      </Header>
      <Contents>내용</Contents>
      <Buttons>
        <Button to='/1'>수정</Button>
        <Button to='/'>삭제</Button>
      </Buttons>
    </Container>
  );
};

export default Detail;
