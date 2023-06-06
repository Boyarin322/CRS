import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {NavLink} from "react-router-dom";

interface MessagesContactButtonProps {
    faIcon: IconProp,
    className?: string,
    contactName: string,
    href: string,
    messageText: string
}

const MessagesContactButton = ({ faIcon, className, contactName, href, messageText }:MessagesContactButtonProps) => {
    return (
        <NavLink to={href} className={`py-2 hover:bg-gray-600 ${className}`}>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faIcon} className="w-5 h-5 mr-2" />
                <div className="flex flex-col">
                    <span>{contactName}</span>
                    <span className="text-sm text-gray-500">{messageText}</span>
                </div>
            </div>
        </NavLink>
    );
};

export default MessagesContactButton;