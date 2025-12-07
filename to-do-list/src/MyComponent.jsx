import React, {useState} from 'react'
function MyComponent()
{
    const [Task, setTask] = useState([]);
    const [newTask, setnewTask] = useState("");
function handleInputChange(e)
{
setnewTask(e.target.value)

}
function AddTask()
{
    if(newTask.trim()!==""){
setTask(t =>[...t, newTask]);
setnewTask("");
    }
}
function DeleteTask(index)
{
const updatedTask = Task.filter((_, i)=> i!= index);
setTask(updatedTask)
}
function moveTaskUp(index)
{
if(index>0)
{
    const updatedTasks = [...Task];
    [updatedTasks[index],updatedTasks[index -1]] = 
    [updatedTasks[index-1],updatedTasks[index]];
    setTask(updatedTasks);
}
}
function moveTaskDown(index)
{
    if(index<Task.length -1)
{
    const updatedTasks = [...Task];
    [updatedTasks[index],updatedTasks[index +1]] = 
    [updatedTasks[index+1],updatedTasks[index]];
    setTask(updatedTasks);
}
}
    return(
    <div className = "Bucket">
        <h1>To-Do-List</h1>
        <div className = "user-input">
            <input type ="text" placeholder = "enter a task"
            onChange ={handleInputChange}/>
            <button 
            className = "add-button"
            onClick = {AddTask}>Add</button>
        </div>
<ol>
    {Task.map((tasks, index) =>
    <li key ={index}>
<span className="text">{tasks}</span>
<button 
className="delete-button"
onClick = {()=> DeleteTask(index)}>Delete</button>
<button 
className="moveup-button"
onClick = {()=> moveTaskUp(index)}>☝️</button>
<button
className="movedown-button"
onClick = {()=> moveTaskDown(index)}>👇</button>
    </li>)}
</ol>
    </div>)
}
export default MyComponent
