const WelcomeMsg = ({ showPosts }) => {
    return <center>
        <h3 style={{ margin: '25vh 0px' }}>No Items</h3>
        <button className="btn btn-primary" onClick={showPosts} >Show Posts</button>
    </center>

}; export default WelcomeMsg;