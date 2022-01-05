import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const Table = styled.span`
  text-align: center;
  padding: 5px;
  &:nth-child(2) {
    text-align: left;
    padding: 5px 0;
  }
`;
const Lists = styled.ul``;
const List = styled.li`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr 0.1fr;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px;
`;
const Title = styled(Link)`
  &:hover {
    color: red;
    font-weight: bold;
  }
`;
const Creator = styled.span``;
const Created = styled.span`
  text-align: center;
`;
const Column = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
`;
const PostingLink = styled(Link)`
  border: 2px solid #d1cecd;
  padding: 8px 15px;
  display: ${({ token }) => !token && "none"};
`;

export const BoardList = () => {
  return (
    <>
      <Container>
        <Lists>
          <List>
            <Table>제목</Table>
            <Table>작성자</Table>
            <Table>작성일</Table>
          </List>
          <List>
            <Title to='1'>제목</Title>
            <Creator>작성자</Creator>
            <Created>날짜</Created>
          </List>
        </Lists>
      </Container>
      <Column>
        <PostingLink to='/post'>글쓰기</PostingLink>
      </Column>
    </>
  );
};
