import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") return ;
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
       {/* map은 array에 있는 item 하나하나에 접근이 가능 */}
       <ul>
         {toDos.map((item, index) => <li key={index}>{item}</li>)}
       </ul>
    </div>
  );
}

export default App;
