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
import Favourites from "./pages/Favourites";
import Groups from "./pages/Groups";
import Marketplace from "./pages/Marketplace";
import News from "./pages/News";
import Saved from "./pages/Saved";
import Watch from "./pages/Watch";
import Memories from "./pages/Memories";
import Ads from "./pages/Ads";
import Other from "./pages/Other";
import Friends from "./pages/Friends";

library.add(faCheck);

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route Component={MainPage} path={'/main'}/>
              <Route Component={Profile} path={'/profile'}/>
              <Route Component={Messages} path={'/messages'}/>
              <Route Component={Favourites} path={'/favourites'}/>
              <Route Component={Groups} path={'/groups'}/>
              <Route Component={Marketplace} path={'/marketplace'}/>
              <Route Component={News} path={'/news'}/>
              <Route Component={Saved} path={'/saved'}/>
              <Route Component={Watch} path={'/watch'}/>
              <Route Component={Memories} path={'/memories'}/>
              <Route Component={Ads} path={'/ads'}/>
              <Route Component={Other} path={'/other'}/>
              <Route Component={Friends} path={'/friends'}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
