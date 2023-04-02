import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {NavLink} from "react-router-dom";


interface SidebarButtonProps {
    faIcon: IconProp;
    spanText: string,
    href: string,
    className?: string,
    classNameMain?: string
}
const SidebarButton = ({ faIcon, className, spanText, href, classNameMain }: SidebarButtonProps) => {
    return (
        <NavLink
            to={href}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg 
        hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800 active:text-amber-500 ${classNameMain}`}>

            <FontAwesomeIcon icon={faIcon} className={`w-5 h-5 ${className}`} />
            <span>{spanText}</span>
        </NavLink>
    );
};
export default SidebarButton;