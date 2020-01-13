import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';

import About from "./ElectroPulse/About"
import Home from "./ElectroPulse/Home"
import Contacts from "./ElectroPulse/Contacts"
import Projects from "./ElectroPulse/Projects"

const Services = () => {
    const [activeTab, setActiveTab] = useState('11');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container >
            <h1 className="text-center" style={{ color: "green", fontStyle: "oblique" }}>Electro Pulse</h1>
            <div className="text-center">
                <Nav tabs className="text-center" style={{ display: "inline-flex" }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '11' })}
                            onClick={() => { toggle('11'); }}
                            style={{ cursor: "pointer", backgroundColor: "azure", color: "black" }}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '12' })}
                            onClick={() => { toggle('12'); }}
                            style={{ cursor: "pointer", backgroundColor: "azure", color: "black" }}>
                            About us
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '13' })}
                            onClick={() => { toggle('13'); }}
                            style={{ cursor: "pointer", backgroundColor: "azure", color: "black" }}>
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '14' })}
                            onClick={() => { toggle('14'); }}
                            style={{ cursor: "pointer", backgroundColor: "azure", color: "black" }}>
                            Contacts
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="11">
                    <Home />
                </TabPane>
                <TabPane tabId="12">
                    <About />
                </TabPane>

                <TabPane tabId="13">
                    <Projects />
                </TabPane>
                <TabPane tabId="14">
                    <Contacts />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default Services;