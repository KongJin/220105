import styled from "styled-components";

const Footer = styled.footer`
  margin: 0 auto;
  display: flex;
  height: 150px;
  width: 1200px;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
`;
const Column = styled.div``;
const Input = styled.input`
  all: unset;
  border: 2px solid #dddddd;
  width: 300px;
  height: 30px;
`;
const SearchBtn = styled.button`
  background-color: #3d25c2;
  height: 30px;
  border-radius: 0px;
  color: white;
  padding: 2px 10px;
  font-size: 14px;
`;

const Select = styled.select`
  height: 100%;
`;
const Option = styled.option``;

export const BoardFooter = () => {
  return (
    <Footer>
      <Column>page</Column>
      <Column>
        <Select>
          <Option>작성자</Option>
          <Option>제목</Option>
          <Option>글내용</Option>
        </Select>
        <Input type='text' />

        <SearchBtn>검색하기</SearchBtn>
      </Column>
    </Footer>
  );
};
