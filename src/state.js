import {rerenderEntireTree} from "./rerenderEntireTree";

let state = {
    posts: [
        {name: 'Andrew Tate', postText:'Tesla is for geeks'},
        {name: 'Tristian Tate', postText:'Tesla is for geeks'},
        {name: 'Luc Tate', postText:'Tesla is for geeks'},
        {name: 'Andrew Tate', postText:'Tesla is for geeks'}
    ],
    contacts: [
        {name: 'Lokh', messageText: 'You are moron'},
        {name: 'Hr', messageText: 'You are moron'},
        {name: 'Max', messageText: 'You are moron'},
        {name: 'Kybay', messageText: 'You are moron'},
        {name: 'Lanovka', messageText: 'You are moron'},
        {name: 'l7891011', messageText: 'You are moron'}
    ]
}
export let addPost = (postText, name) => {
    let newPost = {name: name, postText: postText}
    state.posts.push(newPost);
    rerenderEntireTree();
}
export default state;