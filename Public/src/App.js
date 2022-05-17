import {BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import Registro from "./Pages/Registro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
