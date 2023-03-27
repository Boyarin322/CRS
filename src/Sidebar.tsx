import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faVideo, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-800 text-gray-100 h-full w-64 flex flex-col">
            <div className="h-16 flex items-center justify-center">
                <div className={'bg-gray-300 rounded-full w-9 h-9 mr-2.5'}></div>
                <h1 className="text-2xl font-bold">Account Name</h1>
            </div>
            <div className="flex-grow p-4">
                <nav className="space-y-2">
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                        <span>Home</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
                        <span>Friends</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faVideo} className="w-5 h-5" />
                        <span>Videos</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                        <span>Marketplace</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                        <span>Marketplace</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                        <span>Marketplace</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                        <span>Marketplace</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                        <span>Marketplace</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                        <span>Marketplace</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                        <span>Marketplace</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                        <span>Marketplace</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                        <span>Marketplace</span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
