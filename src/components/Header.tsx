import React from 'react';
import '../index.css';
import '../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars, faBell, faCaretDown,
    faFireFlameCurved,
    faHouse,
    faSearch,
    faShop, faStore,
    faTv,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../ui/SearchInput";
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <>
            <header className="flex items-center justify-between bg-black py-2 px-6 text-white">
                <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faFireFlameCurved} className={'text-blue-700 h-6'}/>
                    <h1 className="text-xl font-bold pr-2 border-r-2">CRS</h1>
                </div>
                <div className={'flex items-center space-x-4 sm:hidden'}>
                    <button className={'hover:bg-gray-800 hover:border-b-blue-800 hover:border-b-4 border-b-4 border-b-black rounded px-4 py-2 transition hover:text-blue-800'}>
                        <FontAwesomeIcon icon={faBars} size={"xl"}/>
                    </button>
                </div>
                <div className={'hidden sm:flex sm:items-center sm:space-x-4'}>
                    <NavLink to={'/main'} className={'hover:bg-gray-800 hover:border-b-blue-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-blue-800'}>
                        <FontAwesomeIcon icon={faHouse} />
                    </NavLink>
                    <NavLink to={'/friends'}  className={'hover:bg-gray-800 hover:border-b-blue-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-blue-800'}>
                        <FontAwesomeIcon icon={faUserGroup} />
                    </NavLink>
                    <NavLink to={'/watch'}  className={'hover:bg-gray-800 hover:border-b-blue-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-blue-800'}>
                        <FontAwesomeIcon icon={faTv} />
                    </NavLink>
                    <NavLink  to={'/marketplace'} className={'hover:bg-gray-800 hover:border-b-blue-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-blue-800'}>
                        <FontAwesomeIcon icon={faStore} />
                    </NavLink>



                </div>
                <div className="flex items-center space-x-4">
                    <SearchInput/>
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <FontAwesomeIcon icon={faBell} className="text-gray-500" />
                        <FontAwesomeIcon icon={faCaretDown} className="text-gray-500" />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;