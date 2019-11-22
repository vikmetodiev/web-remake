import React from "react"

function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" onChange={() => props.handleClick(props.item.id)}/>{props.item.text}
        </div>
    )
}
export default TodoItem