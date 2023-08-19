import './App.css';
import {useState} from 'react'
function App() {
  const [todoList,setToDoList] = useState([]);
  const [newTask,setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // let arr = [];
    // const name = "Gana";
    // arr.push(name);
    // const newToDoList = [...todoList,newTask];
    // setToDoList(newToDoList);
    //{That's property spread notation. It was added in ES2018 (spread for arrays/iterables was 
    //earlier, ES2015), but it's been supported in React projects for a long time via transpilation 
    //(as "JSX spread attributes" even though you could do it elsewhere, too, not just attributes).}
    setToDoList([...todoList,newTask]);
  };

  return (
    <div className = "App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return <h1>{task}</h1>
        })}
      </div>
    </div>
  );
}
export default App;
