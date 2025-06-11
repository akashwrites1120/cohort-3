import React from "react";
import PostComponent from "./03-useState/PostComponent";
import ToggleMessage from "./07-Conditional Rendering/ToggleMessage";
import NotificationCount from "./05-useEffect/NotificationCount";
import Posts from "./03-useState/Posts";
import Timer from "./05-useEffect/Timer";
import LinkedinLikeTopbar from "./05-useEffect/LinkedinLikeTopbar";
import Countdown from "./05-useEffect/Countdown";

function App() {
  return (
    <div>
      {/* <PostComponent /> */}
      {/* <Posts /> */}
      {/* <ToggleMessage /> */}
      {/* <div style={{ background: "#dfe6e9", height: "100vh" }}>
        <NotificationCount />
        <NotificationCount />
        <NotificationCount />
      </div> */}

      {/* <Timer /> */}

      {/* <LinkedinLikeTopbar /> */}
      <Countdown />


    </div>
  );
}

export default App;
