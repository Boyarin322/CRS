import React from 'react';
import className from "./className";

const MainPageContent = (props: className) => {
    const { className } = props;
    return (
        <div className={`w-full rounded bg-gray-800 ${className}`}>

        </div>
    );
};

export default MainPageContent;