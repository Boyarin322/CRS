import React from 'react';
import className from "../interfaces/className";
import MessagesContactButton from "../ui/MessagesContactButton";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";

const ContactsSidebar = (props:className) => {
    const {className} = props;
    return (
        <div className={`bg-gray-700 h-full text-white  flex flex-col ${className}`}>
            <h2 className="text-2xl font-bold mb-4 ml-3 mt-4 ">Dialogs</h2>
            <hr className={'border border-gray-500'} />
            <ul className={'ml-3 mt-3'}>
                <MessagesContactButton faIcon={faCircleUser} className={""} contactName={"Noname"}/>
                <MessagesContactButton faIcon={faCircleUser} className={""} contactName={"Noname"}/>
                <MessagesContactButton faIcon={faCircleUser} className={""} contactName={"Noname"}/>
                <MessagesContactButton faIcon={faCircleUser} className={""} contactName={"Noname"}/>
                <MessagesContactButton faIcon={faCircleUser} className={""} contactName={"Noname"}/>
                <MessagesContactButton faIcon={faCircleUser} className={""} contactName={"Noname"}/>
                <MessagesContactButton faIcon={faCircleUser} className={""} contactName={"Noname"}/>
            </ul>
        </div>
    );
};

export default ContactsSidebar;