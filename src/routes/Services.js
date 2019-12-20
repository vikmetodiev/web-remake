import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';

const Services = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container >
            <h1 className="text-center" style={{color:"green"}}>Electro Pulse</h1>
            <div className="text-center">
                <Nav tabs className="text-center" style={{ display: "inline-flex" }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '10' })}
                            onClick={() => { toggle('10'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Home
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '12' })}
                            onClick={() => { toggle('12'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            About us
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '13' })}
                            onClick={() => { toggle('13'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Projects
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '14' })}
                            onClick={() => { toggle('14'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Contact us
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '15' })}
                            onClick={() => { toggle('15'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Future Goals
          </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="10">
                </TabPane>
                <TabPane tabId="12">
                </TabPane>

                <TabPane tabId="13">
                </TabPane>
                <TabPane tabId="14">
                </TabPane>
                <TabPane tabId="15">
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default Services;