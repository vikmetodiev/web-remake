import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import FourthVideos from "./FourthVideos.js"
import BlackCloverVideos from "./BlackCloverVideos.js"
import SecondVideos from "./SecondVideos.js"
import ThirdVideos from "./ThirdVideos.js"
const VideoPane = () => {
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
                            className={classnames({ active: activeTab === '34' })}
                            onClick={() => { toggle('34'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            1
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '35' })}
                            onClick={() => { toggle('35'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            2
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '36' })}
                            onClick={() => { toggle('36'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}} >
                            3
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '37' })}
                            onClick={() => { toggle('37'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            4
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="34">
                    <BlackCloverVideos />
                </TabPane>
                <TabPane tabId="35">
                    <SecondVideos />
                </TabPane>
                <TabPane tabId="36">
                    <ThirdVideos />
                </TabPane>

                <TabPane tabId="37">
                    <FourthVideos />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default VideoPane;