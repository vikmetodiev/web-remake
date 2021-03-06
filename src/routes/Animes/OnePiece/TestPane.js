import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import OPCharacters from "./OPCharacters.js"
import VideoPane from "./VideoPane.js"
import OPStory from "./OPStory.js"
import OnePieceMain from "./OnePieceMain.js"
const OnePiecePane = () => {
    const [activeTab, setActiveTab] = useState('13');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container >
            <br/>
            <div className="text-center">
                <Nav tabs className="text-center" style={{ display: "inline-flex" }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '13' })}
                            onClick={() => { toggle('13'); }}
                            style={{ cursor: "pointer", backgroundColor: "crimson", color: "azure" }}>
                            Main
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '10' })}
                            onClick={() => { toggle('10'); }}
                            style={{ cursor: "pointer", backgroundColor: "crimson", color: "azure" }}>
                            Characters
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '11' })}
                            onClick={() => { toggle('11'); }}
                            style={{ cursor: "pointer", backgroundColor: "crimson", color: "azure" }}>
                            Story
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '12' })}
                            onClick={() => { toggle('12'); }}
                            style={{ cursor: "pointer", backgroundColor: "crimson", color: "azure" }}>
                            Videos
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="13">
                    <OnePieceMain />
                </TabPane>
                <TabPane tabId="10">
                    <OPCharacters />
                </TabPane>
                <TabPane tabId="11">
                    <OPStory />
                </TabPane>

                <TabPane tabId="12">
                    <VideoPane />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default OnePiecePane;