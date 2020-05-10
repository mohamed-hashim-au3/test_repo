import React, { Component } from 'react';
import withBasicLayout from '../components/layouts/basic-layout/withBasicLayout'
import Sidebar from '../components/howitworks/sidebar';
import LeftItems from '../components/howitworks/leftitems';

class HowItWorks extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-10">
                            <LeftItems />
                        </div>
                        <div className="col-lg-2 col-md-2">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default withBasicLayout(HowItWorks)