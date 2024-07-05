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
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList
    switch (action.type) {
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

    const addPost = (userId, title, desc, tags, likes) => {

        console.log(userId, title, desc, tags, likes)
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                userId: userId,
                title: title,
                desc: desc,
                tags: tags,
                likes: likes,


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
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};
// const DEFAULT_POST_LIST = fetch('https://dummyjson.com/carts').then(res => res.json()).then(data => (data.carts))
// console.log(DEFAULT_POST_LIST);
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
