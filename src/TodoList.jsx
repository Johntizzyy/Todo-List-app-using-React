import { useState } from "react";
import "./TodoList.css"

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const today = new Date()
const hour = today.getHours()
const min = today.getMinutes()
const day = today.getDate()
const month = String(today.getMonth())
const year = today.getFullYear()

// const date = document.getElementById('date')
// date.innerHTML = `${day}-${(month.length == 1)?"0"+month:month}-${year}`


function formatTime () {

    const H = (hour>12) ? hour - 12 : hour
    const amPm = (hour > 12)? "pm" : "am"
    return (`${H}:${min} ${amPm}`)
}


  function addTask() {
    const newTask = document.getElementById("newTask").value;
    if (newTask) {
      setTasks([...tasks, newTask]);
      document.getElementById("newTask").value = "";
    }
  }

  // function removeTask(i) {
  //   tasks.filter((_, index) => i !== index);
  // }

  return (
    <div className="container">
      <div class="header">
        <p id="today">Today </p>
        <p id="date">{`${day}-${(month.length == 1)?"0"+month:month}-${year}`}</p>
      </div>

      {/* <h1 className="todoList">To Do list App</h1> */}

      <div className="form">
        <input type="text" id="newTask" placeholder="Enter a task" autoFocus/>
        <input onClick={addTask} id="button" type="button" value="Add"/>
      </div>

      <ul id="list">
        {tasks.map((task) => (
          <li>
            <span>{task}</span>
            <span className="time">{formatTime()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  ff;
}

export default TodoList;
