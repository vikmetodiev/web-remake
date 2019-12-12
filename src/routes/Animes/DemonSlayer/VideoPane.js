import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import FourthVideos from "./FourthVideos.js"
import DemonSlayerVideos from "./DemonSlayerVideos.js"
import SecondVideos from "./SecondVideos.js"
import ThirdVideos from "./ThirdVideos.js"
const VideoPane = () => {
    const [activeTab, setActiveTab] = useState('54');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container >
            <div className="text-center">
                <Nav tabs className="text-center" style={{ display: "inline-flex" }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '54' })}
                            onClick={() => { toggle('54'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            1
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '55' })}
                            onClick={() => { toggle('55'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            2
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '56' })}
                            onClick={() => { toggle('56'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}} >
                            3
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '57' })}
                            onClick={() => { toggle('57'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            4
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="54">
                    <DemonSlayerVideos />
                </TabPane>
                <TabPane tabId="55">
                    <SecondVideos />
                </TabPane>
                <TabPane tabId="56">
                    <ThirdVideos />
                </TabPane>

                <TabPane tabId="57">
                    <FourthVideos />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default VideoPane;