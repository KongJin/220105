import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  left: 0;
  border-bottom: 1px solid #b2b0af;
`;

const Logo = styled.img`
  width: 90px;
  height: 100%;
  padding: 5px 0;
`;
const Nav = styled.nav`
  height: 100%;
  width: 150px;
  display: flex;
  justify-content: space-evenly;
`;
const List = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserForm = styled.div`
  color: #b2b0af;
`;
const Button = styled(Link)`
  background-color: #4024b0;
  padding: 8px;
  margin-left: 10px;
  border-radius: 10px;
  color: white;
  &:first-child {
    padding: 8px;
    background-color: white;
    color: #b2b0af;
    border: 1px solid #b2b0af;
  }
`;

const GoHome = styled(Link)`
  height: 100%;
`;

// eslint-disable-next-line
export default () => {
  return (
    <Div>
      <Header>
        <GoHome to='/'>
          <Logo src='logo.png' />
        </GoHome>
        <Nav>
          <List to='/'>게시판</List>
          <List to='/chat'>채팅</List>
        </Nav>
        <UserForm>
          <Button to='/login'>로그인</Button>
          <Button to='/join'>회원가입</Button>
        </UserForm>
      </Header>
    </Div>
  );
};
