import React, { Component } from 'react';
import {
    Card, Row, Col , Icon
} from 'antd';
import { Link } from "react-router-dom";
import { getName, getAddress, getTaxonomy , getSlug } from "../../services/extra/DoctorHelpers";
import RatingStars from '../RatingStars/RatingStars';
class DrCardLong extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }  
    render() {
        const {
            doctor
        } = this.props;
        const title     = getName(doctor).toLowerCase()
        const address   = getAddress(doctor).toLowerCase()
        const taxonomy  = getTaxonomy(doctor)
        const slug = getSlug(doctor).toLowerCase()
        if(address.trim() === "")
        return null
        
        return (
            <div className="c-dr-card-long">
                <Card className="c-dr-card-long__card">
                    <Row type="flex" >
                        <Col className="c-dr-card-long__img-wrap">
                            <img src="../../../../images/dr-demo-5.jpg" className="c-dr-card-long__img" />
                        </Col>
                        <Col className="c-dr-card-long__description" span={8}>
                            <Link to={"/doctors/"+slug}><h3 className="c-dr-card-long__title">{title}</h3></Link>
                            <p className="c-dr-card-long__designation">{taxonomy}</p>
                            <RatingStars rating={4} />
                            <p className="c-dr-card-long__address">{address}</p>
                            <Link to={"/doctors/"+slug}>View Profile <Icon type="arrow-right" /></Link>
                        </Col>
                        <Col className="c-dr-card-long__time-wrap" span={10}>
                           Dr. Andrew Fagelman is board certified with the American Board of Internal Medicine and current physician at SOHO Health NY.
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default DrCardLong;