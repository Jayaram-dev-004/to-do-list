import React from 'react'
import style from './components.module.css'
function Button({haddleAddTask}) {
  return (
    <div>
      <button 
        className={style.addButton} 
        type="button"
        onClick={haddleAddTask}
        > 
        ADD</button>
    </div>
  )
}

export default Button
