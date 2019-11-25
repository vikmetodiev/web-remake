import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import NarutoCharacters from "./NarutoCharacters.js"
import VideoPane from "./VideoPane.js"
import NarutoStory from "./NarutoStory.js"
import NarutoMain from "./NarutoMain.js"
const OnePiecePane = () => {
    const [activeTab, setActiveTab] = useState('1');

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
                            style={{ cursor: "pointer", backgroundColor: "crimson", color: "azure" }}>
                            Main
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '31' })}
                            onClick={() => { toggle('31'); }}
                            style={{ cursor: "pointer", backgroundColor: "crimson", color: "azure" }}>
                            Characters
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '32' })}
                            onClick={() => { toggle('32'); }}
                            style={{ cursor: "pointer", backgroundColor: "crimson", color: "azure" }}>
                            Story
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '33' })}
                            onClick={() => { toggle('33'); }}
                            style={{ cursor: "pointer", backgroundColor: "crimson", color: "azure" }}>
                            Videos
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="30">
                    <NarutoMain />
                </TabPane>
                <TabPane tabId="31">
                    <NarutoCharacters />
                </TabPane>
                <TabPane tabId="32">
                    <NarutoStory />
                </TabPane>

                <TabPane tabId="33">
                    <VideoPane />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default OnePiecePane;