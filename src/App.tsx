import React from 'react';
import Main from "./components/Main";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Inbox from "./components/Inbox";

function App() {
  return (
      <Router>
        <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/inbox"} element={<Inbox />} />
        </Routes>
      </Router>
  );
}

export {App};
