import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainPageContent from "../components/MainPageContent";
import Ads from "../components/Ads";

const MainPage = () => {
    return (
        <>
            <Header/>
            <div className={"grid grid-rows-3 grid-cols-5 gap-4 w-full"}>
                <Sidebar className={'col-start-1 row-start-1 row-span-3 col-end-2 lg:flex hidden'}/>
                <MainPageContent className={'col-start-1 col-end-6 lg:col-start-2 md:col-end-5 items-center'}/>
                <Ads className={'col-start-5 row-start-1 row-span-3 col-end-6 md:grid hidden'}/>
            </div>
        </>
    );
};

export default MainPage;