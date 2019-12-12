import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import ShokugekiCharacters from "./ShokugekiCharacters.js"
import VideoPane from "./VideoPane.js"
import ShokugekiStory from "./ShokugekiStory.js"
import ShokugekiMain from "./ShokugekiMain.js"
const OnePiecePane = () => {
    const [activeTab, setActiveTab] = useState('30');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container >
            <div className="text-center">
                <Nav tabs className="text-center" style={{ display: "inline-flex" }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '30' })}
                            onClick={() => { toggle('30'); }}
                            style={{ cursor: "pointer", backgroundColor: "LightSalmon", color: "azure" }}>
                            Main
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '31' })}
                            onClick={() => { toggle('31'); }}
                            style={{ cursor: "pointer", backgroundColor: "LightSalmon", color: "azure" }}>
                            Characters
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '32' })}
                            onClick={() => { toggle('32'); }}
                            style={{ cursor: "pointer", backgroundColor: "LightSalmon", color: "azure" }}>
                            Story
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '33' })}
                            onClick={() => { toggle('33'); }}
                            style={{ cursor: "pointer", backgroundColor: "LightSalmon", color: "azure" }}>
                            Videos
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="30">
                    <ShokugekiMain />
                </TabPane>
                <TabPane tabId="31">
                    <ShokugekiCharacters />
                </TabPane>
                <TabPane tabId="32">
                    <ShokugekiStory />
                </TabPane>

                <TabPane tabId="33">
                    <VideoPane />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default OnePiecePane;