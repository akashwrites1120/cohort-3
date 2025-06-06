import { useState } from "react"


function ToggleMessage() {
    const [isVisible, setVisible] = useState(false)
  return (
    <div>
        <button onClick={()=>setVisible(!isVisible)}>Toggle Message</button>
        {isVisible && <p>This message is conditionally rendered</p> }
    </div>
  )
}

export default ToggleMessage