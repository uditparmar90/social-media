import { createContext, useReducer } from "react";

// Default context value
const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => { },
    deletePost: () => { }
};

// Create the context
const PostList = createContext(DEFAULT_CONTEXT);

// Reducer function to handle actions
const postListReducer = (cuurPostList, action) => {
    return (cuurPostList)
};

// Provider component
const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = () => {
    };

    const deletePost = (id) => {
        console.log(id)
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};
const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'mumbai',
    body: 'enjoy time !! mumbai.......',
    reactions: '100',
    useId: 'user_007',
    tags: ['#mumbai', '#enjoy']
},
{
    id: '5',
    title: 'collage',
    body: 'enjoy time !! collage.......',
    reactions: '45',
    useId: 'user_707',
    tags: ['#collage', '#enjoy']
}]

export default PostListProvider;
export { PostList };
