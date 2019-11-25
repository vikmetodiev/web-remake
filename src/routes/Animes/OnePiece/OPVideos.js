import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
class OPVideos extends React.Component {
    render() {
        return (
            <Container className="text-center">
                <h1 style={{ color: "azure" }}>One Piece AMV's <Button href="/Animes">Back</Button></h1>
                <h2>1</h2>
                <div style={{ marginBottom: 15,margin:15 }}><Button style={{ marginRight: 15 }} href="/OPVideos">1</Button><Button style={{ marginRight: 15 }} href="/SecondVideos">2</Button><Button style={{ marginRight: 15 }} href="/ThirdVideos">3</Button><Button style={{ marginRight: 15 }} href="/FourthVideos">4</Button><Button href="/SecondVideos" style={{ marginRight: 15 }}>Next</Button></div>
                <Row >
                    <Col md="4" sm="12" xs="12"><iframe width="100%" height="215" src="https://www.youtube.com/embed/8vJcG7lPnDY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12"><iframe width="100%" height="215" src="https://www.youtube.com/embed/cCKV0HauhSQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12" ><iframe width="100%" height="215" src="https://www.youtube.com/embed/S78lnml_K6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12"><iframe width="100%" height="215" src="https://www.youtube.com/embed/6aQ_5jyamoU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12" ><iframe width="100%" height="215" src="https://www.youtube.com/embed/bHTiCsZN1eA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12"><iframe width="100%" height="215" src="https://www.youtube.com/embed/yQJJqM1Wk6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12"><iframe width="100%" height="215" src="https://www.youtube.com/embed/--LU5aSxbv0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12"><iframe width="100%" height="215" src="https://www.youtube.com/embed/2p0mL6nXzLM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12"><iframe width="100%" height="215" src="https://www.youtube.com/embed/bMV564i8dRk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12"><iframe width="100%" height="215" src="https://www.youtube.com/embed/vN8U2MHjyxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12"><iframe width="100%" height="215" src="https://www.youtube.com/embed/flKBl7jgFMY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                    <Col md="4" sm="12" xs="12"><iframe width="100%" height="215" src="https://www.youtube.com/embed/-VTZy5AL4dU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe></Col>
                </Row>
            </Container>
        )
    }
}
export default OPVideos 