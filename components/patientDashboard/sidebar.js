import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="c-dashboard__profileSidebar">
                    <div className="c-dashboard__profileWrapper">
                        <div className="c-dashboard__profileImage">
                            <a href="#">
                                <img src="/images/profile.jpg" alt="" />
                            </a>
                        </div>
                        <div className="c-dashboard__profileContent">
                            <h3>Richard Wilson</h3>
                            <h5>24 Jul 1983, 38 years</h5>
                            <h5>Newyork, USA</h5>
                        </div>
                    </div>
                    <div className="c-dashboard__menuWrapper">
                        <div className="c-dashboard__menuNav">
                            <ul>
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#">Favourite</a>
                                </li>
                                <li>
                                    <a href="#">Profile Settings</a>
                                </li>
                                <li>
                                    <a href="#">Change Password</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Sidebar;