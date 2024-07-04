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
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            <button type="button" className="btn m-0 p-1 btn-light" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <FaHeart style={{ color: 'red' }} />
                                <small className="sr-only" >{post.reactions}</small>
                            </button>
                        </div>
                        <div>
                            <button type="button" className="btn m-0 p-1 btn-light" onClick={() => deletePost(post.id)}><MdDelete /></button> </div>

                    </div>
                    {post.tags.map(tag => (
                        // <span key={tag} className="badge badge-primary">{tag}</span>
                        <span className="badge bg-secondary text-white m-1" key={tag} style={{ color: 'blue' }}>{tag}</span>
                    ))}

                </div>
            </div >
        </>
    )

} export default Posts;