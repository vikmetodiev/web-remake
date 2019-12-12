import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import VideoPane from "./VideoPane.js"
import DemonSlayerStory from "./DemonSlayerStory.js"
import DemonSlayerMain from "./DemonSlayerMain.js"
import DemonSlayerCharacters from "./DemonSlayerCharacters.js";
const DemonSlayerPane = () => {
    const [activeTab, setActiveTab] = useState('50');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container >
            <div className="text-center">
                <Nav tabs className="text-center" style={{ display: "inline-flex" }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '50' })}
                            onClick={() => { toggle('50'); }}
                            style={{ cursor: "pointer", backgroundColor: "LightCoral", color: "azure" }}>
                            Main
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '51' })}
                            onClick={() => { toggle('51'); }}
                            style={{ cursor: "pointer", backgroundColor: "LightCoral", color: "azure" }}>
                            Characters
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '52' })}
                            onClick={() => { toggle('52'); }}
                            style={{ cursor: "pointer", backgroundColor: "LightCoral", color: "azure" }}>
                            Story
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '53' })}
                            onClick={() => { toggle('53'); }}
                            style={{ cursor: "pointer", backgroundColor: "LightCoral", color: "azure" }}>
                            Videos
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="50">
                    <DemonSlayerMain />
                </TabPane>
                <TabPane tabId="51">
                    <DemonSlayerCharacters />
                </TabPane>
                <TabPane tabId="52">
                    <DemonSlayerStory />
                </TabPane>

                <TabPane tabId="53">
                    <VideoPane />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default DemonSlayerPane;