import React, { useState } from "react"

import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';

import classnames from 'classnames';


import OnePiece from "./Animes/OnePiece/OnePiece.js"
import Naruto from "./Animes/Naruto/Naruto.js"
import Bleach from "./Animes/Bleach/Bleach.js"
import ShamanKing from "./Animes/ShamanKing/ShamanKing.js"
import BlackClover from "./Animes/BlackClover/BlackClover.js"
const Animes = () => {
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
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            One Piece
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Naruto
          </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Bleach
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Shaman king
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '5' })}
                            onClick={() => { toggle('5'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Black Clover
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '6' })}
                            onClick={() => { toggle('6'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Shokugeki no Soma
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '7' })}
                            onClick={() => { toggle('7'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Demon Slayer
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '8' })}
                            onClick={() => { toggle('8'); }}
                            style={{ cursor: "pointer", backgroundColor: "darkred", color: "azure" }}>
                            Fairy Tail
          </NavLink>
                    </NavItem>

                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <OnePiece />
                </TabPane>
                <TabPane tabId="2">
                    <Naruto />
                </TabPane>

                <TabPane tabId="3">
                    <Bleach />
                </TabPane>
                <TabPane tabId="4">
                    <ShamanKing />
                </TabPane>
                <TabPane tabId="5">
                    <BlackClover />
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default Animes;