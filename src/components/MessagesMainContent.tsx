import React from 'react';
import className from "../interfaces/className";
import {useParams} from "react-router-dom";
const MessagesMainContent = ( props:className) => {
    const {className} = props;

        const {dialogId} = useParams();

        return (
            <div className={`text-white ${className}`}>
                {/*{/TODO: Main message field *!/*/}
                <h2>
                     {dialogId ?
                         'Dialog: ' + dialogId
                         : 'Choose dialog'}
                </h2>
            </div>
        );

}
export default MessagesMainContent;