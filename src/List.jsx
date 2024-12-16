import React from 'react'
import style from './components.module.css'
import { MdDeleteSweep } from "react-icons/md";

function List({handledeleteTask, checkedBox, tasks}) {
  return (
    <>
      {tasks.map((item, ind) => 
        <li key={ind} className={style.task}  >
            <input 
                type="checkbox" 
                checked = {item.status} 
                onChange={() => checkedBox(ind)} 
            />
            <span className={style.item}>{item.task}</span>
            <MdDeleteSweep role="button"  onClick = {() => (handledeleteTask(ind))}/>
        </li>
       )}
    </>
  )
}

export default List
