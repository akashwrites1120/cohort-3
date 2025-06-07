import React from "react";
import PostComponent from "./03-useState/PostComponent";
import ToggleMessage from "./02-Conditional Rendering/ToggleMessage";
import NotificationCount from "./02-Conditional Rendering/NotificationCount";
import Posts from "./03-useState/Posts";

function App() {
  return (
    <div>
      {/* <PostComponent /> */}
      <Posts />
      {/* <ToggleMessage /> */}
      {/* <div style={{ background: "#dfe6e9", height: "100vh" }}>
        <NotificationCount />
        <NotificationCount />
        <NotificationCount />
      </div> */}


    </div>
  );
}

export default App;
