import React from 'react';
import PostButton from "../ui/PostButton";
import className from "../interfaces/className";

const MainPageTopSection = (props: className) => {
    const {className} = props;
    return (

            <div className={` text-white h-1/3 rounded bg-gray-800 ${className}`}>
                <div className={'text-2xl font-medium mt-1 ml-2.5'}>Home</div>
                <div className={'w-full flex flex-row mt-5'}>
                    <div className={'flex-grow text-center text-2xl hover:bg-gray-700  border-b-4 border-b-gray-700  px-10 py-3 transition'}>
                        For you
                    </div>
                    <div className={'flex-grow text-center text-2xl hover:bg-gray-700  border-b-4 border-b-gray-700  px-10 py-3 transition'}>
                        Following
                    </div>
                </div>
                <div className={'w-full flex flex-row mt-5'}>
                    <div className={'rounded-full bg-gray-400 h-10 w-10 ml-3'}></div>
                    <input
                        type="text"
                        className="block w-3/4 ml-3 h-8 md:h-10 pl-5 pr-3 rounded-full bg-gray-700 text-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="What is on your mind?"
                    />
                    <PostButton/>
                </div>
            </div>
    );
};

export default MainPageTopSection;