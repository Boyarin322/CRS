import React from 'react';
import className from "../interfaces/className";
import Post from "./Post";
import { v4 as uuidv4 } from 'uuid';
const MainPagePostsSection = (props: className) => {
    const {className} = props;
    return (
        <div className={`text-white h-full rounded bg-gray-800 row-start-2 row-end-4 ${className}`}>
            <Post nickname={'Andrew Tate'} text={'“In the end, we will remember not the words of our enemies,' +
                'but the silence of our friends.”'} key={uuidv4()}></Post>
            <Post nickname={'Tristian Tate'} text={'“In the end, we will remember not the words of our enemies,' +
                'but the silence of our friends.”'} key={uuidv4()}></Post>
            <Post nickname={'Sulaiman Ahmed'} text={'This leaked CCTV evidence is a fragment of' +
                ' the entire footage which proves their innocence'} key={uuidv4()}/>
        </div>
    );
};

export default MainPagePostsSection;