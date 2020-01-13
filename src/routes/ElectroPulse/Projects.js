import React from "react"

class Projects extends React.Component {
    render(){
        return(
            <div style={{backgroundColor:"black",color:"azure"}}>
                <h3>Active Projects</h3>
                <ul style={{listStyle:"none"}}>
                    <li>Peshtera</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
                <h3>Finished Projects</h3>
                <ul style={{listStyle:"none"}}>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </div>
        )
    }
}

export default Projects