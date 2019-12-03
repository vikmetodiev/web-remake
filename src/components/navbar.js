import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ButtonGroup, Button, Container, Alert, Row, Col } from "reactstrap"
import { ReactComponent as HomeImg } from "./home-icon-silhouette.svg"
import { ReactComponent as ServiceImg } from "./handyman-tools.svg"
import { ReactComponent as AboutImg } from "./quill-drawing-a-line.svg"
import { ReactComponent as AnimeImg } from "./sword.svg"
import { ReactComponent as GamesImg } from "./labyrinth.svg"
import { ReactComponent as TodoImg } from "./todo.svg"
const Home = lazy(() => import('../routes/MainPage.js'))
const About = lazy(() => import('../routes/About.js'));
const Services = lazy(() => import('../routes/Services.js'));
const Animes = lazy(() => import('../routes/Animes.js'));
const Games = lazy(() => import('../routes/Games.js'));
const Todo = lazy(() => import("../routes/TodoList.js"))
const NotFound = lazy(() => import("./NotFound.js"))
function Navbar() {
    return (
        <div>
            <Container>
                <Alert><ButtonGroup >
                    <Row>
                        <Col md="2" xs="4"><Button href="/Home" style={{ marginRight: 15, marginTop: 0, backgroundColor: "palegreen", color: "green", display: "inline-flex" }}><HomeImg style={{ width: 15, height: "auto", marginBottom: 3, marginRight: "5px" }} /> Home</Button></Col>
                        <Col md="2" xs="4"><Button href="/About" style={{ marginRight: 15, marginTop: 0, backgroundColor: "palegreen", color: "green", display: "inline-flex" }}> <AboutImg style={{ width: 15, height: "auto", marginBottom: 3, marginRight: "5px" }} /> About</Button></Col>
                        <Col md="2" xs="4"><Button href="/Services" style={{ marginRight: 15, marginTop: 0, backgroundColor: "palegreen", color: "green", display: "inline-flex" }}><ServiceImg style={{ width: 15, height: "auto", marginBottom: 3, marginRight: "5px" }} /> Services</Button></Col>
                        <Col md="2" xs="4"><Button href="/Animes" style={{ marginTop: 0, marginRight: 15, backgroundColor: "palegreen", color: "green", display: "inline-flex" }}><AnimeImg style={{ width: 15, height: "auto", marginBottom: 3, marginRight: "5px" }} /> Animes</Button></Col>
                        <Col md="2" xs="4"><Button href="/Games" style={{ marginTop: 0, marginRight: 15, backgroundColor: "palegreen", color: "green", display: "inline-flex" }}><GamesImg style={{ width: 15, height: "auto", marginBottom: 3, marginRight: "5px" }} /> Games</Button></Col>
                        <Col md="2" xs="4"><Button href="/Todo" style={{ marginTop: 0, marginRight: 15, backgroundColor: "palegreen", color: "green", display: "inline-flex" }} ><TodoImg style={{ width: 15, height: "auto", marginBottom: 3, marginRight: "5px" }} />Todo </Button></Col>
                    </Row>
                </ButtonGroup>
                    <br />
                </Alert>
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/Home" component={Home} />
                            <Route path="/Todo" component={Todo} />
                            <Route path="/About" component={About} />
                            <Route path="/Services" component={Services} />
                            <Route path="/Animes" component={Animes} />
                            <Route path="/Games" component={Games} />
                            <Route path="*" exact={true} component={NotFound} />
                        </Switch>
                    </Suspense>
                </Router>
            </Container>
        </div>
    )
}

export default Navbar