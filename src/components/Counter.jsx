import { useState, useEffect } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

    //everytime when component rendered or re-rendered
    useEffect(() => {
      console.log("Counter Mounted when state changes!");
    });
    

  //when whole component mount---> first time only
  useEffect(() => {
    console.log("CounterApp Mounted!");

    return () => {
      console.log("CounterApp Unmounted!");
    };
  }, []);

  //when count variable changes
  useEffect(() => {
    console.log("User Updated Counter: ", count);

    return () => {
      console.log("Counter useEffect Unmounted!", count);
    };
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment-x</button>
      <button onClick={() => setCount(count - 1)}>Decrement-x</button>
    </div>
  );
};

export default Counter;
