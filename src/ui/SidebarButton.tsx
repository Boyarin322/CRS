import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";


interface SidebarButtonProps {
    faIcon: IconProp;
    spanText: string,
    href: string,
    className?: string,
    classNameMain?: string
}
const SidebarButton = ({ faIcon, className, spanText, href, classNameMain }: SidebarButtonProps) => {
    return (
        <a href={href} className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-r-blue-800 ${classNameMain}`}>
            <FontAwesomeIcon icon={faIcon} className={`w-5 h-5 ${className}`} />
            <span>{spanText}</span>
        </a>
    );
};
export default SidebarButton;