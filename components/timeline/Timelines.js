import React, { Component } from "react";
import { Row, Col, Card, Icon } from "antd";
import Cards from "../card/Cards";
export default class Timelines extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const footerButton={
      text:"View",
      type:"internal",
      link:"#",
      btn_type:"primary",
      btn_class:"fr"
    }
    return (
      <div>
        <Row className="timeline__wrapper"  type="flex" justify="space-around" align="middle">
          <Col span={6}>
            <div className="timeline__time">
              <p>8:00 AM </p>
            </div>
          </Col>
          <Col span={18}>
            <Cards 
            title=""
            details={`Lorem Ipsum is simply dummy text of the printing and typesetting
                       industry. `}
            border="none"
            background={"gray"}
            />
          </Col>
        </Row>
        <Row className="timeline__wrapper" type="flex" justify="space-around" align="middle">
          <Col span={6}>
            <div className="timeline__time  ">
              <p>8:00 AM </p>
            </div>
          </Col>
          <Col span={18}>
            
          </Col>
        </Row>
        <Row className="timeline__wrapper" type="flex" justify="space-around" align="middle">
          <Col span={6}>
            <div className="timeline__time timeline__active">
              <p>8:00 AM </p>
            </div>
          </Col>
          <Col span={18}>
            <Cards 
            title=""
            details={`Lorem Ipsum is simply dummy text of the printing and typesetting
                       industry.`}
            border="left"
            background={"light"}
            footer={footerButton}
            />
          </Col>
        </Row>
        <Row className="timeline__wrapper" type="flex" justify="space-around" align="middle">
          <Col span={6}>
            <div className="timeline__time">
              <p>8:00 AM </p>
            </div>
          </Col>
          <Col span={18}>
            <Cards 
            title=""
            details={`Lorem Ipsum is simply dummy text of the printing and typesetting
                       industry. `}
            border="none"
            background={"gray"}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
