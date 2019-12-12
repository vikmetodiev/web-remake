import React from "react"
import Galery from "./Galery.js"

class MainPage extends React.Component {


    render() {

        return (
            <div>
                <h1 style={{color:"azure"}}>This is the main page</h1>

                <Galery/>
            </div>
        )
    }
}
export default MainPage