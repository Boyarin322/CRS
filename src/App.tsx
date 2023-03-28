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
import Sidebar from "./Sidebar";
import Ads from "./Ads";
import Header from "./Header";

library.add(faCheck);

function App() {
  return (
    <>
        <Header/>
        <div className={"grid grid-cols-5 gap-4 w-full"}>
            <Sidebar className={'col-start-1 col-end-2 lg:flex hidden'}/>
            <h1 className={'font-extrabold col-start-2 col-end-4 items-center'}>Main page</h1>
            <Ads className={'col-start-5 col-end-6 md:grid hidden'}/>
        </div>
    </>
  );
}

export default App;
