import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import ShamanKingCharacters from "./ShamanKingCharacters.js"
import VideoPane from "./VideoPane.js"
import ShamanKingStory from "./ShamanKingStory.js"
import ShamanKingMain from "./ShamanKingMain.js"

const ShamanKingPane = () => {
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
                            style={{ cursor: "pointer", backgroundColor: "red", color: "azure" }}>
                            Main
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '51' })}
                            onClick={() => { toggle('51'); }}
                            style={{ cursor: "pointer", backgroundColor: "red", color: "azure" }}>
                            Characters
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '52' })}
                            onClick={() => { toggle('52'); }}
                            style={{ cursor: "pointer", backgroundColor: "red", color: "azure" }}>
                            Story
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '53' })}
                            onClick={() => { toggle('53'); }}
                            style={{ cursor: "pointer", backgroundColor: "red", color: "azure" }}>
                            Videos
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="50">
                    <ShamanKingMain />
                </TabPane>
                <TabPane tabId="51">
                    <ShamanKingCharacters />
                </TabPane>
                <TabPane tabId="52">
                    <ShamanKingStory />
                </TabPane>

                <TabPane tabId="53">
                    <VideoPane />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default ShamanKingPane;