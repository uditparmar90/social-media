import { createContext, useReducer } from "react";

// Default context value
const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    addInitialPost: () => { }
};

// Create the context 
const PostList = createContext(DEFAULT_CONTEXT);

// Reducer function to handle actions
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList
    switch (action.type) {
        case ('ADD_INITIAL_POST'):
            newPostList = action.payload.posts;
            console.log(newPostList)
            break;
        case ('DELETE_POST'):
            newPostList = currPostList.filter(post => post.id !== action.payload.postId)
            break;

        case ('ADD_POST'):
            newPostList = [action.payload, ...currPostList]
            break;
    }
    return (newPostList)
};

// Provider component
const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (userId, title, desc, tags, reactions) => {
        console.log(userId, title, desc, tags, reactions)
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                userId: userId,
                title: title,
                desc: desc,
                tags: tags,
                reactions: reactions,
            }
        })
    };

    const addInitialPost = (posts) => {
        // console.log(userId, title, desc, tags, reactions)
        dispatchPostList({
            type: 'ADD_INITIAL_POST',
            payload: {
                posts
            }
        })
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId: postId,
            }
        })
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost, addInitialPost }}>
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
