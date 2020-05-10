import React, { Component } from 'react'
import withBasicLayout from '../../components/layouts/basic-layout/withBasicLayout'
import Sidebar from '../../components/patientDashboard/sidebar';
import ProfileData from '../../components/patientDashboard/profileData';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <ProfileData />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default withBasicLayout(Dashboard)