import { useContext } from "react";
import Posts from "./Posts";
import { PostList as postListData } from "../contexts/post-list-context";
import WelcomeMsg from './WelcomeMsg';

function PostList() {
    const { postList, addInitialPost } = useContext(postListData)
    const handleshowPosts = () => {
        fetch('https://dummyjson.com/posts').then(res => res.json()).then(data => addInitialPost(data.posts)
        )
        console.log({ handleshowPosts });

    }

    return (
        <>
            <div style={{ flexDirection: 'column', display: 'content' }}>
                {postList.length === 0 && <WelcomeMsg showPosts={handleshowPosts}></WelcomeMsg>}
                {postList.map((post) => <Posts key={post.id} post={post} />)}
            </div>


        </>)

} export default PostList;