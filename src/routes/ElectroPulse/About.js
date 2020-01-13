import React from "react"

class About extends React.Component {
    render(){
        return(
            <div style={{backgroundColor:"black", color:"azure"}}>
                <h4>Electro Pulse is a small company that has been established in 2016, 
                    it deals mainly with all kind of electricity installations sphere!</h4>
                    <h5>Few of the projects that we've worked upon are: </h5>
                <ol style={{listStyle:"none"}}>
                    <li>1. first</li>
                    <li>2. second</li>
                    <li>3. third</li>
                    <li>4. fourth</li>
                    <li>5. fifth</li>
                    <li>6. sixth</li>
                </ol>
            </div>
        )
    }
}

export default About