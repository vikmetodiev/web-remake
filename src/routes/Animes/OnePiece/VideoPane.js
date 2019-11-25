import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import FourthVideos from "./FourthVideos.js"
import OPVideos from "./OPVideos.js"
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
                            className={classnames({ active: activeTab === '20' })}
                            onClick={() => { toggle('20'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            1
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '21' })}
                            onClick={() => { toggle('21'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            2
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '22' })}
                            onClick={() => { toggle('22'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}} >
                            3
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '23' })}
                            onClick={() => { toggle('23'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            4
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="20">
                    <OPVideos />
                </TabPane>
                <TabPane tabId="21">
                    <SecondVideos />
                </TabPane>
                <TabPane tabId="22">
                    <ThirdVideos />
                </TabPane>

                <TabPane tabId="23">
                    <FourthVideos />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default VideoPane;