import { useContext, useRef } from "react";
import { PostList } from "../contexts/post-list-context";


function CreatePost() {
    const { addPost } = useContext(PostList);

    const userIdElement = useRef();
    const titleElement = useRef();
    const descElement = useRef();
    const tagsElement = useRef();
    const reactionsElement = useRef();

    const haldleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const title = titleElement.current.value;
        const desc = descElement.current.value;
        const tags = tagsElement.current.value.split(' ');
        const reactions = reactionsElement.current.value;

        userIdElement.current.value = '';
        titleElement.current.value = '';
        descElement.current.value = '';
        tagsElement.current.value = '';
        reactionsElement.current.value = '';
        addPost(userId, title, desc, tags, reactions)




    }

    return (
        <form style={{ margin: 'auto', alignItems: 'center', width: '30rem', border: '1px solid #bfbfbf', padding: '8px', borderRadius: '4px' }} onSubmit={haldleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">id</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your id" ref={userIdElement} />
                {/* <small id="emailHelp" className="form-text text-muted">we well never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title" ref={titleElement} />
                {/* <small id="emailHelp" className="form-text text-muted">we well never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
                <label htmlFor="decription">Decription</label>
                <textarea type="text" className="form-control" id="decription" aria-describedby="emailHelp" rows='4' placeholder="decription" ref={descElement} />
            </div>
            <div className="form-group">
                <label htmlFor="tag">Tags</label>
                <input type="text" className="form-control" id="tag" aria-describedby="emailHelp" placeholder="Enter tag" ref={tagsElement} />
            </div>
            <div className="form-group">
                <label htmlFor="reactions">reactions</label>
                <input type="number" className="form-control" id="reactions" placeholder="reactions" ref={reactionsElement} />
            </div>
            {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default CreatePost;
