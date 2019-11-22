import React from "react"

import NumberFormat from 'react-number-format';


import { Button, Container, ButtonGroup } from "reactstrap"
function OnePiece() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date("2015-03");
    console.log(d)
    console.log("The current month is " + monthNames[d.getMonth()])
    const year = d.getFullYear()
    return (
        <Container>
<h1>{year} - {monthNames[d.getMonth()]}</h1>
            <h1>One piece</h1>
            <ButtonGroup><Button href="/OPCharacters">Characters</Button><Button href="/OPStory">Story</Button><Button href="/OPVideos">Videos</Button></ButtonGroup>
        </Container>
    )
}
export default OnePiece