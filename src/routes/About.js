import React from "react"
import Calendar from "./Calendar.js"
import "./Calendar.css"
import Hoverable from "./Hover.js"
import {Row, Container } from "reactstrap"

const HoverableElement = props => (
    <Hoverable>
        {(isMouseInside, mouseEnter, mouseLeave) => (
            <div className="menu-item">
                <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <Row>{props.title}</Row>
                </div>
                {isMouseInside && props.children}
            </div>
        )}
    </Hoverable>
)
class About extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <HoverableElement title="First Menu">
                        <button>X</button>
                    </HoverableElement>
                    <Calendar />
                </div>
            </Container>
        )
    }
}

export default About