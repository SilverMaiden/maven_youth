import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Alignment,
    Button,
    Classes,
    H5,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
} from "@blueprintjs/core";

import Header from './Header/Header.jsx';
import CustomTabs from './CustomTabs/CustomTabs.jsx'
import NavPills from './NavPills/NavPills.jsx'

function Nav() {
    return (
            <div>
                <Header
                    color='transparent'
                    fixed={true}
                    brand='Maven'
                >
                    <NavPills
                        color="info"
                        tabs={[
                            {
                            tabButton:"About Us",
                              tabContent: (
                                <span>
                                  <p>
                                    Collaboratively administrate empowered markets via
                                    plug-and-play networks. Dynamically procrastinate
                                    B2C users after installed base benefits.
                                  </p>
                                  <br />
                                  <p>
                                    Dramatically visualize customer directed convergence
                                    without revolutionary ROI. Collaboratively
                                    administrate empowered markets via plug-and-play
                                    networks. Dynamically procrastinate B2C users after
                                    installed base benefits.
                                  </p>
                                  <br />
                                  <p>This is very nice.</p>
                                </span>
                              )
                            },
                            {
                              tabButton: "Settings",
                              tabContent: (
                                <span>
                                  <p>
                                    Efficiently unleash cross-media information without
                                    cross-media value. Quickly maximize timely
                                    deliverables for real-time schemas.
                                  </p>
                                  <br />
                                  <p>
                                    Dramatically maintain clicks-and-mortar solutions
                                    without functional solutions.
                                  </p>
                                </span>
                              )
                            },
                            {
                              tabButton: "Options",
                              tabContent: (
                                <span>
                                  <p>
                                    Completely synergize resource taxing relationships
                                    via premier niche markets. Professionally cultivate
                                    one-to-one customer service with robust ideas.{" "}
                                  </p>
                                  <br />
                                  <p>
                                    Dynamically innovate resource-leveling customer
                                    service for state of the art customer service.
                                  </p>
                                </span>
                              )
                            }
                          ]} />

                </Header>
            </div>
    )

}

export default Nav;

