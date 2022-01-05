import styled from "styled-components";

const Header = styled.div`
  height: 100px;
  border-bottom: 3px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;
const Column = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Count = styled.span`
  font-weight: bold;
`;
const Content = styled.p`
  display: flex;
  align-items: center;
`;
const Filter = styled.select`
  width: 75px;
  padding: 5px 0;
`;
const Option = styled.option``;

export const BoardHeader = () => {
  return (
    <Header>
      <Title>전체글보기</Title>
      <Column>
        <Content>
          <Count>1</Count>개의 글이 있습니다.
        </Content>
        <Filter>
          <Option>10개씩</Option>
          <Option>5개씩</Option>
        </Filter>
      </Column>
    </Header>
  );
};
