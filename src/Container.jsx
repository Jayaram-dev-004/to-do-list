import React, { useState } from "react"
import List from "./List";
import Input from './Input.jsx'
import style from './components.module.css'
import Button from "./Button.jsx";

const Container = () => {

//INITIALIZATION
    const [newTask, setNewTask] = useState("")
    const [tasks, setTask] = useState([{
        task : "Wake up early",
        status :false
    },
    {
        task : "Do Exercise",
        status :false
    },
    {
        task : "Avoid junk foods",
        status :false
    }
])

// FUNCTIONS
    function handleInputTask(e){
        setNewTask(e.target.value);
    }

    function haddleAddTask(){
        if(newTask.trim() !== "")
         {   
            setTask((tasks) =>[...tasks,{task:newTask, status:false} ])
            setNewTask("");
        }
    }
    function checkedBox(ind){
        const checked = tasks.map((e,i) =>  
            (ind === i ? {...e, status:!e.status}:e ))      
        setTask(checked)
    }
    function handledeleteTask(ind){
        const filter = tasks.filter((_, i) => ind !== i )
        setTask(filter)
    }

// REDENDING

    return (
        <div className={style.listContainer}>
           
            <label className= {style.inputWrapper}>
                
                <Input
                    handleInputTask = {handleInputTask}
                    newTask = {newTask}

                />
                
                <p>{tasks.task}</p>
                
                <Button
                    haddleAddTask = {haddleAddTask}
                />

            </label>
            
            
            {tasks.length != 0 ? 
                <ol>
                   <List
                    checkedBox = {checkedBox}
                    handledeleteTask = {handledeleteTask}
                    tasks = {tasks}
                   />
                </ol>
                
            :<h3 className={style.task} style={{marginTop:'20px', cursor:"default"}}>Add a task</h3>}
        </div>
    )
}

export default Container;