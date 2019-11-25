import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import ShamanKingCharacters from "./ShamanKingCharacters.js"
import VideoPane from "./VideoPane.js"
import ShamanKingStory from "./ShamanKingStory.js"
import ShamanKingMain from "./ShamanKingMain.js"

const ShamanKingPane = () => {
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
                            className={classnames({ active: activeTab === '13' })}
                            onClick={() => { toggle('13'); }}
                            style={{ cursor: "pointer", backgroundColor: "red", color: "azure" }}>
                            Main
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '10' })}
                            onClick={() => { toggle('10'); }}
                            style={{ cursor: "pointer", backgroundColor: "red", color: "azure" }}>
                            Characters
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '11' })}
                            onClick={() => { toggle('11'); }}
                            style={{ cursor: "pointer", backgroundColor: "red", color: "azure" }}>
                            Story
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '12' })}
                            onClick={() => { toggle('12'); }}
                            style={{ cursor: "pointer", backgroundColor: "red", color: "azure" }}>
                            Videos
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="13">
                    <ShamanKingMain />
                </TabPane>
                <TabPane tabId="10">
                    <ShamanKingCharacters />
                </TabPane>
                <TabPane tabId="11">
                    <ShamanKingStory />
                </TabPane>

                <TabPane tabId="12">
                    <VideoPane />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default ShamanKingPane;