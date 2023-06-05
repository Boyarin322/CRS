import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AdsSection from "../components/AdsSection";
import ContactsSidebar from "../components/ContactsSidebar";


const Messages = () => {
    return (
        <>
            <Header/>
            <div className={"grid grid-rows-3 grid-cols-5 gap-4 w-full"}>
                <Sidebar className={'col-start-1 row-start-1 row-span-3 col-end-2 lg:flex hidden'}/>
                <ContactsSidebar className={'col-start-2 row-start-1 row-span-3 col-end-3 lg:flex hidden'}/>
                <AdsSection className={'col-start-5 row-start-1 row-span-3 col-end-6 md:grid hidden'}/>
            </div>
        </>
    );
};

export default Messages;