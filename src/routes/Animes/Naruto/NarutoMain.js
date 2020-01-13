import React from "react"

import { Container } from "reactstrap"

function NarutoMain() {
    return (
        <Container>
            <h1 style={{ color: "azure" }}>Naruto</h1>
            <img src="/naruto.jpg" alt="onePiece" style={{ position: "relative", width: "60%" }} />
        </Container>
    )
}
export default NarutoMain