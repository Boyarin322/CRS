import React from 'react';
import className from "../interfaces/className";
import '../index.css';
import '../App.css';
import MainPageTopSection from "../modules/MainPageTopSection";
import MainPagePostsSection from "../modules/MainPagePostsSection";

const MainPageContent = (props: className) => {
    const { className } = props;
    return (
        <>
           <MainPageTopSection className={className}/>
           {/*<MainPagePostsSection className={className}/>*/}
        </>
    );
};

export default MainPageContent;