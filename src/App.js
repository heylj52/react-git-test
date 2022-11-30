import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");// api 호출시 state가 변경되었을 때 render되길 원하지 않고, 첫번째 render만 원한다
  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, []); // 코드가 딱 한번만 render되도록 함
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!!!</h1>
      
    </div>
  );
}

export default App;
