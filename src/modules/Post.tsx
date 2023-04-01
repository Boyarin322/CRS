import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";


interface PostProps{
    text: string,
    className?:string,
    nickname?: string | 'Nickname',
}
const Post = ({text, className, nickname}: PostProps) => {
    const date:Date = new Date();
    let [likes, setLikes] = useState(0);

    const updateLikes = () =>{
        setLikes(likes + 1);
    }

    return (
        <>
            <div className={`flex flex-row ${className}`}>
                <div className={'mt-1 ml-2.5 rounded-full bg-gray-400 h-10 w-10'}></div>
                <div className={'text-2xl mt-2.5 ml-3'}>{nickname}</div>
                <div className={'text-base mt-4 ml-3 text-gray-600'}>{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</div>
                <FontAwesomeIcon icon={faHeart} onClick={updateLikes} className={'mt-3 ml-3 hover:text-red-500 transition'} size={"xl"}/>
                <div style={{ userSelect: 'none' }} className={'font-extrabold ml-3 mt-3'}>{likes}</div>
            </div>
            <div className={'flex flex-row'}>
                <pre className={'ml-5 mt-5'}>{text}
                </pre>
            </div>
            <hr className={'border border-gray-700 w-full mt-2'}/>
        </>
    );
};

export default Post;