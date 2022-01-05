import styled from "styled-components";
import { BoardFooter } from "../Componets/Board/BoardFooter";
import { BoardHeader } from "../Componets/Board/BoardHeader";
import { BoardList } from "../Componets/Board/BoardList";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Board = () => {
  return (
    <Container>
      <BoardHeader />
      <BoardList />
      <BoardFooter />
    </Container>
  );
};

export default Board;
