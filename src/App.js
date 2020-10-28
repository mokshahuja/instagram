import { useEffect, useState } from "react";
import "./App.css";

import Header from "./Header";
import Post from "./Post";
import { db } from "./firebase.js";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  return (
    <div className="App">
      {/* Header */}

      <Header />

      {/* posts */}
      <div className="posts">
        {posts.map(({ post, id }) => (
          <Post
            key={id}
            username={post.username}
            imageUrl={post.imageUrl}
            caption={post.caption}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
