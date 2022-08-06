import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

export default function Landing() {
  // const [userState, setUserState] = useState(<Login/>);
  // const setRegister = () => {
  //   setUserState(<Register/>);
  // };
  // const setLogin = () => {
  //   setUserState(<Login/>);
  // };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
