import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';
import FourthVideos from "./FourthVideos.js"
import BleachVideos from "./BleachVideos.js"
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
                            className={classnames({ active: activeTab === '44' })}
                            onClick={() => { toggle('44'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            1
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '45' })}
                            onClick={() => { toggle('45'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            2
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '46' })}
                            onClick={() => { toggle('46'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}} >
                            3
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '47' })}
                            onClick={() => { toggle('47'); }}
                            style={{ cursor: "pointer", backgroundColor: "grey", color: "black",margin:15}}>
                            4
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="44">
                    <BleachVideos />
                </TabPane>
                <TabPane tabId="45">
                    <SecondVideos />
                </TabPane>
                <TabPane tabId="46">
                    <ThirdVideos />
                </TabPane>

                <TabPane tabId="47">
                    <FourthVideos />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default VideoPane;