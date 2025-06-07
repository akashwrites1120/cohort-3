import { useState } from "react";

function NotificationCount() {
  const [NotificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(NotificationCount + 1);
  }
  return (
    <div>
      <button onClick={increment} style={{ marginRight: 8 }}>
        Increase Count
      </button>
      {NotificationCount}
    </div>
  );
}

export default NotificationCount;
