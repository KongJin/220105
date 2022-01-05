import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "../Pages/Board";
import Chat from "../Pages/Chat";
import Detail from "../Pages/Detail";
import Join from "../Pages/Join";
import Login from "../Pages/Login";
import Post from "../Pages/Post";
import Profile from "../Pages/Profile";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";

const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Board />} />
        <Route path='/:id' element={<Detail />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/post' element={<Post />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
