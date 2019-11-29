import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import FairyTailCharacters from "./FairyTailCharacters.js"
import VideoPane from "./VideoPane.js"
import FairyTailStory from "./FairyTailStory.js"
import FairyTailMain from "./FairyTailMain.js"
const FairyTailPane = () => {
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
                            className={classnames({ active: activeTab === '60' })}
                            onClick={() => { toggle('60'); }}
                            style={{ cursor: "pointer", backgroundColor: "firebrick", color: "azure" }}>
                            Main
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '61' })}
                            onClick={() => { toggle('61'); }}
                            style={{ cursor: "pointer", backgroundColor: "firebrick", color: "azure" }}>
                            Characters
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '62' })}
                            onClick={() => { toggle('62'); }}
                            style={{ cursor: "pointer", backgroundColor: "firebrick", color: "azure" }}>
                            Story
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '63' })}
                            onClick={() => { toggle('63'); }}
                            style={{ cursor: "pointer", backgroundColor: "firebrick", color: "azure" }}>
                            Videos
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="60">
                    <FairyTailMain />
                </TabPane>
                <TabPane tabId="61">
                    <FairyTailCharacters />
                </TabPane>
                <TabPane tabId="62">
                    <FairyTailStory />
                </TabPane>

                <TabPane tabId="63">
                    <VideoPane />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default FairyTailPane;