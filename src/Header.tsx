import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars, faBell, faCaretDown,
    faFireFlameCurved,
    faHouse,
    faSearch,
    faShop,
    faTv,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";

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
                    <button className={'hover:bg-gray-800 hover:border-b-blue-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-blue-800'}>
                        <FontAwesomeIcon icon={faHouse} />
                    </button>
                    <button className={'hover:bg-gray-800 hover:border-b-blue-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-blue-800'}>
                        <FontAwesomeIcon icon={faUserGroup} />
                    </button>
                    <button className={'hover:bg-gray-800 hover:border-b-blue-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-blue-800'}>
                        <FontAwesomeIcon icon={faTv} />
                    </button>
                    <button className={'hover:bg-gray-800 hover:border-b-blue-800 hover:border-b-4 border-b-4 border-b-black rounded px-10 py-3 transition hover:text-blue-800'}>
                        <FontAwesomeIcon icon={faShop} />
                    </button>



                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                        </div>
                        <input
                            type="text"
                            className="block w-28 md:w-48 h-8 md:h-10 pl-10 pr-3 rounded-full bg-gray-700 text-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                            placeholder="Search in CRS..."
                        />
                    </div>
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