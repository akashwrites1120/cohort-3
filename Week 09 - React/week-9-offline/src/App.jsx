import React from "react";
import PostComponent from "./PostComponent";
import ToggleMessage from "./Conditional Rendering/ToggleMessage";
import NotificationCount from "./Conditional Rendering/NotificationCount";

function App() {
  return (
    <div>
      {/* <PostComponent /> */}
      {/* <ToggleMessage /> */}
      <div style={{ background: "#dfe6e9", height: "100vh" }}>
        <NotificationCount />
        <NotificationCount />
        <NotificationCount />
      </div>
    </div>
  );
}

export default App;
