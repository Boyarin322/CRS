import React from 'react';
import className from "../interfaces/className";
import Post from "./Post";
import { v4 as uuidv4 } from 'uuid';
import state from "../state";
const MainPagePostsSection = (props: className) => {
    let posts = state.posts.map(e =>
        <Post nickname={e.name} text={e.postText} key={uuidv4()}/>);

    const {className} = props;
    return (
        <div className={`text-white h-full rounded bg-gray-800 row-start-2 row-end-4 ${className}`}>
            {posts}
        </div>
    );
};

export default MainPagePostsSection;