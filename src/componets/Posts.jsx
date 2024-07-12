import { useContext } from "react";
import logo from "../assets/card.jpg";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PostList } from "../contexts/post-list-context";
function Posts({ post }) {
    const { deletePost } = useContext(PostList)

    return (
        <>
            <div className="card" style={{ width: '20rem', marginBottom: '4px' }}>
                <img className="card-img-top" src={logo} alt="Card image cap" />
                <div className="card-body" >
                    <h5 className="card-title mb-0">{post.title}</h5>
                    <p className="card-text mb-0">{post.body}</p>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <button type="button" className="btn btn-light p-1">
                            <FaHeart style={{ color: 'red' }} />
                            {/* <small className="sr-only">{post.reactions}</small> */}
                        </button>
                        <button type="button" className="btn btn-light p-1" onClick={() => deletePost(post.id)}>
                            <MdDelete />
                        </button>
                    </div>
                    <div className="mt-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="badge bg-secondary text-white m-1">{tag}</span>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )

} export default Posts;