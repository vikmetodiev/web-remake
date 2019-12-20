import React from "react"
import todosData from "./Data.js"
import DifferentTodo from "./DifferentTodo.js"
import { Row } from "reactstrap"
import {observer} from "mobx-react"
@observer
class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            todoData: todosData
        }
    }
    handleClick = (id) => {
        console.log(id)
        this.setState(prevState => {
            let updatedState = prevState.todoData.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                } return item
            })
            return { todoData: updatedState }

        })

    }
    render() {
        let todoList = this.state.todoData.map(item => <DifferentTodo key={item.id} item={item} handleClick={this.handleClick} />)
        return (
            <div className="todo-list">
                <h1 style={{color:"azure"}}>Todo List</h1>
                <Row>
                    {todoList}
                </Row>
            </div>
        )
    }
}
export default TodoList 