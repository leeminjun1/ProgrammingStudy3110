import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0) 
  //상태. 기본값 0. count 이전 또는 현재 값. setCount로 값 지정
  //count 값을 변경될 때, setCount를 사용해서 변경해야 함 =? react가 count 상태변화를 눈치챔           

  return (
    <>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>+1</button>
        <button onClick={() => setCount((count) => count + 2)}>+2</button>
        <button onClick={() => setCount((count) => count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount((count) => count + 1 >= 10 ?  10 : count + 1)}>+(최대 10까지)</button>
        <button onClick={() => setCount((count) => count + 1 >= 10 ?  10 : count + 1)}>+(최대 10까지)</button>
        <button onClick={() => setCount((count) => Math.min(k10, count + 1))}>+(최대 10까지)</button>
        <button onClick={() => setCount((count) => {
          if (count + 1 >= 10) return 10;
          return count + 1;
        })}>+(최대 10까지)</button>
        <button onClick={() => setCount((count) => count + 1 >= 10 ?  10 : count + 1)}>+(최대 10까지)</button>
        <button onClick={() => plusMax10()}>+(최대10까지)</button>
        <button onClick={plusMax10}>+(최대10까지)</button>
      {/* <section>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section> */}
    </>
  )
}

export default App
