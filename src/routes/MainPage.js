import React from "react"
import Data from "./Data"
import TodoItem from "./TodoItem.js"
class MainPage extends React.Component {
    constructor() {
        super()
        this.state = {
            todoData: Data
        }
    }

    handleClick = (id) => {
        this.setState(prevState => {
            let checkIfClicked = prevState.todoData.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                    console.log("the item with id " + id + " is set to " + item.completed)
                } 
                return item
            })
            
            return { todoData: checkIfClicked }
        })
    }



    render() {
        let todo = this.state.todoData.map(item => <TodoItem key={item.id} item={item} handleClick={this.handleClick} />)
        return (
            <div>
                This is the main page
                <h1>Everywhere?</h1>
                {todo}
            </div>
        )
    }
}
export default MainPage