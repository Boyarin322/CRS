import React from 'react';
import './App.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    // faBars,
    // faBell,
    // faCaretDown,
    faCheck,
    // faFireFlameCurved,
    // faHouse,
    // faSearch, faShop, faTv,
    // faUserGroup
} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Sidebar from "./modules/Sidebar";
// import Ads from "./modules/Ads";
// import Header from "./modules/Header";
// import MainPageContent from "./modules/MainPageContent";
import MainPage from "./pages/MainPage";

library.add(faCheck);

function App() {
  return (
    <MainPage/>
  );
}

export default App;
