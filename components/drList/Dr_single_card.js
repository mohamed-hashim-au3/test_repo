import React, { Component } from 'react';
import { 
    // Select,
    Card  } from 'antd';
// import debounce from 'lodash/debounce';
// import axios from 'axios';
import { getName, getAddress } from "../../services/extra/DoctorHelpers";
// const { Option, OptGroup } = Select;
export default class Dr_single_card extends Component {
	// constructor(props) {
	// 	super(props);
	
    // }
	render() {
		const {
            doctor
        } = this.props
        const title     = getName(doctor)
        const address   = getAddress(doctor)
        if(address.trim() === "")
        return null
		return (
			<div style={{marginTop: 20}} >
				<Card title={title} bordered={false}>
                    {address}
                </Card>
			</div>
		);
	}
}
Dr_single_card.defaultProps = {
    doctor: {}
}