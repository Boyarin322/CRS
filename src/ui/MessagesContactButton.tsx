import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface MessagesContactButtonProps {
    faIcon: IconProp,
    className: string,
    contactName: string,
    href?: string
}

const MessagesContactButton = ({ faIcon, className, contactName, href }:MessagesContactButtonProps) => {
    return (
        <div className={`py-2 ${className}`}>
            <FontAwesomeIcon icon={faIcon} className={'w-5 h-5 mr-2'}/>
            <span>{contactName}</span>
        </div>
    );
};

export default MessagesContactButton;