import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setVisible] = useState(false);
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={() => setVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered</p>}
    </div>
  );
}

export default ToggleMessage;
