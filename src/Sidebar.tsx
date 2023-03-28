import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUsers,
    faVideo,
    faShoppingCart,
    faTv,
    faMessage,
    faClockRotateLeft, faBookmark, faNewspaper, faStar, faChartSimple
} from '@fortawesome/free-solid-svg-icons';
import className from "./className";

const Sidebar = (props:className) => {
    const { className } = props;
    return (
        <div className={`bg-gray-800 text-gray-100 h-full w-64 flex flex-col ${className}`}>
            <div className="h-16 flex items-center justify-center">
                <div className={'bg-gray-300 rounded-full w-9 h-9 mr-2.5'}></div>
                <h1 className="text-2xl font-bold">Account Name</h1>
            </div>
            <hr className={'border border-gray-700'} />
            <div className="flex-grow p-4">
                <nav className="space-y-2">
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                        <span>Home</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faMessage} className="w-5 h-5" />
                        <span>Messages</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
                        <span>Groups</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faVideo} className="w-5 h-5" />
                        <span>Videos</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                        <span>Marketplace</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faTv} className="w-5 h-5" />
                        <span>Watch</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faClockRotateLeft} className="w-5 h-5" />
                        <span>Memories</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faBookmark} className="w-5 h-5" />
                        <span>Saved</span>
                    </a>

                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faNewspaper} className="w-5 h-5" />
                        <span>Latest news</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
                        <span>Favourites</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800">
                        <FontAwesomeIcon icon={faChartSimple} />
                        <span>Ads</span>
                    </a>

                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
