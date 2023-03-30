import React from 'react';
import {
    faHome,
    faUsers,
    faVideo,
    faShoppingCart,
    faTv,
    faMessage,
    faClockRotateLeft, faBookmark, faNewspaper, faStar, faChartSimple, faQuestion
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
                    <SidebarButton faIcon={faHome} spanText={"Home"} href={"/"}/>
                    <SidebarButton faIcon={faMessage} spanText={"Messages"} href={"/"}/>
                    <SidebarButton faIcon={faUsers} spanText={"Groups"} href={"/"}/>
                    <SidebarButton faIcon={faVideo} spanText={"Videos"} href={"/"}/>
                    <SidebarButton faIcon={faShoppingCart} spanText={"Marketplace"} href={"/"}/>
                    <SidebarButton faIcon={faTv} spanText={"Watch"} href={"/"}/>
                    <SidebarButton faIcon={faClockRotateLeft} spanText={"Memories"} href={"/"}/>
                    <SidebarButton faIcon={faBookmark} spanText={"Saved"} href={"/"}/>
                    <SidebarButton faIcon={faNewspaper} spanText={"Latest news"} href={"/"}/>
                    <SidebarButton faIcon={faStar} spanText={"Favourites"} href={"/"}/>
                    <SidebarButton faIcon={faChartSimple} spanText={"Ads"} href={"/"}/>
                    <hr className={'border border-gray-700 my-3 w-full'} />
                    <SidebarButton faIcon={faQuestion} spanText={"Other"} classNameMain={"mt-5"} href={"/"}/>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
