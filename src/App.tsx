import React from 'react';
import './App.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBell,
    faCaretDown,
    faCheck,
    faFireFlameCurved,
    faHouse,
    faSearch, faShop, faTv,
    faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCheck);

function App() {
  return (

      <header className="flex items-center justify-between bg-black py-3 px-6 text-white">
          <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faFireFlameCurved} className={'text-red-600 h-6'}/>
              <h1 className="text-xl font-bold pr-2 border-r-2">CRS</h1>
          </div>
          <div className={'flex items-center space-x-4'}>
                <div className={"flex items-center space-x-2"}>
                    <button className={'hover:bg-gray-800 hover:border-b-red-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-red-800'}>
                        <FontAwesomeIcon icon={faHouse} />
                    </button>
                    <button className={'hover:bg-gray-800 hover:border-b-red-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-red-800'}>
                        <FontAwesomeIcon icon={faUserGroup} />
                    </button>
                    <button className={'hover:bg-gray-800 hover:border-b-red-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-red-800'}>
                        <FontAwesomeIcon icon={faTv} />
                    </button>
                    <button className={'hover:bg-gray-800 hover:border-b-red-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-red-800'}>
                        <FontAwesomeIcon icon={faShop} />
                    </button>

                </div>
          </div>
          <div className="flex items-center space-x-4">
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                  </div>
                  <input
                      type="text"
                      className="block w-48 h-10 pl-10 pr-3 rounded-full bg-gray-700 text-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                      placeholder="Search in CRS..."
                  />
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                  <FontAwesomeIcon icon={faBell} className="text-gray-500" />
                  <FontAwesomeIcon icon={faCaretDown} className="text-gray-500" />
              </div>
          </div>
      </header>
  );
}

export default App;
