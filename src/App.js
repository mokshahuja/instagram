import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Moksh Ahuja",
      imageUrl:
        "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
      caption: "Hey its me",
      avatarUrl:
        "https://images.unsplash.com/photo-1603502553132-d98b284201f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    },
    {
      username: "Riya Ahuja",
      imageUrl:
        "https://images.unsplash.com/photo-1603503303419-3b90c947735b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
      caption: "Hey its meeeeee",
    },
    {
      username: "Moksh Ahuja",
      imageUrl:
        "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
      caption: "Hey its me",
      avatarUrl:
        "https://images.unsplash.com/photo-1603502553132-d98b284201f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    },
    {
      username: "Moksh Ahuja",
      imageUrl:
        "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
      caption: "Hey its me",
      avatarUrl:
        "https://images.unsplash.com/photo-1603502553132-d98b284201f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    },
  ]);

  return (
    <div className="App">
      {/* Header */}

      <Header />

      {/* posts */}
      {posts.map((post) => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
          avatarUrl={post.avatarUrl}
        />
      ))}
    </div>
  );
}

export default App;
