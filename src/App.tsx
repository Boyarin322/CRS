import React from 'react';
import './App.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import MainPage from "./pages/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";

library.add(faCheck);

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route Component={MainPage} path={'/main'}></Route>
              <Route Component={Profile} path={'/profile'}></Route>
              <Route Component={Messages} path={'/messages'}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
