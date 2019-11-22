import React from 'react';
import { Card, CardText, CardImg, CardImgOverlay, Col } from 'reactstrap';

function DifferentTodo(props) {
    return (
        <Col sm="6">
            <div className="product1">

                <Card inverse>
                    <CardImg width="100%" src="/phototo.jpg" alt="Card image cap" />
                    <CardImgOverlay>
                        <CardText className="mediaFontSize" style={{color:"black",fontWeight:"bold"}}><input className="checkbox"style={{width:15}}type="checkbox" onChange={() => props.handleClick(props.item.id)} />{props.item.text}</CardText>

                    </CardImgOverlay>
                </Card>

            </div>
        </Col >
    );
};

export default DifferentTodo;