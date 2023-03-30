import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainPageContent from "../components/MainPageContent";
import Ads from "../components/Ads";

const MainPage = () => {
    return (
        <>
            <Header/>
            <div className={"grid grid-cols-5 gap-4 w-full"}>
                <Sidebar className={'col-start-1 col-end-2 lg:flex hidden'}/>
                <MainPageContent className={'col-start-2 col-end-5 items-center'}/>
                <Ads className={'col-start-5 col-end-6 md:grid hidden'}/>
            </div>
        </>
    );
};

export default MainPage;