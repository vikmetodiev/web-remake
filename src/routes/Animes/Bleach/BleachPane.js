import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import BleachCharacters from "./BleachCharacters.js"
import VideoPane from "./VideoPane.js"
import BleachStory from "./BleachStory.js"
import BleachMain from "./BleachMain.js"
const BleachPane = () => {
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
                            className={classnames({ active: activeTab === '40' })}
                            onClick={() => { toggle('40'); }}
                            style={{ cursor: "pointer", backgroundColor: "orangered", color: "azure" }}>
                            Main
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '41' })}
                            onClick={() => { toggle('41'); }}
                            style={{ cursor: "pointer", backgroundColor: "orangered", color: "azure" }}>
                            Characters
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '42' })}
                            onClick={() => { toggle('42'); }}
                            style={{ cursor: "pointer", backgroundColor: "orangered", color: "azure" }}>
                            Story
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '43' })}
                            onClick={() => { toggle('43'); }}
                            style={{ cursor: "pointer", backgroundColor: "orangered", color: "azure" }}>
                            Videos
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="40">
                    <BleachMain />
                </TabPane>
                <TabPane tabId="41">
                    <BleachCharacters />
                </TabPane>
                <TabPane tabId="42">
                    <BleachStory />
                </TabPane>

                <TabPane tabId="43">
                    <VideoPane />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default BleachPane;