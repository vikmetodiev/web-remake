import React from "react"

class Contacts extends React.Component {
    render(){
        return(
            <div style={{backgroundColor:"black",color:"azure"}}>
                <h3>You can get in touch with us through: </h3>
                <ul style={{listStyle:"none"}}>
                    <li>Facebook: </li>
                    <li>Email: </li>
                    <li>Phone: </li>
                </ul>
            </div>
        )
    }
}

export default Contacts