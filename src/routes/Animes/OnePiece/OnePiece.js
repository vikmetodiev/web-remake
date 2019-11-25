import React from "react"


import { Button, Container, ButtonGroup } from "reactstrap"
function OnePiece() {
    return (
        <Container>
            <h1 style={{color:"azure"}}>One piece</h1>
            <ButtonGroup className="onePieceButtons"><Button className="onePieceButtons" href="/OPCharacters">Characters</Button><Button className="onePieceButtons" href="/OPStory">Story</Button><Button className="onePieceButtons" href="/OPVideos">Videos</Button></ButtonGroup>
        </Container>
    )
}
export default OnePiece