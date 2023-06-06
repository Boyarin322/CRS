import React from 'react';
import className from "../interfaces/className";
import MessagesContactButton from "../ui/MessagesContactButton";
import {faCircleUser, faMessage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactsSidebar = (props:className) => {
    const {className} = props;
    return (
        <div className={`bg-gray-700 h-full text-white  flex flex-col ${className}`}>
            <h2 className="text-2xl font-bold mb-4 ml-5 mt-4 ">
                <FontAwesomeIcon icon={faMessage} className={"w-5 h-5 mr-2.5"}/>
                Dialogs
            </h2>
            <hr className={'border border-gray-500'} />
            <ul className={'ml-3 mt-3'}>
                <MessagesContactButton faIcon={faCircleUser} href={'/messages/1'} contactName={"Noname"} messageText={'u are loh'}/>
                <MessagesContactButton faIcon={faCircleUser} href={'/messages/2'} contactName={"Noname"} messageText={'dsds'}/>
                <MessagesContactButton faIcon={faCircleUser} href={'/messages/3'} contactName={"Noname"} messageText={'u are loh'}/>
                <MessagesContactButton faIcon={faCircleUser} href={'/messages/4'} contactName={"Noname"} messageText={'u are loh'}/>
                <MessagesContactButton faIcon={faCircleUser} href={'/messages/5'} contactName={"Noname"} messageText={'u are loh'}/>
                <MessagesContactButton faIcon={faCircleUser} href={'/messages/6'} contactName={"Noname"} messageText={'u are loh'}/>
                <MessagesContactButton faIcon={faCircleUser} href={'/messages/7'} contactName={"Noname"} messageText={'u are loh'}/>
            </ul>
        </div>
    );
};

export default ContactsSidebar;