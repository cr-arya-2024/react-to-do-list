import React,{useState} from "react";
function Component(){
const [tasks,setTask]=useState([]);
const [newTask,setNewTask]=useState("")
    
function handleInputChange(e){
    setNewTask(e.target.value)
}
function add(){
   if(newTask.trim()!==""){
    setTask(t=>[...t,newTask])
    setNewTask("")
   }
}
function remove(index){
setTask(tasks.filter((_,i) => i!== index))
}
function moveup(index){

    if (index > 0){
   
        let update=[...tasks];
        [update[index],update[index-1]]=[update[index-1],update[index]]
   
    setTask(update)
    }
}
function movedown(index){
    
if (index < tasks.length-1){
   
    let update=[...tasks];
    [update[index],update[index+1]]=[update[index+1],update[index]]

setTask(update)
  
}
}
return(
<>
<div className="container">
    <h1>To Do List</h1>
    <input value={newTask} placeholder="Enter the Task..." onChange={handleInputChange}  type="text"/>
    <button className="add-btn" onClick={add}>Add</button>
    <ol>{tasks.map((task,index)=><li key={index}>{task}
    <button className="add-btn" onClick={()=>remove(index)}>Delete</button>
    <button className="btn" onClick={()=>moveup(index)}>Up</button>
    <button className="btn" onClick={()=>movedown(index)}>Down</button>
    </li>)}</ol>
    </div></>

    )
}
export default Component