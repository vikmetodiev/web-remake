import React from "react"


import { Button, Container } from "reactstrap"
function Naruto() {
    return (
        <Container>
            <h1 style={{ color: "azure" }}>Naruto</h1>
            <aside>
                <ul style={{position:"absolute",listStyle:"none"}}>
                    <li><Button className="onePieceButtons" href="/NarutoCharacters">Characters</Button></li>
                    <li> <Button className="onePieceButtons" href="/NarutoStory">Story</Button></li>
                    <li> <Button className="onePieceButtons" href="/NarutoVideos">Videos</Button></li>
                </ul>
            </aside>
            <img src="/naruto.jpg" alt="nartuo" style={{position:"relative",width:"60%"}}/>
        </Container>
    )
}
export default Naruto