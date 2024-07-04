import { useContext } from "react";
import Posts from "./Posts";
import { PostList as postListData } from "../contexts/post-list-context";

function PostList() {
    const { postList } = useContext(postListData)
    return (
        <>
            <div style={{ flexDirextion: 'column', display: 'content' }}>
                {postList.map((post) => <Posts key={post.id} post={post} />)}
            </div>


        </>)

} export default PostList;