import "./App.css";
import Sidebar from "./componets/Sidebar";
import Footer from "./componets/Footer";
import NavBar from "./componets/NavBar";
import CreatePost from "./componets/CreatePost";
import PostList from "./componets/PostList";
import { useState } from "react";
import PostListProvider from "./contexts/post-list-context";

function App() {
  const [selectedTab, setSelectedTab] = useState('Home');


  return (
    <>
      <PostListProvider>
        <div className="app-container"></div>
        <NavBar />
        <div className="main-container" style={{ display: 'flex', flexDirection: 'row' }}>
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div style={{ margin: '20px auto' }}>
            {selectedTab === 'Home' ? <PostList /> : <CreatePost />}
          </div>

        </div>

        <Footer />
      </PostListProvider>
    </>
  )
}

export default App;
