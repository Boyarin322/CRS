import React from 'react';
import {
    faHome,
    faUsers,
    faVideo,
    faShoppingCart,
    faTv,
    faMessage,
    faClockRotateLeft, faBookmark, faNewspaper, faStar, faChartSimple, faQuestion, faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import className from "../interfaces/className";
import SidebarButton from "../ui/SidebarButton";

const Sidebar = (props:className) => {
    const { className } = props;
    return (
        <div className={`bg-gray-800 text-gray-100 h-full  flex flex-col ${className}`}>
            <div className="h-16 flex items-center justify-center">
                <div className={'bg-gray-300 rounded-full w-9 h-9 mr-2.5'}></div>
                <h1 className="text-2xl font-bold">Account Name</h1>
            </div>
            <hr className={'border border-gray-700'} />
            <div className="flex-grow p-4">
                <nav className="space-y-2">
                    <SidebarButton faIcon={faHome} spanText={"Home"} href={"/main"}/>
                    <SidebarButton faIcon={faMessage} spanText={"Messages"} href={"/messages"}/>
                    <SidebarButton faIcon={faUsers} spanText={"Groups"} href={"/groups"}/>
                    <SidebarButton faIcon={faUserGroup} spanText={"Friends"} href={"/friends"}/>
                    <SidebarButton faIcon={faShoppingCart} spanText={"Marketplace"} href={"/marketplace"}/>
                    <SidebarButton faIcon={faTv} spanText={"Watch"} href={"/watch"}/>
                    <SidebarButton faIcon={faClockRotateLeft} spanText={"Memories"} href={"/memories"}/>
                    <SidebarButton faIcon={faBookmark} spanText={"Saved"} href={"/saved"}/>
                    <SidebarButton faIcon={faNewspaper} spanText={"Latest news"} href={"/news"}/>
                    <SidebarButton faIcon={faStar} spanText={"Favourites"} href={"/favourites"}/>
                    <SidebarButton faIcon={faChartSimple} spanText={"Ads"} href={"/ads"}/>
                    <hr className={'border border-gray-700 my-3 w-full'} />
                    <SidebarButton faIcon={faQuestion} spanText={"Other"} classNameMain={"mt-5"} href={"/other"}/>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
