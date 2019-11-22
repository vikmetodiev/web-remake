import React, { useState } from "react"
import Header from "./tetris/Header.js"
import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';

import Quote from "./Quote.js"

import Trivia from "./Trivia.js"

import Snake from "./Snake.js"

import Hangman from "./hangman/Hangman.js"

import Tetris from "./tetris/Tetris.js"
const Navs = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container >
            <div className="text-center">
                <Nav tabs className="text-center" style={{display:"inline-flex"}}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
                            Quotes
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
                            Trivia
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
                            Snake
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
                            Hangman
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '5' })}
                            onClick={() => { toggle('5'); }}
                            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
                            Tetris
          </NavLink>
                    </NavItem>

                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Quote />
                </TabPane>
                <TabPane tabId="2">
                    <Trivia />
                </TabPane>

                <TabPane tabId="3">
                    <Snake />
                </TabPane>
                <TabPane tabId="4">
                    <Hangman />
                </TabPane>
                <TabPane tabId="5" className="tetrisBack">
                    <Header />
                    <Tetris />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default Navs;