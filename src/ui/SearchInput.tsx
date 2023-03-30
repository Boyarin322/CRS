import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
    return (
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
    );
};

export default SearchInput;