import React from 'react';
import className from "../interfaces/className";

const MainPagePostsSection = (props: className) => {
    const {className} = props;
    return (
        <div className={`mt-10 bg-gray-700 rounded h-2/3 ${className}`}>

        </div>
    );
};

export default MainPagePostsSection;