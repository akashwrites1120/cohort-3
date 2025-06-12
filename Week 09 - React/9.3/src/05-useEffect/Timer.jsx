import { useEffect, useState } from "react"


function Timer() {
    const [count1, setCount1] = useState(0)
    const[count2, setCount2 ] = useState(100)

    function increaseCount(){
        setCount1(currentVal => currentVal + 1)
    }

    function decreaseCount(){
        setCount2(currentVal => currentVal - 1)
    }

    useEffect(function(){
        setInterval(increaseCount, 5000)
        setInterval(decreaseCount, 8000)
    }, [])

    useEffect(function(){
        console.log("The count has been updated to " + count1)
    }, [count1])
    
  return (
    <div>
        <div>
            {count1} Counter 1
        </div>
        <div>
            {count2} Counter 2
        </div>
    </div>
  )
}

export default Timer