import React from 'react'
import style from './components.module.css'

function Input({handleInputTask, newTask}) {
  return (
    <div>
        <input 
            type="text" 
            placeholder="Enter the task..." 
            className={style.userInput} 
            value={newTask}
            onChange={(e) => handleInputTask(e)}
        />
    </div>
  )
}

export default Input
