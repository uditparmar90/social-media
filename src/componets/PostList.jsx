import { useContext } from "react";
import Posts from "./Posts";
import { PostList as postListData } from "../contexts/post-list-context";
import WelcomeMsg from './WelcomeMsg';

function PostList() {
    const handleshowPosts = () => {
        console.log('handleshowPosts')

    }
    const { postList } = useContext(postListData)
    return (
        <>
            <div style={{ flexDirextion: 'column', display: 'content' }}>
                {postList.length === 0 && <WelcomeMsg showPosts={handleshowPosts}></WelcomeMsg>}
                {postList.map((post) => <Posts key={post.id} post={post} />)}
            </div>


        </>)

} export default PostList;