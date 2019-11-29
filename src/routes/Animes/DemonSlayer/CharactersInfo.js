
import React, { useState } from "react"
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    Col, Collapse

} from 'reactstrap';



function CharactersInfo(props) {

    const [collapse, setCollapse] = useState(false);

    const toggle = () => setCollapse(!collapse);
    return (
        <div>
            <Col xs="4">
                <Card className="column">
                    <CardHeader>{props.item.name}</CardHeader>
                    <CardBody className="text-center">
                        <img style={{width:"50%",height:100, padding:5}} className="imgData" src={props.item.url} alt="error 3000"/>
                        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem'}}>Information</Button>
                        <Collapse isOpen={collapse}>
                            <Card>
                                <CardBody >
                                    {props.item.info}
                                </CardBody>
                            </Card>
                        </Collapse>
                    </CardBody>
                    <CardFooter>Bottom part</CardFooter>
                </Card>
            </Col>
        </div>
    )

}
export default CharactersInfo