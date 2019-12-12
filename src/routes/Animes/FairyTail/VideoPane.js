import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import FourthVideos from "./FourthVideos.js"
import FairyTailVideos from "./FairyTailVideos.js"
import SecondVideos from "./SecondVideos.js"
import ThirdVideos from "./ThirdVideos.js"
const VideoPane = () => {
    const [activeTab, setActiveTab] = useState('64');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container >
            <div className="text-center">
                <Nav tabs className="text-center" style={{ display: "inline-flex" }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '64' })}
                            onClick={() => { toggle('64'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            1
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '65' })}
                            onClick={() => { toggle('65'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            2
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '66' })}
                            onClick={() => { toggle('66'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}} >
                            3
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '67' })}
                            onClick={() => { toggle('67'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            4
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="64">
                    <FairyTailVideos />
                </TabPane>
                <TabPane tabId="65">
                    <SecondVideos />
                </TabPane>
                <TabPane tabId="66">
                    <ThirdVideos />
                </TabPane>

                <TabPane tabId="67">
                    <FourthVideos />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default VideoPane;