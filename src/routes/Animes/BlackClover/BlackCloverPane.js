import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import BlackCloverCharacters from "./BlackCloverCharacters.js"
import VideoPane from "./VideoPane.js"
import BlackCloverStory from "./BlackCloverStory.js"
import BlackCloverMain from "./BlackCloverMain.js"
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
                            style={{ cursor: "pointer", backgroundColor: "indianred", color: "azure" }}>
                            Main
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '31' })}
                            onClick={() => { toggle('31'); }}
                            style={{ cursor: "pointer", backgroundColor: "indianred", color: "azure" }}>
                            Characters
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '32' })}
                            onClick={() => { toggle('32'); }}
                            style={{ cursor: "pointer", backgroundColor: "indianred", color: "azure" }}>
                            Story
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '33' })}
                            onClick={() => { toggle('33'); }}
                            style={{ cursor: "pointer", backgroundColor: "indianred", color: "azure" }}>
                            Videos
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="30">
                    <BlackCloverMain />
                </TabPane>
                <TabPane tabId="31">
                    <BlackCloverCharacters />
                </TabPane>
                <TabPane tabId="32">
                    <BlackCloverStory />
                </TabPane>

                <TabPane tabId="33">
                    <VideoPane />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default OnePiecePane;