import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  
  useEffect(() => {
    console.log("created!");
    return () => console.log("destroyed.."); // 해당 컴포넌트가 제거되었을 때 -> cleanup function 많이 사용하지는 않음
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick2 = () => setShowing((prev) => !prev);

  console.log("i run all the time");// api 호출시 state가 변경되었을 때 render되길 원하지 않고, 첫번째 render만 원한다

  // useState: state가 변경되면 모든 컴포넌트가 재실행됨
  // useEffect: 코드를 실행시킬 시점을 정할 수 있음
  useEffect(() => {
    console.log("i run only once.");
  }, []); // 빈 array이면 코드가 딱 한번만 render되도록 함

  useEffect(() => { //counter올릴 때는 실행하지말고, keyword 검색시에만 실행되도록
    if(keyword !== "") {
      console.log("i run when 'keyword' changes ", keyword);
    }
  }, [keyword]); // keyword가 변화할 때 코드를 실행하라고 react.js에게 알림

  useEffect(() => {
    if(counter !== 0){
      console.log("i run when 'counter' changes ", counter)
    }
  }, [counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <br/>
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
