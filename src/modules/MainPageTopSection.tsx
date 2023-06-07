import React, { useRef } from 'react';
import className from "../interfaces/className";
import { addPost } from "../state";

const MainPageTopSection = (props: className) => {
    const { className } = props;
    const postTextarea = useRef<HTMLInputElement>(null);

    const handleAddPost = () => {
        if (postTextarea.current && postTextarea.current.value) {
            addPost(postTextarea.current.value, 'You');
            postTextarea.current.value = ''; // Reset the input field after posting
        }
    };

    return (
        <div className={`text-white h-full rounded bg-gray-800 row-start-1 row-end-2 ${className}`}>
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
                    ref={postTextarea}
                />
                <div
                    className={'rounded-full ml-3 pt-1.5 bg-blue-500 px-10 hover:bg-blue-600 hover:text-gray-200 transition'}
                    onClick={handleAddPost}
                >
                    Post
                </div>
            </div>
        </div>
    );
};

export default MainPageTopSection;
